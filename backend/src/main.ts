import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import * as fs from 'fs';
import 'dotenv/config';

const port = process.env.BACKEND_PORT;
const host = process.env.BACKEND_HOST;

async function createApp() {
  if (process.env.ENABLE_HTTPS === 'true') {
    const httpsOptions = {
      key: fs.readFileSync(process.env.SSL_KEY),
      cert: fs.readFileSync(process.env.SSL_CERTIFICATE),
    };

    return await NestFactory.create(AppModule, { httpsOptions });
  } else {
    return await NestFactory.create(AppModule);
  }
}

async function bootstrap() {
  const app = await createApp();
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(port, host);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}

bootstrap().then(() => console.log('Server is running on port', port));
