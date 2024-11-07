import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class CryptoGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  constructor(private cryptoService: CryptoService) {}

  async onModuleInit() {
    this.startPriceUpdates();
  }

  private async startPriceUpdates() {
    setInterval(async () => {
      const cryptos = await this.cryptoService.getAllCryptos();
      
      for (const crypto of cryptos) {
        // Générer une variation de prix aléatoire entre -2% et +2%
        const variation = Number(crypto.price) * (Math.random() * 0.04 - 0.02);
        const newPrice = Number(crypto.price) + variation;
        
        await this.cryptoService.updatePrice(crypto.symbol, newPrice);
      }

      // Émettre les données mises à jour à tous les clients
      const updatedCryptos = await this.cryptoService.getAllCryptos();
      this.server.emit('priceUpdates', updatedCryptos);
    }, 3000); // Mise à jour toutes les 3 secondes
  }
} 