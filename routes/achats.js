var express = require("express");
var router = express.Router();

const Trajet = require("../models/trajets");

const Achat = require("../models/achats");

router.get("/", (req, res) => {
  Trajet.find().then((data) => {
    for (let trip of data) {
      
      const newAchat = new Achat({
        departure: trip.departure,
        arrival: trip.arrival,
        hour: trip.hour,
        minute: trip.minute,
        price: trip.price,
      });

      newAchat.save();
    }
  });

  Trajet.deleteMany({}).then(data => console.log(data));

  res.json({ result: true });
});
//-----------------------------------------------------------------------------------

router.get("/booking", (req, res) => {
  Achat.find().then((data) => {
    res.json({ data });
  });
});
module.exports = router;
