const mongoose = require("mongoose");

const trajetSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  hour: Number,
  minute: Number,
  price: Number,
});

const Trajet = mongoose.model("trajets", trajetSchema);

module.exports = Trajet;
