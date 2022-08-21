import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { VersionModule } from './version/version.module';

@Module({
  imports: [VersionModule, PrismaModule],
})
export class AppModule {}
