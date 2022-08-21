import { Controller, Get, Param } from '@nestjs/common';
import { VersionService } from './version.service';
import { GameVersion as GameVersionModel, Meteor } from '@prisma/client';

@Controller('/versions')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Get()
  async getVersions(): Promise<GameVersionModel[]> {
    return this.versionService.versions();
  }

  @Get('/:id')
  async getVersionById(@Param('id') id: string): Promise<GameVersionModel> {
    return this.versionService.version({ id: Number(+id) });
  }

  @Get('/:id/meteors')
  async getMeteorsByVersionId(@Param('id') id: string): Promise<Meteor[]> {
    return this.versionService.meteors({
      where: { gameVersionId: Number(+id) },
    });
  }
}
