const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function () {
  it("checking if number round() for SUM", function () {
    const response = calculateNumber("SUM", 1, 2);
    assert.strictEqual(response, 3);
  });
  it("checking if number round() for SUBTRACT (1.4, 2.2)", function () {
    const response = calculateNumber("SUBTRACT", 1.4, 2.2);
    assert.strictEqual(response, -1);
  });
  it("checking if number round() for SUBTRACT (4.9, 2.7)", function () {
    const response = calculateNumber("SUBTRACT", 4.9, 2.7);
    assert.strictEqual(response, 2);
  });
  it("checking if number round() for DIVIDE (4, 2)", function () {
    const response = calculateNumber("DIVIDE", 4, 2);
    assert.strictEqual(response, 2);
  });
  it("checking if number round() for DIVIDE by zero", function () {
    const response = calculateNumber("DIVIDE", 1.7, 0);
    assert.strictEqual(response, "Error");
  });
  it("checking if number round() for DIVIDE (-1.4, 4.6)", function () {
    const response = calculateNumber("DIVIDE", -1.4, 4.6);
    assert.strictEqual(response, 0.2);
  });
});
