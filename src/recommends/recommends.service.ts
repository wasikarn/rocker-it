import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import {
  MockPurchasesService,
  Purchase,
} from '../mocks/mock-purchases.service';

@Injectable()
export class RecommendsService {
  private readonly logger: Logger = new Logger(RecommendsService.name);

  constructor(private readonly mockPurchasesService: MockPurchasesService) {}

  @Cron('0 0 0 * * *')
  handleCron() {
    this.logger.debug('Called every day at 12:00 am');

    const recentPurchases: Purchase[] = this.recentPurchases();

    // loop recentPurchases
    // create job for each recentPurchases
  }

  private recentPurchases() {
    const recentDate: Date = new Date();
    recentDate.setDate(recentDate.getDate() - 30);

    return this.mockPurchasesService.getRecentPurchase(recentDate);
  }
}
