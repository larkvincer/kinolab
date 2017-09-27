const mongoose = require("mongoose"),
  Movie = require("../models/movie_schema");

exports.listMovies = (req, resp) => {
  Movie.find({}, (error, movies) => {
    if (error) {
      resp.send(err);
    }
    resp.json(movies);
  });
};

exports.addMovie = (req, resp) => {
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
  Movie.findOneAndRemove({_id: req._id},
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
  Movie.find({title: req.movieTitle}, (error, movie) => {
    if (error) {
      resp.send(error);
    }
    resp.json(movie);
  });
};

exports.getMovieByActorName = (req, resp) => {
};
