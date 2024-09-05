import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, TravelList, User } from '@prisma/client';
import { PutUsersInTravelResponse } from 'src/dtos/interfaces/TravelServicesReturns';
import { PrismaServices } from 'src/lib/prisma.service';

@Injectable()
export class TravelService {
    constructor(private readonly prisma:PrismaServices){}
    
  //serviço para criar uma lista viagem
  async PostTravel(data:Prisma.TravelListCreateInput):Promise<TravelList>{
    const Travel = await this.prisma.travelList.create({data})
    return Travel
  }
  async GetTravelUsers(travelId:string):Promise<User[]>{
    const users = await this.prisma.user.findMany({
      where:{
        travelId,
      }
    })
    return users
  }
  async GetTravel(travelId:string):Promise<TravelList>{
    return await this.prisma.travelList.findUnique({
      where:{
        Id:travelId
      }
    })
  }
  async PutUserInTravel(travelId:string, userId:string):Promise<PutUsersInTravelResponse>{
    const unique = await this.prisma.travelList.findUnique({
      where:{
        Id:travelId
      }
    })
    const update = await this.prisma.user.update({
      where:{
        Id:userId
      },
      data:{
        travelId:unique.Id
      }
    })

    return {
      userAdded:update,
      TravelRefered:unique
    }
  }
}
