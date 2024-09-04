import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TravelController } from './controllers/travel.controller';
import { TravelService } from './services/travel.service';
import { PrismaServices } from './lib/prisma.service';

@Module({
  imports: [],
  //identifica os controladores
  controllers: [UserController, TravelController],
  //identifica os providers (qualquer coisa que nao seja um controler, ou seja qualquer coisa que nao receber rotas)
  providers: [PrismaServices,UserService, TravelService],
})
export class AppModule {}
