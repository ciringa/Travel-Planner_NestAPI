import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //utiliza para criar o nosso app
  const app = await NestFactory.create(AppModule);
  //roda a aplicaçao 
  await app.listen(3000);
}
//executa a funçao acima
bootstrap();
