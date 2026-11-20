import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Player } from '../players/player.entity.js';
import { Game } from './game.entity.js';

@Entity('game_player')
export class GamePlayer {
  @PrimaryColumn({ name: 'player_id', type: 'int' })
  playerId: number;

  @PrimaryColumn({ name: 'game_id', type: 'int' })
  gameId: number;

  @Column({ type: 'int', default: 0 })
  score: number;

  @Column({ type: 'int', nullable: true })
  rank: number | null;

  @ManyToOne(() => Player, { nullable: false })
  @JoinColumn({ name: 'player_id' })
  player: Player;

  @ManyToOne(() => Game, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'game_id' })
  game: Game;
}