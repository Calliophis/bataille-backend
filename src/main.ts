import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const frontendUrl = process.env.FRONTEND_URL;
  
  app.enableCors({
    origin: frontendUrl,
    allowedHeaders: 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
    methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  })

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
