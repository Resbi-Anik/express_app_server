var express = require("express");
var app = express();

app.get("/", (req, res) => {
  console.log('get the data');
});

app.get('/movie',(req,res)=>{
    console.log('list');
    
})
app.listen(3000, (req, res) => {
  console.log("hello world");
});
