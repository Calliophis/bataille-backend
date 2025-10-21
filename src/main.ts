import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const frontendUrl = process.env.FRONTEND_URL;

  app.enableCors({
    origin: frontendUrl,
    methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
