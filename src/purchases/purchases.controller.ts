import { Controller, Get, Param, Query } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { Purchase } from '../mocks/mock-purchases.service';
import { MostBoughtCategoryDto } from './most-bought-category.dto';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Get()
  async getAll(@Query('customerId') customerId: string): Promise<Purchase[]> {
    if (!customerId) return this.purchasesService.getAll();

    return this.purchasesService.getByCustomerId(+customerId);
  }

  @Get('most-bought-category')
  async getMostBoughtCategory(
    @Query('customerId') customerId?: string,
  ): Promise<MostBoughtCategoryDto> {
    return this.purchasesService.getMostBoughtCategory(+customerId);
  }

  @Get(':id')
  getPurchase(@Param('id') id: string) {}
}
