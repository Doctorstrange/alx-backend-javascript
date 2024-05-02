const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
    it('should return the sum of rounded numbers', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('rounding down b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.0, 2.4), 3);
      });
});