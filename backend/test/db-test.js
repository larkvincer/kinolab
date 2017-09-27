const expect = require("chai").expect;
const db = require("../db");
const mongoose = require("mongoose");

describe("db tests", function() {
  it("should pass this canary test", () => {
    expect(true).to.be.true;
  });

  it("connect should set connections given valid database name",
    (done) => {
      db.connectDB()
      .then(() => {
        done();
      })
      .catch((err) => {
        expect(err).to.be.null;
        done();
      });
    }
  )
});