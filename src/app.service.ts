import { Injectable } from '@nestjs/common';
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
  //serviço para criar um usuário
  async PostUser(data:Prisma.UserUncheckedCreateInput):Promise<User>{
    const prisma = new PrismaServices()
    const user = prisma.user.create({
      data
    })
    return user
  }
  //serviço para criar uma lista viagem
  async PostTravel(data:Prisma.TravelListCreateInput):Promise<TravelList>{
    const Travel = await this.prisma.travelList.create({data})
    return Travel
  }
}
