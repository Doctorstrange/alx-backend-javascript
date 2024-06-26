const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with the correct arguments', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        calculateNumberSpy.restore();
    });
});