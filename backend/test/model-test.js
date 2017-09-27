const expect = require("chai").expect;
const mongoose = require("mongoose");
const db = require("../db");
const movie = require("../models/movie");

describe("movie model test", () => {
  let sampleMovie;
  before((done) => {
    db.connectDB()
    .then(() => { done(); });
  });

  beforeEach(() => {
    let actor = { name: "Name", surName: "SurnName" };
    sampleMovie = {
      title: "Title goes here",
      release_year: 2017,
      format: "DVD"
    }
  });

  it("should save valid movie", () => {
    
  });

  afterEach((done) => {
    mongoose.connection.collection("movies").drop()
    .then(() => {
      done();
    }).catch(err => {
      done();
    });
  });
  after(() => {
    mongoose.connection.close();
  });
});
