import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('long')
  getLong(): any {
    return this.appService.getLong();
  }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
