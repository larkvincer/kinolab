const mongoose = require("mongoose"),
  Movie = require("../models/movie_schema");

exports.listMovies = (req, resp) => {
  Movie.find({}, (error, movies) => {
    if (error) {
      resp.send(error);
    }
    resp.json(movies);
  });
};

exports.addMovie = (req, resp) => {
  console.log(req.body);
  const newMovie = new Movie(req.body);
  newMovie.save((err) => {
    if (err) {
      resp.statusCode = 500;
      return resp.json({
        error: err.message
      });
    }
    resp.statusCode = 200;
    resp.json({
      message: "Movie saved",
      movie: req.body
    });
  });
};

exports.deleteMovieById = (req, resp) => {
  console.log(req.body);
  Movie.findOneAndRemove({_id: req.body._id},
  (err) => {
    if (err) {
      resp.statusCode = 500;
      return resp.json({
        error: err.message
      });
    }
    resp.statusCode = 200;
    resp.json({
      message: "Movie successfuly deleted"
    });
  });
}

exports.getMovieByTitle = (req, resp) => {
  Movie.find({title: new RegExp(req.params.title, "i")},
  (error, movies) => {
    if (error) {
      resp.send(error);
    }
    resp.json(movies);
  });
};

exports.getMovieByActor = (req, resp) => {
  Movie.find({actors: new RegExp(req.params.actor, "i")},
  (error, movies) => {
    if (error) {
      resp.send(error);
    }
    resp.json(movies);
  })
};
