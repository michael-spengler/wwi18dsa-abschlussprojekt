import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getCities')
  getCities(): any[] {
    console.log('Ich habe einen request erhalten');
    return this.appService.getCities();
  }

}
