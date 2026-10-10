import { Injectable } from '@nestjs/common';
import type { Cat } from './interfaces/cat.interface.js';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class catsService {
  private readonly cats: Cat[] = [];
  
  create(cat: Cat) {
    this.cats.push(cat);
  }
  findAll(): Cat[] {
    return this.cats;
  }
  }
