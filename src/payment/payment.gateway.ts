// Mock class for Order
export class Order {
  id: number;
}

export abstract class PaymentGateway {
  abstract pay(order: Order): void;
}

export class CreditCardGateway implements PaymentGateway {
  pay(order: Order): void {
    console.log(`CreditCardGateway: ${order.id} paid`);
  }
}

export class PaypalGateway implements PaymentGateway {
  pay(order: Order): void {
    console.log(`PaypalGateway: ${order.id} paid`);
  }
}

export class BitcoinGateway implements PaymentGateway {
  pay(order: Order): void {
    console.log(`BitcoinGateway: ${order.id} paid`);
  }
}

export class GooglePayGateway implements PaymentGateway {
  pay(order: Order): void {
    console.log(`GooglePayGateway: ${order.id} paid`);
  }
}

export class ApplePayGateway implements PaymentGateway {
  pay(order: Order): void {
    console.log(`ApplePayGateway: ${order.id} paid`);
  }
}

export enum PAYMENT_METHOD {
  CREDIT_CARD = 'credit_card',
  PAYPAL = 'paypal',
  BITCOIN = 'bitcoin',
  GOOGLE_PAY = 'google_pay',
  APPLE_PAY = 'apple_pay',
}
