import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Running seed.ts');

  const testMeteor = await prisma.meteor.create({
    data: {
      name: 'Test Meteor',
      cost: 69420,
      radius: 42,
    },
  });

  const oreIron = await prisma.meteorItem.create({
    data: {
      name: 'Iron Ore',
      weight: 50,
      meteorId: testMeteor.id,
    },
  });

  const oreCopper = await prisma.meteorItem.create({
    data: {
      name: 'Copper Ore',
      weight: 50,
      meteorId: testMeteor.id,
    },
  });

  const oreTin = await prisma.meteorItem.create({
    data: {
      name: 'Tin Ore',
      weight: 50,
      meteorId: testMeteor.id,
    },
  });

  const oreSilver = await prisma.meteorItem.create({
    data: {
      name: 'Silver Ore',
      weight: 50,
      meteorId: testMeteor.id,
    },
  });

  const oreLead = await prisma.meteorItem.create({
    data: {
      name: 'Lead Ore',
      weight: 50,
      meteorId: testMeteor.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
