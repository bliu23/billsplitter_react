import React, { Component } from 'react';
import logo from './logo.svg';
import InputList from './InputList.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPeople: 0
    };
  }

  handleChange = (event) => {
    this.setState({numPeople: event.target.value })
  }

  handleClick = () =>{
    console.log(this.state.numPeople);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Billsplitter</h1>
          <label>
            <span>How many people are in your party?</span>
            <input type="text" value={this.state.numPeople} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleClick} />
          
          <InputList numPeople={this.state.numPeople}/>
        </div>
        
      </div>
    );
  }
}

export default App;

//this.state.numPeople
  //<img src={logo} className="App-logo" alt="logo" />


/*
  This right here (onChange = this.handleChange) means that every time this input is changed, it calls the function.
  This the onClick is essentially useless.
*/
  // <label>
  //           <span>How many people are in your party?</span>
  //           <input type="text" value={this.state.numPeople} onChange={this.handleChange} />
  //         </label>
  //         <input type="submit" value="Submit" onClick={this.handleClick} />
          
  //         <InputList numPeople={this.state.numPeople}/>