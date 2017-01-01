var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('should be able to add integers', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.strictEqual(calculator.runningTotal, 5)
  })

  it('should be able to add decimals', function(){
    calculator.previousTotal = 4.55
    calculator.add(5.34)
    assert.strictEqual(calculator.runningTotal, 9.89)
  })

  it('should be able to add negative numbers', function(){
    calculator.previousTotal = -1
    calculator.add(-4)
    assert.strictEqual(calculator.runningTotal, -5)
  })

  it('should be able to subtract using integers', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('should be able to subtract decimals', function(){
    calculator.previousTotal = 15.67
    calculator.subtract(4.25)
    assert.strictEqual(calculator.runningTotal, 11.42)
  })

  it('should be able to subtract negative numbers', function(){
    calculator.previousTotal = -7
    calculator.subtract(-4)
    assert.strictEqual(calculator.runningTotal, -3)
  })

  it('should be able to multiply integers', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('should be able to multiply decimals', function(){
    calculator.previousTotal = 1.8
    calculator.multiply(6)
    assert.deepEqual(calculator.runningTotal, 10.8)
  })

  it('should be able to multiply negative numbers', function(){
    calculator.previousTotal = -3
    calculator.multiply(-5)
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('should be able to divide integers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('should be able to divide decimals', function(){
    calculator.previousTotal = 10.8
    calculator.divide(4)
    assert.equal(calculator.runningTotal, 2.7)
  })

  it('should be able to divide negative numbers', function(){
    calculator.previousTotal = -21
    calculator.divide(7)
    assert.strictEqual(calculator.runningTotal, -3)
  })

  it('should be able to concatenate multiple number button clicks', function(){
    calculator.numberClick(3)
    calculator.numberClick(4)
    assert.strictEqual(calculator.runningTotal, 34)
  })

  it('should be able to chain multiple operations together', function(){
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('-')
    calculator.numberClick (2)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 5)
  })

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(10)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.clearClick()
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 11)
  })

});
