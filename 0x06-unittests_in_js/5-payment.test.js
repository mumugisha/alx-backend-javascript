const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const { expect } = require("chai");

describe("sendPaymentRequestToApi", function () {
  beforeEach("Set up spy to use for each test", function () {
    sinon.spy(console, "log");
  });

  afterEach("Restore spy after each test", function () {
    sinon.restore();
  });

  it("check that console.log is called with the right arg", function () {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
  });

  it("check that console.log is called again with the right arg", function () {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
  });
});
