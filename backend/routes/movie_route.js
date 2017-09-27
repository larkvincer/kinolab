const express = require("express"),
  movieRouter = express.Router(),
  movieController = require("../controllers/movie_controller");

movieRouter.get("/", movieController.listMovies);

movieRouter.get("/title/:title", movieController.getMovieByTitle);

movieRouter.get("/actor/:actor", movieController.getMovieByActor);

movieRouter.post("/", movieController.addMovie);

movieRouter.delete("/", movieController.deleteMovieById);

module.exports = movieRouter;