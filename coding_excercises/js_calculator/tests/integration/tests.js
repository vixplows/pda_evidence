var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#number9')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1234567890')
  })

  it('should have a working addition operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have a working subtraction operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it('should have a working multiplication operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  })

  it('should have a working division operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should be able to chain multiple operators', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  })

  it('should be able to calculate positive numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('16')
  })

  it('should be able to calculate negative numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-2')
  })

  it('should be able to calculate decimal numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1.8')
  })

  it('should be able to calculate very large numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('19999999998000')
  })

  it('should give an error message if try and divide by zero', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Not a number')
  })

});