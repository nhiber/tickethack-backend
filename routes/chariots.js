var express = require("express");
var router = express.Router();

const Trajet = require("../models/trajets");

/* GET users listing. */
router.get("/", (req, res) => {
  Trajet.find().then((data) => {
    res.json({ data });
  });
});

module.exports = router;
