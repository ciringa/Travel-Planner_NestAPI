import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { TravelList, User } from '@prisma/client';
import { createTravelBody } from 'src/dtos/bodyTypes/createTravelBody';
import { TravelService } from 'src/services/travel.service';
import { z } from 'zod';

@Controller('travel')
export class TravelController {
    constructor(private readonly TravelServices:TravelService){}
    
    @Post("/create")
    async PostTravel(@Body() body:createTravelBody):Promise<TravelList>{
        const { From,Notes,Title,Where} = z.object({
            Title: z.string().optional(),
            Where:z.string(),
            From:z.string(),
            Notes:z.string(),
        }).parse(body)
            return this.TravelServices.PostTravel({
            From,Notes,Where,Title
        })
    }
    //return all the users inside this travelList 
    @Get("/list/:travelId")
    async GetTravelList(@Param("travelId") travelId:string):Promise<User[]>{
        return this.TravelServices.GetTravelUsers(travelId)
    }
    //return this travelist informations
    @Get("/:travelId")
    async getTravelInfo(@Param("travelId") travelId:string):Promise<TravelList>{
        return this.TravelServices.GetTravel(travelId)
    }
    //add a user to a travel list
    @Put("/travel/add/:TravelId/:UserId")
    async addUserToTravelList(@Param() params:{TravelId:string,UserId:string}){
        const  {TravelId,UserId} = z.object({
            TravelId:z.string().uuid(),
            UserId:z.string().uuid()
        }).parse(params)
        return await this.TravelServices.PutUserInTravel(TravelId,UserId)
    }
}
