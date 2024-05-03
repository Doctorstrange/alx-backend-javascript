const request = require('request');
const expect = require('chai').expect;

describe('Login endpoint', function() {
    it('should return correct message when POST /login', function(done) {
        const options = {
            url: 'http://localhost:7865/login',
            method: 'POST',
            json: true,
            body: { userName: 'Betty' }
        };
        request(options, function(error, response, body) {
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});

describe('Available Payments endpoint', function() {
    it('should return correct object for GET /available_payments', function(done) {
        request.get('http://localhost:7865/available_payments', function(error, response, body) {
            const expected = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            };
            expect(JSON.parse(body)).to.deep.equal(expected);
            done();
        });
    });
});