/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  app.use(
    cors({
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200,
    }),
  );
  await app.listen(3000);
}
bootstrap();
