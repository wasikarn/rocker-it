import { Injectable } from '@nestjs/common';
import { PricingService } from './pricing.service';

@Injectable()
export class RegularPricingStrategy implements PricingService {
  public calculatePrice(basePrice: number): number {
    // Logic to calculate the regular price

    return basePrice;
  }
}
