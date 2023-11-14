// Either class or an interface
// Class is better since it's a javascript object
export abstract class PricingService {
  public calculatePrice(basePrice: number): number {
    // This allows us to have different implementations
    // This substitute implementations very easily
    return basePrice;
  }
}
