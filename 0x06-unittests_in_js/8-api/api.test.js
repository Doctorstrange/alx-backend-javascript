const request = require('request');
const expect = require('chai').expect;

describe('Index page', function() {
    it('should return status code 200', function(done) {
        request.get('http://localhost:7865', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return correct result', function(done) {
        request.get('http://localhost:7865', function(error, response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});