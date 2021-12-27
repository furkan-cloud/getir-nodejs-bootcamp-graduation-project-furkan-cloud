const request = require('supertest');
const Mongoose = require('mongoose');
const app = require('../config/app');

describe('Test the validations for /records url', () => {
  jest.setTimeout(15000);

  beforeAll(() => {
    Mongoose.connect(process.env.MONGO_URI);
  });

  afterAll((done) => {
    Mongoose.disconnect(done);
  });

  test('validation test for request params (startDate is in invalid format), status should be 400', async () => {
    await request(app)
      .post('/records')
      .send({
        startDate: '201501-01',
        endDate: '2016-08-05',
        minCount: 20,
        maxCount: 50,
      })
      .expect(400);
  });

  test('validation test for request params (minCount is not defined), status should be 400', async () => {
    await request(app)
      .post('/records')
      .send({
        startDate: '2015-03-25',
        endDate: '2017-04-12',
        maxCount: 20,
      })
      .expect(400);
  });

  test('validation test for request params (minCount is greater than maxCount), status should be 400', async () => {
    await request(app)
      .post('/records')
      .send({
        startDate: '2016-10-07',
        endDate: '2018-02-15',
        minCount: 20,
        maxCount: 15,
      })
      .expect(400);
  });
});
