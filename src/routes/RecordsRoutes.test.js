const request = require('supertest');
const Mongoose = require('mongoose');
const app = require('../config/app');

describe('Test the routes for records', () => {
  // change default max time for testing
  jest.setTimeout(15000);

  // connect db to test routes before testing
  beforeAll(() => {
    Mongoose.connect(process.env.MONGO_URI);
  });

  // disconnect from db after all tests done
  afterAll((done) => {
    Mongoose.disconnect(done);
  });

  test('It should not response the GET method for /records url', async () => {
    await request(app).get('/records').expect(400);
  });

  test('It should not response the GET method for undefined URL', async () => {
    await request(app).get('/recordss').expect(404);
  });

  test('It should not response the GET method for undefined URL', async () => {
    await request(app).get('/data').expect(404);
  });
});
