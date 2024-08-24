import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { TravelList } from '@prisma/client';
import { z } from 'zod';

//onde sao declaradas as rotas da aplicaçao 
@Controller("app")//o @controler é um decorator usado para identificar appControler como um controler
export class AppController {

  //principio solid de inversao de dependencias, appService é uma dependencia que deve ser fornecida na declaraçao da classe
  constructor(private readonly appService: AppService) {}

  @Get()//rota get
  getHello(): string {
    return this.appService.getHello();
  }
  //rota post com um path definido "user"
  @Post("/user")
  async PostUser(@Body() body:any){
    const {Email,Name,Password,travelId} = z.object({
        Email:z.string().email(),
        travelId:z.string().uuid(),
        Password:z.string(),
        Name:z.string().optional()
    }).parse(body)
    return this.appService.PostUser({
      Email,Password,travelId,Name
    })
  }
  @Post("/travel")
  async PostTravel(@Body() body:any):Promise<TravelList>{
    const { From,Notes,Title,Where} = z.object({
    Title: z.string().optional(),
    Where:z.string(),
    From:z.string(),
    Notes:z.string(),
    }).parse(body)
    return this.appService.PostTravel({
      From,Notes,Where,Title
    })
  }
}
