var express = require("express");
var app = express();

app.get("/", (req, res) => {
  console.log('get the data');
});
app.listen(3000, (req, res) => {
  console.log("hello world");
});
