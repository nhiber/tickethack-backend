var express = require("express");
var router = express.Router();

const moment = require("moment");

const trips = require("../trips.json");

router.post("/", (req, res) => {
  const { departure, arrival, date } = req.body;

  res.json({ trips: getTrips(departure, arrival, date, trips) });
});

function getTrips(departure, arrival, date, trips) {
  let trajets = [];
  for (trip of trips) {
    let _timestamp = new Date(trip.date.$date).getTime();
    let tripDate = moment(Number(_timestamp)).format("YYYY-MM-DD");
    console.log(tripDate);
    let hour = moment(Number(_timestamp)).format("HH:mm");

    if (
      trip.departure === departure &&
      trip.arrival === arrival &&
      tripDate === date
    ) {
      const _trip = {
        departure: trip.departure,
        arrival: trip.arrival,
        time: hour,
        date: tripDate,
        price: trip.price, 
      };

      trajets.push(_trip);
    }
  }
  return trajets;
}

module.exports = router;
