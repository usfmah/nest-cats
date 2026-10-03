import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot(),
    ObserveModule.forRoot({
      appKey: process.env.API_KEY!,
      appSecret: process.env.APP_SECRET_KEY!,
      serviceId: 'nest-cats',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
