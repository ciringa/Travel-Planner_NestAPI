import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //utiliza para criar o nosso app
  const app = await NestFactory.create(AppModule);
  //enable cors(self explains)
  app.enableCors()
  //roda a aplicaçao 
  await app.listen(3000);
}
//executa a funçao acima
bootstrap();
