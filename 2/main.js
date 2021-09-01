const express = require('express')
const bodyParser = require("body-parser")
const session = require("express-session");
const app = express()

app.use(session({
    secret:"qsderty",
    resave:true,
    saveUninitialized: false
}))

app.use(bodyParser.json());

var urlEncoded = bodyParser.urlencoded({extended:false})
app.use("/",express.static(__dirname+"/build"))
app.use("/second_game",express.static(__dirname+"/build"))
app.post("/getQuestion",urlEncoded,(req,res)=>{
    if(!req.body.answer) {
        req.session.user = new User(0,1000,0);
    }
    else {
        switch(req.body.answer) {
            case "up":
                req.session.user.min = req.session.user.lastNumber;
                break;
            case "down":
                req.session.user.max = req.session.user.lastNumber;
                break;
        }
    }
    req.session.user.lastNumber = Math.floor(((req.session.user.max - req.session.user.min)/2) + req.session.user.min);
    res.send((req.session.user.lastNumber).toString());
})

class User {
    constructor(min,max,lastNumber) {
        this.min = min;
        this.max = max;
        this.lastNumber = lastNumber;
    }
}
app.listen(80)