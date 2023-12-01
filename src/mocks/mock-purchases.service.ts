import { Injectable } from '@nestjs/common';
import { MockProductsService, Product } from './mock-products.service';
import { Customer, MockCustomersService } from './mock-customers.service';
import { faker } from '@faker-js/faker';
import { Category, MockCategoriesService } from './mock-categories.service';
import { MostBoughtCategoryDto } from '../purchases/most-bought-category.dto';

export type Purchase = {
  id: number;
  customerId: number;
  purchaseDate: Date;
  product: Product;
};

@Injectable()
export class MockPurchasesService {
  private readonly recentDayAgo: number = 30;

  constructor(
    private readonly mockCustomersService: MockCustomersService,
    private readonly mockProductsService: MockProductsService,
    private readonly mockCategoriesService: MockCategoriesService,
  ) {}

  getAll(): Purchase[] {
    return this.generatePurchase();
  }

  findOne(purchaseId: number): Purchase {
    const purchases: Purchase[] = this.generatePurchase();

    return purchases.find(
      (purchase: Purchase): boolean => purchase.id === purchaseId,
    );
  }

  findByCustomerId(customerId: number): Purchase[] {
    const purchases: Purchase[] = this.generatePurchase();

    return purchases.filter((purchase: Purchase): boolean => {
      return purchase.customerId === customerId;
    });
  }

  getMostBoughtCategory(customerId?: number): MostBoughtCategoryDto {
    const recentDate: Date = new Date();
    recentDate.setDate(recentDate.getDate() - this.recentDayAgo);

    const recentPurchases: Purchase[] = this.getRecentPurchase(
      recentDate,
      customerId,
    );
    const categoryCounts: Record<number, number> = {};
    let purchaseCustomerId: number = 0;

    recentPurchases.forEach((purchase: Purchase): void => {
      const { category }: Product = purchase.product;
      purchaseCustomerId = purchase.customerId;
      categoryCounts[category.id] = (categoryCounts[category.id] || 0) + 1;
    });

    let mostPurchasedCategory: number | null = null;
    let maxPurchaseCount: number = 0;

    for (const categoryCount in categoryCounts) {
      if (categoryCounts[categoryCount] > maxPurchaseCount) {
        maxPurchaseCount = categoryCounts[categoryCount];
        mostPurchasedCategory = +categoryCount;
      }
    }

    const mostCategory: Category = this.mockCategoriesService.findOne(
      mostPurchasedCategory,
    );

    return <MostBoughtCategoryDto>{
      count: maxPurchaseCount,
      category: mostCategory,
      customer: this.mockCustomersService.findOne(purchaseCustomerId),
    };
  }

  getRecentPurchase(recentDate: Date, customerId?: number) {
    const purchases: Purchase[] = this.generatePurchase();

    return purchases
      .filter(
        (purchase: Purchase): boolean =>
          new Date(purchase.purchaseDate) > recentDate,
      )
      .filter((purchase: Purchase): boolean => {
        if (!customerId) return true;

        return purchase.customerId === customerId;
      });
  }

  private generatePurchase(): Purchase[] {
    let purchaseId: number = 1;
    const purchases: Purchase[] = [];

    Array.from({ length: 25 }).map((): void => {
      const product: Product = this.getProduct();
      const customer: Customer = this.getCustomer();

      purchases.push(<Purchase>{
        id: purchaseId++,
        customerId: customer.id,
        purchaseDate: faker.date.recent({ days: this.recentDayAgo }),
        product: product,
      });
    });

    return purchases;
  }

  private getCustomer(): Customer {
    const customerId: number = faker.number.int({ min: 1, max: 2 });

    return this.mockCustomersService.findOne(customerId);
  }

  private getProduct(): Product {
    const productId: number = faker.number.int({ min: 1, max: 3 });

    return this.mockProductsService.findOne(productId);
  }
}
