const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber()", function () {
  it("should correctly add two integers", function () {
    const response = calculateNumber(1, 2);
    assert.strictEqual(response, 3);
  });

  it("should correctly round and add two numbers", function () {
    const response = calculateNumber(1.4, 2.2);
    assert.strictEqual(response, 3);
  });

  it("should correctly round up and add two numbers", function () {
    const response = calculateNumber(1.6, 2.7);
    assert.strictEqual(response, 5);
  });

  it("should correctly handle zero inputs", function () {
    const response = calculateNumber(0, 0);
    assert.strictEqual(response, 0);
  });

  it("should correctly round and add two negative numbers", function () {
    const response = calculateNumber(-1.6, -1.7);
    assert.strictEqual(response, -4);
  });

  it("should correctly round down and add two negative numbers", function () {
    const response = calculateNumber(-1.4, -1.3);
    assert.strictEqual(response, -2);
  });
});
