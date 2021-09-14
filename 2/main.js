const express = require('express');
const session = require("express-session");

const app = express();

const Game = require("./Game.js");

app.use(session({
    secret:"qsderty",
    resave:true,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use("/",express.static(__dirname+"/build"));
app.use("/second_game",express.static(__dirname+"/build"));

app.post("/getQuestion",(req,res)=>{
    Game.Check(req.body.answer,req.session.game);
    req.session.game.lastNumber = Game.getResult(req.session.game);
    res.send((req.session.game.lastNumber).toString());
});

app.post("/newGame",(req,res)=>{
    req.session.game = new Game(0,1000,0);
    req.session.game.lastNumber = Game.getResult(req.session.game);
    res.send("OK")    
});

app.listen(80);