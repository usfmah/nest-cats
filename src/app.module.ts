import { Global, Module } from '@nestjs/common';
import { CatsModule} from './cats/cats.module.js';
import { ConfigModule } from '@nestjs/config';
import { createObserveModule } from '@nestjs/observe';
export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Global()
@Module({
    
  imports: [CatsModule, 
    ConfigModule.forRoot(),
    ObserveModule.forRoot({
      appKey: process.env.API_KEY!,
      appSecret: process.env.APP_SECRET_KEY!,
      serviceId: 'nest-cats',
    }),
  ]
})
export class AppModule {}
