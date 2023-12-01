import { Injectable } from '@nestjs/common';
import { Order, PaymentGateway, PaypalGateway } from './payment.gateway';
import { PaymentMethod } from './payment-method';

@Injectable()
export class PaymentService {
  private paymentGateways: Record<string, PaymentGateway> = {};

  public registerPaymentGateway(
    paymentMethod: PaymentMethod,
    gateway: PaypalGateway,
  ): void {
    this.paymentGateways[paymentMethod] = gateway;
  }

  public async pay(order: Order, paymentMethod: PaymentMethod): Promise<void> {
    const gateway: PaymentGateway = this.paymentGateways[paymentMethod];

    if (!gateway) {
      throw new Error(`Unsupported payment method: ${paymentMethod}`);
    }

    gateway.pay(order);
  }
}
