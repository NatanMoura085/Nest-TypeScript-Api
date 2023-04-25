import { Controller, Get } from '@nestjs/common';
import { FastFoodService } from './cadapio/fast-food.service.js';

@Controller()
export class AppController {
  constructor(private readonly FastFoodService: FastFoodService) {}
  @Get()
  getHello(): FastFoodService {
    return  this.FastFoodService;
  }
}
