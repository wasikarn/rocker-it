import { Injectable } from '@nestjs/common';
import {
  MockPurchasesService,
  Purchase,
} from '../mocks/mock-purchases.service';
import { MostBoughtCategoryDto } from './most-bought-category.dto';

@Injectable()
export class PurchasesService {
  constructor(private readonly mockPurchasesService: MockPurchasesService) {}

  getAll(): Purchase[] {
    return this.mockPurchasesService.getAll();
  }

  getByCustomerId(customerId: number): Purchase[] {
    return this.mockPurchasesService.findByCustomerId(customerId);
  }

  getMostBoughtCategory(customerId?: number): MostBoughtCategoryDto {
    return this.mockPurchasesService.getMostBoughtCategory(customerId);
  }
}
