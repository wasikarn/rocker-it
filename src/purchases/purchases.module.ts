import { Module } from '@nestjs/common';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';
import { MockPurchasesService } from '../mocks/mock-purchases.service';
import { MockCategoriesService } from '../mocks/mock-categories.service';
import { MockProductsService } from '../mocks/mock-products.service';
import { MockCustomersService } from '../mocks/mock-customers.service';

@Module({
  imports: [],
  controllers: [PurchasesController],
  providers: [
    PurchasesService,
    MockPurchasesService,
    MockCategoriesService,
    MockProductsService,
    MockCustomersService,
  ],
})
export class PurchasesModule {}
