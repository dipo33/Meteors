import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import * as fs from 'fs';
import 'dotenv/config';

const port = process.env.BACKEND_PORT;
const host = process.env.BACKEND_HOST;

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(process.env.SSL_KEY),
    cert: fs.readFileSync(process.env.SSL_CERTIFICATE),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });
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
