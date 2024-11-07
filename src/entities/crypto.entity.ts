import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PriceHistory } from './price-history.entity';

@Entity()
export class Crypto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  symbol: string;

  @Column()
  name: string;

  @Column()
  logo: string;

  @Column('decimal', { precision: 20, scale: 2 })
  price: number;

  @Column('decimal', { precision: 5, scale: 2 })
  change: number;

  @Column()
  volume: string;

  @Column()
  marketCap: string;

  @OneToMany(() => PriceHistory, history => history.crypto)
  priceHistory: PriceHistory[];
} 