const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  title:  {
    type:String,
    required: true,
    minlength: 1
  },
  release_year: {
    type: Number,
    min: 1900,
    max: 3000,
    required: [true, "release year required"]
  },
  format: {
    type: String,
    enum: ["VHS", "DVD", "Blu-Ray"],
    required: true
  },
  actors: [{
    type: String
  }]
});

module.exports = mongoose.model("Movie", movieSchema);