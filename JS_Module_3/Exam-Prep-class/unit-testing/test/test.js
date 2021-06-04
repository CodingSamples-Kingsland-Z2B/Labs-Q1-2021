// The methods should function correctly for ​positive​, ​negative​ and ​floating-point​ numbers. 
// In case of floating-point​ numbers, the result should be considered correct if it is ​within 0.01​ of the correct value.
let mathEnforcer = require('../mathEnforcer'); // importing 30 lines of a class from the folder above

var { expect } = require('chai');
//var expect = require('chai').expect // Imports 100's of lines of code we can now use, a library of code
var should = require('chai').should();

// Describe our tests for AddFive()

describe("Tests for addFive() method", function() {
  it("Should return 10 when the argument is 5", function() {
    expect(mathEnforcer.addFive(5)).to.equal(10);
  });
  it("Should return -15 when the argument is -20", function() {
    let tempTotal = mathEnforcer.addFive(-20)
    expect(tempTotal).to.equal(-15);
  });
  it("This test isn't real 2 + 2", function() {
    expect(true).to.equal(false);
  });
  it("Should be within .01 of 42 when the argument is 36.99", function() {
    expect(mathEnforcer.addFive(36.99)).to.be.closeTo(42, .01);
  })
});