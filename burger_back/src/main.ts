import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: config.getOrThrow<string>('FRONT_URL'),
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(config.get<string>('PORT') ?? 3000);
}

void bootstrap();