import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller.js';
import { CatsService } from './cats.service.js';

describe('CatsController', () => {
  let catsController: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsController = app.get<CatsController>(CatsController);
  });

  describe('findAll', () => {
    it('should return an empty array initially', async () => {
      expect(await catsController.findAll()).toEqual([]);
    });

    it('should create a cat and return it', async () => {
      await catsController.create({ name: 'Tom', age: 3, breed: 'Persian' });
      expect(await catsController.findAll()).toEqual([
        { name: 'Tom', age: 3, breed: 'Persian' },
      ]);
    });
  });

  describe('findOne', () => {
    it('should return a cat by id', () => {
      expect(catsController.findOne('1')).toBe(
        'This action returns a #1 cat',
      );
    });
  });
});
