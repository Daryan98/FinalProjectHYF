var express = require("express");
var path = require("path");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var categoriesRouter = require("./routes/categories");
var languages = require("./routes/languages");
var lang_playlist = require("./routes/lang_playlist");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", indexRouter);
app.use("/categories", categoriesRouter);
app.use("/languages", languages);
app.use("/langPlaylist", lang_playlist);

module.exports = app;
