import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  console.log('API_KEY exists:', !!process.env.API_KEY);
  console.log('APP_SECRET_KEY exists:', !!process.env.APP_SECRET_KEY);
 const app = await NestFactory.create(AppModule, {
  routeConflictPolicy: {
    duplicate: 'error',
    shadow: 'warn',
  },
  instrument: ObserveInstrument,
  abortOnError: false,
  routeResolutionStrategy: 'specificity',
});
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
