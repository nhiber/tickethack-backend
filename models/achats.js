const mongoose = require("mongoose");

const achatSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  hour: Number,
  minute: Number,
  price: Number,
});

const Achat = mongoose.model("achats", achatSchema);

module.exports = Achat;
