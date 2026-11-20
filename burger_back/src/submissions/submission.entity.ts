import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Burger } from '../burgers/burger.entity.js';
import { Player } from '../players/player.entity.js';

@Entity('submission')
@Unique(['burgerId', 'playerId'])
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'is_correct', type: 'boolean' })
  isCorrect: boolean;

  @Column({ name: 'answered_in_ms', type: 'int' })
  answeredInMs: number;

  @Column({ name: 'burger_id', type: 'int' })
  burgerId: number;

  @Column({ name: 'player_id', type: 'int' })
  playerId: number;

  @ManyToOne(() => Burger, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'burger_id' })
  burger: Burger;

  @ManyToOne(() => Player, { nullable: false })
  @JoinColumn({ name: 'player_id' })
  player: Player;
}