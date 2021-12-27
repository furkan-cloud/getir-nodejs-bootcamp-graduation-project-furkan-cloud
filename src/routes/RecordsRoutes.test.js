const request = require('supertest');
const Mongoose = require('mongoose');
const app = require('../config/app');

describe('Test the routes for records', () => {
  jest.setTimeout(15000);

  beforeAll(() => {
    Mongoose.connect(process.env.MONGO_URI);
  });

  afterAll((done) => {
    Mongoose.disconnect(done);
  });

  test('It should not response the GET method', async () => {
    await request(app).get('/records').expect(404);
  });

  test('It should not response the GET method', async () => {
    await request(app).get('/recordss').expect(404);
  });

  test('It should not response the GET method of undefined URL', async () => {
    await request(app).get('/data').expect(404);
  });
});
