import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptoModule } from './crypto/crypto.module';
import { Crypto } from './entities/crypto.entity';
import { PriceHistory } from './entities/price-history.entity';
import { AlertController } from './controllers/alert.controller';
import { Alert } from './entities/alert.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '92.112.192.183',
      port: 8224,
      username: 'enzoo',
      password: 'enzoo',
      database: 'enzoo',
      entities: [Crypto, PriceHistory, Alert],
      synchronize: true,
      driver: require('mysql2'),
    }),
    TypeOrmModule.forFeature([Alert]),
    CryptoModule,
  ],
  controllers: [AlertController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        next();
      })
      .forRoutes('*');
  }
}
