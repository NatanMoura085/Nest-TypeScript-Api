
import { Controller, Get, Param } from '@nestjs/common';
import { FastFood } from './fast-food.interface';
import { FastFoodService } from './fast-food.service';

@Controller('fast-food')
export class FastFoodController {
  constructor(private readonly fastFoodService: FastFoodService) {}

  @Get()
  findAll(): FastFood[] {
    return this.fastFoodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): FastFood {
    return this.fastFoodService.findOne(+id);
  }
}
