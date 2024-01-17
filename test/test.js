var request = require('supertest');
var app = require('../index.js');describe('GET /', function() {
 it('respond with hello VAIBHAV', function(done) { //navigate to root and check the the response is "hello VAIBHAV"
 request(app).get('/').expect('hello VAIBHAV', done);
 });
});
