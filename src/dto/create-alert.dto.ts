export class CreateAlertDto {
  symbol: string;
  threshold: number;
  type: 'above' | 'below';

  constructor(data: Partial<CreateAlertDto>) {
    if (!data.symbol || typeof data.symbol !== 'string') {
      throw new Error('Symbol doit être une chaîne de caractères');
    }
    if (!data.threshold || typeof data.threshold !== 'number') {
      throw new Error('Threshold doit être un nombre');
    }
    if (data.type !== 'above' && data.type !== 'below') {
      throw new Error('Type doit être "above" ou "below"');
    }

    this.symbol = data.symbol;
    this.threshold = data.threshold;
    this.type = data.type;
  }
} 