import { Module } from '@nestjs/common';
import { RecommendsService } from './recommends.service';

@Module({
  imports: [],
  controllers: [],
  providers: [RecommendsService],
})
export class RecommendsModule {}
