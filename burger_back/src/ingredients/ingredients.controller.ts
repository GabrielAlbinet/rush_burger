import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto.js';
import { IngredientsService } from './ingredients.service.js';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  findAll() {
    return this.ingredientsService.findAll();
  }

  @Post()
  create(@Body() dto: CreateIngredientDto) {
    return this.ingredientsService.create(dto);
  }
}