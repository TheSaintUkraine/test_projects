import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       number:Math.floor(Math.random() * (100 - 1) + 1),
       userValue:0,
       turns:10,
       status:"Type something",
       display:"none",
       history:[]
    }
    this.Check = this.Check.bind(this);
    this.setUserValue = this.setUserValue.bind(this);
    this.Start = this.Start.bind(this);
  }
  Start(e) {
    e.preventDefault();
    this.setState({
      number: Math.floor(Math.random() * (100 - 1) + 1),
      turns:10,
      userValue:1,
      status:"Type something",
      display:"none"
    })
    document.getElementById("Input_userValue").value="";
  }

  Check(e) {
    e.preventDefault();
    this.setState({turns:this.state.turns-1});
    if (this.state.turns > 1) {
      if(this.state.userValue > this.state.number) {
        this.setState({status:"Too high"});
        this.state.history.unshift(this.state.userValue + "- Too high");
      }
      else if (this.state.userValue < this.state.number) {
        this.state.history.unshift(this.state.userValue + "- Too low");
        this.setState({status:"Too low"});
      }
      else {
        this.setState({status:"You win",opacity:"none"});
        this.state.history.unshift(this.state.userValue + "- Win");
      }
      
    }
    else {
      this.state.history.unshift(this.state.userValue + "- Lose");
      this.setState({status:"You lose",opacity:"none"});
    }
  }

  setUserValue(e) {
    this.setState({display:"block"});
    this.setState({
      userValue: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <p>Turns: {this.state.turns}</p>
        <p>{this.state.status}</p>
        <form>
          <input placeholder="Number" min="0" max="100" onChange={this.setUserValue} id="Input_userValue" type="number"></input>
          <button style={{display:this.state.display}} onClick={this.Check}>Check</button>
          <button onClick={this.Start}>Restart</button>
        </form>
        <ul>
        {this.state.history.map((item) =>
          <li key={item.toString()}> {item} </li>
         )}
        </ul>
      </div>
    )
  }
}


