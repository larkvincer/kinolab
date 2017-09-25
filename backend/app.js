const express = require("express")
const app = express();
const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Express server listen to port ${port}`);
});

app.get('/home', (req, res) =>{
  res.send("Response for home page request");
});

module.exports = app;