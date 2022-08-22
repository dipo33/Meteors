import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}

bootstrap().then(() => console.log('Server is running on port', port));
