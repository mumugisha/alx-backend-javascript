const request = require('request');
const {describe, it} = require("mocha");
const {expect} = require("chai").expect;

describe("Index page", function () {
  const options = {
    url: "http://localhost:7865/",
    method: "GET",
  };

  it("check correct status code", function (done) {
    request(options, function (err, res, body) {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("check correct content", function (done) {
    request(options, function (err, res, body) {
      if (err) return done(err);
      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });
});

describe("Cart page", function () {
  it("check correct status code for correct URL", function (done) {
    request.get("http://localhost:7865/cart/12", function (err, res, body) {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("check correct content for correct URL", function (done) {
    request.get("http://localhost:7865/cart/12", function (err, res, body) {
      if (err) return done(err);
      expect(body).to.contain("Payment methods for cart 12");
      done();
    });
  });

  it("check correct status code for incorrect URL", function (done) {
    request.get("http://localhost:7865/cart/kim", function (err, res, body) {
      if (err) return done(err);
      expect(res.statusCode).to.not.equal(200);
      done();
    });
  });

  it("check correct body content for available payments", function (done) {
    const options = {
      url: "http://localhost:7865/available_payments",
      json: true,
    };
    const expectedPayload = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };

    request.get(options, function (err, res, body) {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal(expectedPayload);
      done();
    });
  });
});

describe("Login", function () {
  it("check correct status code for valid request", function (done) {
    const options = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        userName: "JOE",
      },
    };

    request.post(options, function (err, res, body) {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("check correct content for valid request", function (done) {
    const options = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        userName: "JOE",
      },
    };

    request.post(options, function (err, res, body) {
      if (err) return done(err);
      expect(body).to.contain("WELCOME JOE");
      done();
    });
  });

  it("check correct status code for invalid request", function (done) {
    const options = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        usame: "JOE",
      },
    };

    request.post(options, function (err, res, body) {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
