import { Body, Controller, Post } from '@nestjs/common';

import { createUserbody } from 'src/dtos/bodyTypes/createUserBody';
import { UserService } from 'src/services/user.service';
import { z } from 'zod';

@Controller('user')
export class UserController {
  //principio solid de inversao de dependencias, appService é uma dependencia que deve ser fornecida na declaraçao da classe
  constructor(private readonly appService: UserService) {}
    //rota post com um path definido "user"
    @Post("/create")
    async PostUser(@Body() body:createUserbody){
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

}
