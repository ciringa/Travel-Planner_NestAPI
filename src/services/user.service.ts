import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { PrismaServices } from 'src/lib/prisma.service';

@Injectable()
export class UserService {
    private prisma:PrismaClient
    constructor(){
      this.prisma = new PrismaServices
    }
    //serviço para criar um usuário
    async PostUser(data:Prisma.UserUncheckedCreateInput):Promise<User>{
        const prisma = new PrismaServices()
        const user = prisma.user.create({
        data
        })
        return user
  }
}
