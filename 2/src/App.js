import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       number:Math.floor(Math.random() * (100 - 1) + 1),
       userValue:"",
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
      userValue:"",
      status:"Type something",
      display:"none",
      history:[]
    })

  }
  Check(e) {
    e.preventDefault();
    this.setState({turns:this.state.turns-1});
    if (this.state.turns > 1) {
      if(this.state.userValue > this.state.number) {
        this.setState({status:"Too high"});
        this.state.history.unshift({value:this.state.userValue,status:"Too high"});
      }
      else if (this.state.userValue < this.state.number) {
        this.state.history.unshift({value:this.state.userValue,status:"Too low"});
        this.setState({status:"Too low"});
      }
      else {
        this.setState({status:"You win",display:"none"});
        this.state.history.unshift({value:this.state.userValue,status:"Win",color:"green"});
      }
      
    }
    else {
      this.state.history.unshift({value:this.state.userValue,status:"Lose",color:"red"});
      this.setState({status:"You lose",display:"none"});
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
          <input value={this.state.userValue} placeholder="Number" onChange={this.setUserValue} min="0" max="100"  type="number"></input>
          <button style={{display:this.state.display}} onClick={this.Check}>Check</button>
          <button onClick={this.Start}>Restart</button>
        </form>
        <ul>
        {this.state.history.map((item,i) =>
          
            <li className={item.color} key={i.toString()}> {item.value} - {item.status}</li>
          
         )}
        </ul>
      </div>
    )
  }
}



