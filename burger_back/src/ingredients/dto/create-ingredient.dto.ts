import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IngredientCategory } from '../ingredient.entity.js';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(IngredientCategory)
  category: IngredientCategory;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}