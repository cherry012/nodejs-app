const request = require('supertest');
const app = require('../index'); // Import the app from index.js

describe('GET /', function() {
  it('respond with Hello, Node.js!', function(done) {
    request(app)
      .get('/')
      .expect('Hello, Node.js!', done);
  });
});
