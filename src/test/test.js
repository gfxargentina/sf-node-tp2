const { assert } = require('chai');
const request = require('supertest');
const app = require('../index');

const db = require('../database/models/index');

// beforeEach(() => {
//   db.sequelize.truncate({ cascade: true });
// });

describe('Concesionaria API', () => {
  //Get Route
  describe('GET /users', () => {
    it('should GET all the users', (done) => {
      request(app)
        .get('/car')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(done());
    });
  });
});
