import { Controller, Get, Put, Patch, Delete, Post, Param, Body, Query } from '@nestjs/common';
import { CatsService } from './cats.service.js';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/dto.js';
import type { Cat } from './interfaces/cat.interface.js';




@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
     this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}