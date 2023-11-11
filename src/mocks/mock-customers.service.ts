import { Injectable } from '@nestjs/common';

export type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

@Injectable()
export class MockCustomersService {
  private readonly mockCustomers: Customer[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '123456789',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '987654321',
    },
  ];

  findOne(customerId: number): Customer {
    return this.mockCustomers.find(
      (customer: Customer): boolean => customer.id === customerId,
    );
  }

  getAll(): Customer[] {
    return this.mockCustomers;
  }
}
