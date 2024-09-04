import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


//onde sao declaradas as rotas da aplicaçao 
@Controller("app")//o @controler é um decorator usado para identificar appControler como um controler
export class AppController {

  //principio solid de inversao de dependencias, appService é uma dependencia que deve ser fornecida na declaraçao da classe
  constructor(private readonly appService: AppService) {}

  @Get()//rota get
  getHello(): string {
    return this.appService.getHello();
  }

}
