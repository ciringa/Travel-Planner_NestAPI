import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { PrismaServices } from 'src/lib/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prisma:PrismaServices){}
    //serviço para criar um usuário
    async PostUser(data:Prisma.UserUncheckedCreateInput):Promise<User>{
        const user = await this.prisma.user.create({
          data
        })
        return user
     }
    async GetUser(Id:string):Promise<User>{
      const ps = await this.prisma.user.findUnique({
          where:{
            Id
        }
      })
      return ps
    }
}
