import { Get, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, TravelList, User } from '@prisma/client';
import { PrismaServices } from './lib/prisma.service';

//injeçao de dependencias é diferente de inversao de dependencias

//injectable se referem a injeçao de dependencias 
@Injectable()//todos os providers precisam ter esse parametro
export class AppService {
  private prisma:PrismaClient
  constructor(){
    this.prisma = new PrismaServices
  }
  //define os controlers da aplicaçao
  getHello(): string {
    return 'Hello World!';
  }
}

