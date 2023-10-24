require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT;
const databaseURL = process.env.DB_URL;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", require("./src/routes"));

mongoose.connect(databaseURL).then(
  (res) => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
    //server
    var server = app.listen(port, function () {
      var host = server.address().address;
      var port = server.address().port;

      console.log("Example app listening at http://%s:%s", host, port);
    });
  },
  (err) => {
    console.log(err);
  }
);
