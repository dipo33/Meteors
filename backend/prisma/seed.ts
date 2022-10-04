import { PrismaClient } from '@prisma/client';
import { Octokit } from 'octokit';

import 'dotenv/config';
import * as AdmZip from 'adm-zip';
import axios from 'axios';

const prisma = new PrismaClient();

async function main() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const result = await octokit.request('GET /repos/{owner}/{repo}/releases', {
    owner: 'GTNewHorizons',
    repo: 'GT-New-Horizons-Modpack',
  });

  for (const version of result.data) {
    const found = await prisma.gameVersion.findFirst({
      where: {
        name: version.name,
      },
    });

    if (found !== null) {
      console.log('Version', version.name, 'already exists ');
      continue;
    }

    console.log('Downloading', version.name);
    const gameVersion = await prisma.gameVersion.create({
      data: {
        name: version.name,
        createdAt: version.created_at,
      },
    });

    const latestUrl = version.zipball_url;
    const response = await axios.get(latestUrl, {
      responseType: 'arraybuffer',
    });

    const buffer = Buffer.from(response.data, 'utf-8');
    const zip = new AdmZip(buffer);

    for (const meteorEntry of zip.getEntries()) {
      if (
        meteorEntry.entryName.includes('config/BloodMagic/meteors/') &&
        !meteorEntry.isDirectory
      ) {
        const meteorName = parseEntry(meteorEntry.entryName);

        let meteorJSON;
        try {
          meteorJSON = JSON.parse(meteorEntry.getData().toString('utf-8'));
        } catch (e) {
          console.log('Version', version.name, 'failed to parse');
          await prisma.gameVersion.delete({
            where: {
              id: gameVersion.id,
            },
          });

          break;
        }

        const catalystName = `${meteorJSON.focusModId}:${meteorJSON.focusName}:${meteorJSON.focusMeta}`;
        const meteor = await prisma.meteor.create({
          data: {
            name: meteorName,
            catalyst: catalystName,
            radius: parseInt(meteorJSON.radius),
            cost: parseInt(meteorJSON.cost),
            gameVersionId: gameVersion.id,
          },
        });

        for (let i = 0; i < meteorJSON.ores.length; i += 2) {
          await prisma.meteorItem.create({
            data: {
              name: meteorJSON.ores[i],
              weight: parseInt(meteorJSON.ores[i + 1]),
              meteorId: meteor.id,
            },
          });
        }
      }
    }
  }
}

function parseEntry(entry: string): string {
  const dirs = entry.split('/');
  return dirs[dirs.length - 1].split('.')[0];
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
