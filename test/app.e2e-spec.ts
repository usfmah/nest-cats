import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { CatsModule } from '../src/cats/cats.module.js';

describe('Cats (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CatsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/cats (GET) returns an empty array initially', () => {
    return request(app.getHttpServer()).get('/cats').expect(200).expect([]);
  });

  it('/cats (POST) creates a cat and persists it', async () => {
    await request(app.getHttpServer())
      .post('/cats')
      .send({ name: 'Tom', age: 3, breed: 'Persian' })
      .expect(201);

    await request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect([{ name: 'Tom', age: 3, breed: 'Persian' }]);
  });

  it('/cats/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/cats/1')
      .expect(200)
      .expect('This action returns a #1 cat');
  });
});
