import { Injectable } from '@nestjs/common';
import {
  Order,
  PAYMENT_METHOD,
  PaymentGateway,
  PaypalGateway,
} from './payment.gateway';

@Injectable()
export class PaymentService {
  private paymentGateways: Record<string, PaymentGateway> = {};

  public registerPaymentGateway(
    paymentMethod: PAYMENT_METHOD,
    gateway: PaypalGateway,
  ) {
    this.paymentGateways[paymentMethod] = gateway;
  }

  public async pay(order: Order, paymentMethod: PAYMENT_METHOD) {
    const gateway = this.paymentGateways[paymentMethod];

    if (!gateway) {
      throw new Error(`Unsupported payment method: ${paymentMethod}`);
    }

    gateway.pay(order);
  }
}
