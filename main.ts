import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(1111); // You can change the port as needed
  console.log(`Application is running on port 1111`);
}
bootstrap();
