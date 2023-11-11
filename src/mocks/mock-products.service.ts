import { Injectable } from '@nestjs/common';
import { Category, MockCategoriesService } from './mock-categories.service';

export type Product = {
  id: number;
  name: string;
  price: number;
  sku: string;
  category: Category;
};

@Injectable()
export class MockProductsService {
  constructor(private readonly mockCategoriesService: MockCategoriesService) {}

  findOne(productId: number): Product {
    const products: Product[] = this.generateProduct();

    return products.find(
      (product: Product): boolean => product.id === productId,
    );
  }

  getAll(): Product[] {
    return this.generateProduct();
  }

  findByCategoryId(categoryId: number): Product[] {
    const products: Product[] = this.generateProduct();

    return products.filter(
      (product: Product): boolean => product.category.id === categoryId,
    );
  }

  private generateProduct(): Product[] {
    const categories: Category[] = this.mockCategoriesService.findAll();

    return <Product[]>[
      {
        id: 1,
        name: 'MacBook Pro',
        price: 2000,
        sku: categories[0].name,
        category: categories[0],
      },
      {
        id: 2,
        name: 'iPhone 12',
        price: 1000,
        sku: categories[1].name,
        category: categories[1],
      },
      {
        id: 3,
        name: 'iPad Pro',
        price: 800,
        sku: categories[2].name,
        category: categories[2],
      },
    ];
  }
}
