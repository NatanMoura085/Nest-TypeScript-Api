import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FastFoodService } from './cadapio/fast-food.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [FastFoodService],
})
export class AppModule {}
