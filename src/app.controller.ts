import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsserService } from './service/usser/usser.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsserService,
  ) {}

  @Get()
  async getHello() {
    const data = await this.userService.findAll();
    return data;
  }
}
