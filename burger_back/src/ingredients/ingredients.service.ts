import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngredientDto } from './dto/create-ingredient.dto.js';
import { Ingredient } from './ingredient.entity.js';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientsRepository: Repository<Ingredient>,
  ) {}

  findAll(): Promise<Ingredient[]> {
    return this.ingredientsRepository.find();
  }

  create(dto: CreateIngredientDto): Promise<Ingredient> {
    const ingredient = this.ingredientsRepository.create(dto);
    return this.ingredientsRepository.save(ingredient);
  }
}