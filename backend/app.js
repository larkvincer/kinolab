const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const movieRouter = require("./routes/movie_route.js");
const db = require("./db");
const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Express server listen to port ${port}`);
});

db.connectDB().then(() => {
  console.log("connection established successfuly!!!");
}).catch(err => {
  console.log(err.message);
});

const Movie = require("./models/movie_schema");
const movie = new Movie({
  title: "som title",
  release_year: 2000,
  format: "DVD",
  actors: ["Some actor"]
});

// movie.save((err) => {
//   if (err)
//     console.log(err);
//   else
//     console.log("successfuly saved");
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/movie", movieRouter);


module.exports = app;