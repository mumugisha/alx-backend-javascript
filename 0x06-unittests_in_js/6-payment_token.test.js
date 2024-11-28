const { describe, it } = require("mocha");
const getPaymentTokenFromApi = require("./6-payment_token");
const { expect } = require("chai");

describe("getPaymentTokenFromApi", function () {
    it("Async testing with done callback", function (done) {
        getPaymentTokenFromApi(true)
            .then((data) => {
                try {
                    expect(data).to.have.property("data");
                    done();
                } catch (error) {
                    done(error);
                }
            })
            .catch((error) => done(error));
    });
});
