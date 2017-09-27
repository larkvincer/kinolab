const express = require("express"),
  movieRouter = express.Router(),
  movieController = require("../controllers/movie_controller");

movieRouter.get("/", movieController.listMovies);

movieRouter.post("/", movieController.listMovies);

movieRouter.get("/:id", (req, resp) => {

});

movieRouter.patch("/:id", (req, resp) => {

});

module.exports = movieRouter;