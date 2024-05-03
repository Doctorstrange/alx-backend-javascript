const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with the correct arguments and log correct message', function() {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        
        const consoleLogSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

        expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});