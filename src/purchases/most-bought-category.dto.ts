import { Category } from '../mocks/mock-categories.service';
import { Customer } from '../mocks/mock-customers.service';

export class MostBoughtCategoryDto {
  count: number;
  category: Category;
  customer: Customer;
}
