const request = require('supertest');
const Mongoose = require('mongoose');
const app = require('../config/app');

describe('Test the record controller', () => {
  jest.setTimeout(15000);

  beforeAll(() => {
    Mongoose.connect(process.env.MONGO_URI);
  });

  afterAll((done) => {
    Mongoose.disconnect(done);
  });

  test('valid test for fetch records', async () => {
    await request(app)
      .post('/records')
      .send({
        minCount: 69,
        maxCount: 70,
        startDate: '2016-01-28',
        endDate: '2016-01-28',
      })
      .expect(200);
  });
});
