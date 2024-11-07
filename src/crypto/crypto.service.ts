import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crypto } from '../entities/crypto.entity';
import { PriceHistory } from '../entities/price-history.entity';
import { initialCryptos } from '../seeds/crypto.seed';

@Injectable()
export class CryptoService implements OnModuleInit {
  constructor(
    @InjectRepository(Crypto)
    private cryptoRepository: Repository<Crypto>,
    @InjectRepository(PriceHistory)
    private priceHistoryRepository: Repository<PriceHistory>,
  ) {}

  async onModuleInit() {
    await this.seedInitialData();
  }

  private async seedInitialData() {
    const count = await this.cryptoRepository.count();
    if (count === 0) {
      for (const crypto of initialCryptos) {
        await this.cryptoRepository.save(crypto);
      }
      console.log('Seeds ajoutés avec succès !');
    }
  }

  async getAllCryptos(): Promise<Crypto[]> {
    return this.cryptoRepository.find();
  }

  async updatePrice(symbol: string, newPrice: number): Promise<void> {
    const crypto = await this.cryptoRepository.findOne({ where: { symbol } });
    if (crypto) {
      const oldPrice = Number(crypto.price);
      const calculatedNewPrice = Number(newPrice.toFixed(2));
      const changePercentage = ((calculatedNewPrice - oldPrice) / oldPrice) * 100;

      await this.cryptoRepository.update(
        { id: crypto.id },
        { 
          price: calculatedNewPrice,
          change: Number(changePercentage.toFixed(2))
        }
      );

      const priceHistory = new PriceHistory();
      priceHistory.crypto = crypto;
      priceHistory.price = calculatedNewPrice;
      priceHistory.timestamp = new Date();
      await this.priceHistoryRepository.save(priceHistory);
    }
  }

  async getPriceHistory(symbol: string): Promise<PriceHistory[]> {
    return this.priceHistoryRepository.find({
      where: { crypto: { symbol } },
      order: { timestamp: 'DESC' },
      take: 10,
    });
  }
} 