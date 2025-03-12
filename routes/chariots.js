var express = require("express");
var router = express.Router();

const Trajet = require("../models/trajets");

//----------------------------------------------------------------------------

/* GET users listing. */
router.get("/", (req, res) => {
  Trajet.find().then((data) => {
    res.json({ data });
  });
});

//----------------------------------------------------------------------------


router.post("/delete", (req, res) => {
  const { trip } = req.body;

  Trajet.deleteOne({departure: trip.departure, arrival: trip.arrival, hour: trip.hour, minute: trip.minute, price: trip.price}).then((data) => {
    res.json({ result: true });
  });
});

//----------------------------------------------------------------------------
module.exports = router;
