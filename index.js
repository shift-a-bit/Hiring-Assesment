const cors = require("cors");
const express = require("express");
const router = require("./router");
const errors = require('./helpers/error');
const path = require('path');

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/views', '/index.html'));
});


app.use("/api", router);

app.listen(8000, () => {
  console.log("Server started at port 8000");
});

app.use(errors)
