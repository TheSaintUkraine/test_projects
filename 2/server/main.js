const express = require('express')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json());

var urlEncoded = bodyParser.urlencoded({extended:false})

app.post("/getQuestion",urlEncoded,(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    var min = parseInt(req.body.min);
    var max = parseInt(req.body.max);
    res.send((Math.floor(((max - min)/2) + min)).toString());
})

app.listen(5000)