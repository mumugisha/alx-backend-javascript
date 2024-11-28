const request = require('request');
const expect = require('chai');

describe('Index page', function () {
  it('check the correct status code', function (done) {
    request('http://localhost:3000', function (err, res, body) {
      if (err) {
        return done(err);
      }
      expect(res).to.have.property('statusCode');
      expect(res.statusCode).to.equal(200); 
      done();
    });
  });

  it('check the correct content', function (done) {
    request('http://localhost:3000', function (err, res, body) {
      if (err) {
        return done(err);
      }
      expect(body).to.be.a('string');
      expect(body).to.include('Expected content here');
      done();
    });
  });

  it('check the correct content length', function (done) {
    request('http://localhost:3000', function (err, res, body) {
      if (err) {
        return done(err);
      }
      expect(res.headers).to.have.property('content-length');
      expect(Number(res.headers['content-length'])).to.be.greaterThan(0);
      done();
    });
  });
});
