const mongoose = require("mongoose");

const defaultUri = "mongodb://localhost:27017/kinolab";

mongoose.Promise = global.Promise;

const defaultOptions = {
  user: 'kinolab-client',
  pass: 'dvorak',
  useMongoClient: true
};

const connectDB = (uri=defaultUri, options=defaultOptions) => {
  return mongoose.connect(defaultUri, defaultOptions);
}

module.exports.connectDB = connectDB;