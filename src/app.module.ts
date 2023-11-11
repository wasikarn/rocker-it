import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './transform.interceptor';
import { PurchasesModule } from './purchases/purchases.module';
import { RecommendsModule } from './recommends/recommends.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [PurchasesModule, RecommendsModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
