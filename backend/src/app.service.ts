import { Injectable } from '@nestjs/common';
import { cities } from 'dance-planner-cities';

@Injectable()
export class AppService {

  public getHello(): string {
    return 'Hello World!';
  }

  public getCities(): any[] {
    return cities;
  }

}
