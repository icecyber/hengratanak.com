//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/" , function(req , res){
  res.render("index");
});

app.use(function (req, res, next) {
  //Capture All 404 errors
    res.status(404).render("404.ejs")
  })


app.listen(process.env.PORT, function() {
  console.log("Server started on port 3000");
});
