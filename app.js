require("./models/connection");

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var trajetsRouter = require("./routes/trajets");
var chariotsRouter = require("./routes/chariots");
var achatsRouter = require("./routes/achats");

var app = express();

const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/trajets", trajetsRouter);
app.use("/chariots", chariotsRouter);
app.use("/achats", achatsRouter);

module.exports = app;
