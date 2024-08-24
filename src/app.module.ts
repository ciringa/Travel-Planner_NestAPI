import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  //identifica os controladores
  controllers: [AppController],
  //identifica os providers (qualquer coisa que nao seja um controler, ou seja qualquer coisa que nao receber rotas)
  providers: [AppService],
})
export class AppModule {}
