import { Controller, Get, Req, Post, HttpCode, Header, Redirect } from '@nestjs/common';
import { AppService } from './app.service.js';
import type {Request} from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request.method);
    console.log(request.url);
    return 'This action returns all cats';
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'no-store')
  create(): string {
    return 'This returns a new cat';
  }

  @Get('usf') 
  @Redirect('https://nestjs.com', 301)
  getCatColor(): string {
    return 'this is colored'
  }
}