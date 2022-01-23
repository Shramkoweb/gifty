import { Controller, Get } from '@nestjs/common';
import { AppService, TestType } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): TestType[] {
    return this.appService.getHello();
  }
}
