import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptoModule } from './crypto/crypto.module';
import { Crypto } from './entities/crypto.entity';
import { PriceHistory } from './entities/price-history.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '92.112.192.183',
      port: 8224,
      username: 'enzoo',
      password: 'enzoo',
      database: 'enzoo',
      entities: [Crypto, PriceHistory],
      synchronize: true,
      driver: require('mysql2'),
    }),
    CryptoModule,
  ],
})
export class AppModule {}
