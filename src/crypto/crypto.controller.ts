import { Controller, Get, Param } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get()
  getAllCryptos() {
    return this.cryptoService.getAllCryptos();
  }

  @Get(':symbol/history')
  getPriceHistory(@Param('symbol') symbol: string) {
    return this.cryptoService.getPriceHistory(symbol);
  }
} 