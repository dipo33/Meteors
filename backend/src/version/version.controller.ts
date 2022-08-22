import { Controller, Get, Param } from '@nestjs/common';
import {
  GameVersionModel,
  MeteorModel,
  VersionService,
} from './version.service';

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
  async getMeteorsByVersionId(@Param('id') id: string): Promise<MeteorModel[]> {
    return this.versionService.meteors({
      where: { gameVersionId: Number(+id) },
    });
  }
}
