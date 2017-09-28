const  Movie = require("../models/movie_schema");

exports.listMovies = (req, resp) => {
  Movie.find({}, (error, movies) => {
    if (error) {
      resp.statusCode = 500;
      resp.json({
        error: error.message
      });
    }
    resp.statusCode = 200;
    resp.json(movies);
  });
};

exports.addMovie = (req, resp) => {
  console.log(req.body);
  const newMovie = new Movie(req.body);
  newMovie.save((err) => {
    if (err) {
      resp.statusCode = 500;
      resp.json({
        error: err.message
      });
    }
    resp.statusCode = 201;
    resp.json({
      message: "Movie saved",
      movie: req.body
    });
  });
};

exports.deleteMovieById = (req, resp) => {
  console.log(req.body);
  Movie.findOneAndRemove({_id: req.params.id},
  (err) => {
    if (err) {
      resp.statusCode = 500;
      resp.json({
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
      resp.statusCode = 500;
      resp.json({
        error: error.message
      });
    }
    resp.statusCode = 200;
    resp.json(movies);
  });
};

exports.getMovieByActor = (req, resp) => {
  Movie.find({actors: new RegExp(req.params.actor, "i")},
  (error, movies) => {
    if (error) {
      resp.statusCode = 500;
      resp.json({
        error: error.message
      });
    }
    resp.statusCode = 200;
    resp.json(movies);
  })
};

exports.getMovieById = (req, resp) => {
  Movie.find({_id: req.params.id},
  (error, movie) => {
    if (error) {
      resp.statusCode = 500;
      resp.json({
        error: error.message
      });
    }
    resp.statusCode = 200;
    resp.json(movie);
  })
};
