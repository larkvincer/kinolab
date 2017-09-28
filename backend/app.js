const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const movieRouter = require("./routes/movie_route.js");
const db = require("./db");

const port = process.env.port || 8080;

app.use(cors());

app.listen(port, () => {
  console.log(`Express server listen to port ${port}`);
});

db.connectDB().then(() => {
  console.log("connection established successfuly!!!");
}).catch(err => {
  console.log(err.message);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/movie", movieRouter);


module.exports = app;