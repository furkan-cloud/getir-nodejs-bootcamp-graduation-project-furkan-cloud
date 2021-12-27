const request = require('supertest');
const Mongoose = require('mongoose');
const app = require('../config/app');

describe('Test the record controller', () => {
  // change default max time for testing
  jest.setTimeout(15000);

  // connect db to test record controller before testing
  beforeAll(() => {
    Mongoose.connect(process.env.MONGO_URI);
  });

  // disconnect from db after all tests done
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
