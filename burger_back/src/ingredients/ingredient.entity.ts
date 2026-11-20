import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum IngredientCategory {
  Sauce = 'sauce',
  Condiment = 'condiment',
  Meat = 'viande',
  Cheese = 'fromage',
  Extra = 'supplement',
}

@Entity('ingredient')
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'enum', enum: IngredientCategory })
  category: IngredientCategory;

  @Column({ name: 'image_url', type: 'varchar', nullable: true })
  imageUrl: string | null;
}