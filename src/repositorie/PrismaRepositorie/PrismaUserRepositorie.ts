import { Prisma, User } from "@prisma/client";
import { UserRepositorie } from "../UserRepositorie";
import { PrismaServices } from "src/lib/prisma.service";

export class PrismaUserRepositorie implements UserRepositorie{
    constructor(private prisma:PrismaServices){}
    async create(data: Prisma.UserUncheckedCreateInput){
        return await this.prisma.user.create({data})
    }
    async findById(UserId: string){
        return await this.prisma.user.findUnique({
            where:{
                Id:UserId
            }
        })
    }
}