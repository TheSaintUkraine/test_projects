import './App.css';

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';
import SecondGame from './SecondGame';
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       max:1000,
       number:Math.floor(Math.random() * (this.max - 1) + 1),
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
      number: Math.floor(Math.random() * (this.state.max - 1) + 1),
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
        this.setState(prevState =>({
          status:"Too high",
          history:[...prevState.history,{value:this.state.userValue,status:"Too high"}]
        }));
      }
      else if (this.state.userValue < this.state.number) {
        this.setState(prevState =>({
          status:"Too low",
          history:[...prevState.history,{value:this.state.userValue,status:"Too low"}]
        }));
      }
      else {
        this.setState( prevState => ({
          status:"You win",
          display:"none",
          history:[...prevState.history,{value:this.state.userValue,status:"Win",color:"green"}]
        }));
      }
      
    }
    else {
      this.setState(prevState=>({
        status:"You lose",
        display:"none",
        history:[...prevState.history,{value:this.state.userValue,status:"Lose",color:"red"}]
      }));
    }
  }

  setUserValue(e) {
    this.setState({
      userValue: e.target.value,
      display:"block"
    })
  }
  render() {
    return (
      <div>
        <Router>
          <div className="nav">
            <Link className="link" to="/">First game</Link>
            <Link className="link" to="/second_game">Second game</Link>
          </div>
          <Switch>
            
            <Route path="/second_game"> 
              <SecondGame/>
            </Route>

            <Route path="/">
            <div className="App">
              <p>Turns: {this.state.turns}</p>
              <p>{this.state.status}</p>
              <form>
              <input value={this.state.userValue} placeholder="Number" onChange={this.setUserValue} min="0" max={this.state.max}  type="number"></input>
              <button style={{display:this.state.display}} onClick={this.Check}>Check</button>
              <button onClick={this.Start}>Restart</button>
              </form>
                <ul>
                  {this.state.history.map((item,i) =>       
                    <li style={{color:item.color}} key={i.toString()}> {item.value} - {item.status}</li>
                  )}
                </ul>
            </div>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

