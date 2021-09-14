import React, { Component } from 'react'
import axios from "axios";
export default class Second_game extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             turns:10,
             question:"Is your number ",
             restart_button:"none",
             control_buttons:"block"
        }
        this.High = this.High.bind(this);
        this.Low = this.Low.bind(this);
        this.Win = this.Win.bind(this);
        this.Lose = this.Lose.bind(this);
        this.Restart = this.Restart.bind(this);
    }
    componentDidMount() {
        axios.post("/newGame").then((response)=>{
            this.setState({
                question:"Is your number 500?"
            })
        })
    }
    High(e) {
        e.preventDefault();
        this.setState({turns:this.state.turns-1})
        if(this.state.turns > 1) {
            axios.post("/getQuestion",{answer:"up"}).then((response)=>{
                this.setState({                    
                    question:"Is your number "+ response.data  + "?"
                })
            })
        }
        else {
            this.Lose();
        }
    }
    Low(e) {
        e.preventDefault();
        this.setState({turns:this.state.turns-1})
        if(this.state.turns > 1) {
            axios.post("/getQuestion",{answer:"down"}).then((response)=>{
                this.setState({                    
                    question:"Is your number " + response.data + "?"
                })
            })
        }
        else {
            this.Lose();
        }
    }
    Lose() {
        this.setState({
            question:"Computer lose",
            color:"red",
            restart_button:"block",
            control_buttons:"none"
        })
    }
    Win(e) {
        e.preventDefault();
        this.setState({
            question:"Computer win",
            color:"green",
            restart_button:"block",
            control_buttons:"none"
        })
    }
    Restart(e) {
        e.preventDefault();
        this.setState({
            color:"black",
            restart_button:"none",
            control_buttons:"block",
            turns:10,
            question:"Is your number 500?"
        })
        axios.post("/newGame").then((response)=>{
           this.setState({                    
               question:"Is your number 500?",
            })
        })
    }
    render() {
        return (
            <div className="App">
                <p>0 - 1000</p>
                <p>Turns: {this.state.turns}</p>
                <p style={{color:this.state.color}}>{this.state.question}</p>

                <form>
                    <button style={{display:this.state.control_buttons}} onClick={this.High}>Up</button>
                    <button style={{display:this.state.control_buttons}}onClick={this.Win}>Yes</button>
                    <button style={{display:this.state.restart_button}} onClick={this.Restart}>Restart</button>
                    <button style={{display:this.state.control_buttons}}onClick={this.Low}>Down</button>
                </form>
            </div>
        )
    }
}
