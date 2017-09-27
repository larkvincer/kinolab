const express = require("express"),
  movieRouter = express.Router(),
  movieController = require("../controllers/movie_controller");

movieRouter.get("/", movieController.listMovies);

movieRouter.post("/", movieController.addMovie);

movieRouter.delete("/", movieController.deleteById);

module.exports = movieRouter;