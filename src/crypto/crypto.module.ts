import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';
import { CryptoGateway } from './crypto.gateway';
import { Crypto } from '../entities/crypto.entity';
import { PriceHistory } from '../entities/price-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Crypto, PriceHistory])],
  controllers: [CryptoController],
  providers: [CryptoService, CryptoGateway],
})
export class CryptoModule {} 