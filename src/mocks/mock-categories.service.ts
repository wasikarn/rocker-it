import { Injectable } from '@nestjs/common';

export type Category = {
  id: number;
  name: string;
};

@Injectable()
export class MockCategoriesService {
  private readonly mockCategories: Category[] = [
    {
      id: 1,
      name: 'Computers',
    },
    {
      id: 2,
      name: 'Phones',
    },
    {
      id: 3,
      name: 'Tablets',
    },
  ];

  findOne(categoryId: number): Category {
    return this.mockCategories.find(
      (category: Category): boolean => category.id === categoryId,
    );
  }

  findAll(): Category[] {
    return this.mockCategories;
  }
}
