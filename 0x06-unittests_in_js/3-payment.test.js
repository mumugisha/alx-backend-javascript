const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function () {
  it("should call Utils.calculateNumber once", function () {
    const spy = sinon.spy(Utils, "calculateNumber");
    try {
      sendPaymentRequestToApi(50, 24.52);
      assert(spy.calledOnce);
      assert(spy.calledWith("SUM", 50, 24.52));
    } finally {
      spy.restore();
    }
  });
});
