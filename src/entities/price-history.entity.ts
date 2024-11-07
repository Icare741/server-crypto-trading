import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Crypto } from './crypto.entity';

@Entity()
export class PriceHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Crypto)
  crypto: Crypto;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  timestamp: Date;
} 