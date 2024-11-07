import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alert } from '../entities/alert.entity';

@Controller('alerts')
export class AlertController {
  constructor(
    @InjectRepository(Alert)
    private alertRepository: Repository<Alert>,
  ) {}

  @Get()
  async findAll(): Promise<Alert[]> {
    return this.alertRepository.find();
  }

  @Post()
  async create(@Body() alert: Partial<Alert>): Promise<Alert> {
    const newAlert = this.alertRepository.create(alert);
    return this.alertRepository.save(newAlert);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.alertRepository.delete(id);
  }
} 