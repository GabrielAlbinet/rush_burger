import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Game } from '../games/game.entity.js';
import { Ingredient } from '../ingredients/ingredient.entity.js';

@Entity('burger')
@Unique(['gameId', 'position'])
export class Burger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  position: number;

  @Column({ name: 'game_id', type: 'int' })
  gameId: number;

  @ManyToOne(() => Game, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'game_id' })
  game: Game;

  @ManyToMany(() => Ingredient)
  @JoinTable({
    name: 'burger_ingredient',
    joinColumn: { name: 'burger_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'ingredient_id', referencedColumnName: 'id' },
  })
  ingredients: Ingredient[];
}