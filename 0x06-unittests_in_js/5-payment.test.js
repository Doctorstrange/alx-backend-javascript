const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function() {
    let consoleLogStub;

    beforeEach(function() {
        consoleLogStub = sinon.stub(console, 'log');
    });

    afterEach(function() {
        consoleLogStub.restore();
    });

    it('should log the correct message and only be called once with totalAmount 100 and totalShipping 20', function() {
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogStub.calledOnce).to.be.true;
        expect(consoleLogStub.calledWithExactly('The total is: 120')).to.be.true;
    });

    it('should log the correct message and only be called once with totalAmount 10 and totalShipping 10', function() {
        sendPaymentRequestToApi(10, 10);
        expect(consoleLogStub.calledOnce).to.be.true;
        expect(consoleLogStub.calledWithExactly('The total is: 20')).to.be.true;
    });
});