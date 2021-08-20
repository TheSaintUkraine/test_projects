import React, { Component } from 'react'
import $ from "jquery";
export default class Second_game extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             turns:10,
             min:0,
             max:1000,
             question:"Is your number ",
             response:null,
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
        $.ajax({
            type:"POST",
            url:"http://localhost:5000/getQuestion",
            data:{
                min:0,
                max:1000
            },
            success:(data)=>{
                this.setState({
                    question:"Is your number "+data + "?",
                    response:data
                })
            }
        })
    }
    High(e) {
        e.preventDefault();
        if(this.state.turns > 1) {
            $.ajax({
                type:"POST",
                url:"http://localhost:5000/getQuestion",
                data:{
                    min:this.state.response,
                    max:this.state.max
                },
                success:(data)=>{
                    this.setState({
                        min:this.state.response,
                        question:"Is your number "+data + "?",
                        response:data,
                        turns:this.state.turns-1
                    })
                }
            })
        }
        else {
            this.Lose();
        }
    }
    Low(e) {
        e.preventDefault();
        if(this.state.turns > 1) {
            $.ajax({
                type:"POST",
                url:"http://localhost:5000/getQuestion",
                data:{
                    min:this.state.min,
                    max:this.state.response,
                    answear:"High"
                },
                success:(data)=>{
                    this.setState({
                        max:this.state.response,
                        question:"Is your number " + data + "?",
                        response:data,
                        turns:this.state.turns-1
                    })
                }
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
            min:0,
            max:1000
        })
        $.ajax({
            type:"POST",
            url:"http://localhost:5000/getQuestion",
            data:{
                min:0,
                max:1000
            },
            success:(data)=>{
                this.setState({
                    question:"Is your number "+data + "?",
                    response:data
                })
            }
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
