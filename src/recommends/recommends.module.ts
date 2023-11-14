import { Module } from '@nestjs/common';
import { RecommendsService } from './recommends.service';
import { MockPurchasesService } from '../mocks/mock-purchases.service';
import { MockProductsService } from '../mocks/mock-products.service';
import { MockCategoriesService } from '../mocks/mock-categories.service';
import { MockCustomersService } from '../mocks/mock-customers.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    MockCustomersService,
    MockPurchasesService,
    MockProductsService,
    MockCategoriesService,
    RecommendsService,
  ],
})
export class RecommendsModule {}
