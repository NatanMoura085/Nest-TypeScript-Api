import { Injectable } from '@nestjs/common';
import { FastFood } from './fast-food.interface';


@Injectable()
export class FastFoodService {
  private readonly fastFood: FastFood[] = [
    { id: 1, name: 'McDarth Vader Burger', rating: 4.2, location: 'Fast Food' },
    { id: 2, name: 'Burger Stormtrooper', rating: 4.0, location: 'Fast Food' },
    { id: 3, name: 'KFClone Burger', rating: 4.1, location: 'Fast Food' },
    { id: 4, name: 'SubJedi Sandwich', rating: 4.4, location: 'Sanduíches' },
    { id: 5, name: 'Pizza Hutt-Tooine', rating: 4.3, location: 'Pizzas' },
    
  ];

  findAll(): FastFood[] {
    return this.fastFood;
  }

  findOne(id: number): FastFood {
    return this.fastFood.find((fastFood) => fastFood.id === id);
  }
}
