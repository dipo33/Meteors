import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GameVersion, Meteor, MeteorItem, Prisma } from '@prisma/client';

type GameVersionModel = GameVersion;
type MeteorModel = Meteor & { items: MeteorItem[] };

@Injectable()
export class VersionService {
  constructor(private readonly prisma: PrismaService) {}

  async versions(): Promise<GameVersionModel[]> {
    return this.prisma.gameVersion.findMany();
  }

  async version(
    versionWhereUniqueInput: Prisma.GameVersionWhereUniqueInput,
  ): Promise<GameVersionModel> {
    return this.prisma.gameVersion.findUnique({
      where: versionWhereUniqueInput,
    });
  }

  async meteors(params: {
    where: Prisma.MeteorWhereInput;
  }): Promise<MeteorModel[]> {
    const { where } = params;
    return this.prisma.meteor.findMany({
      where,
      include: {
        items: true,
      },
    });
  }
}
