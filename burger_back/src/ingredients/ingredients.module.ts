import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsController } from './ingredients.controller.js';
import { Ingredient } from './ingredient.entity.js';
import { IngredientsService } from './ingredients.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  controllers: [IngredientsController],
  providers: [IngredientsService],
})
export class IngredientsModule {}