import React, { Component } from 'react';
import logo from './logo.svg';
import InputList from './InputList.js';
import AddValue from './AddValue.js';
import Individual from './Individual.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPeople: '',
      num: '',
    };
  }

  /*
    This function sets the state of the size of the party.
    It also generates the array passed into InputList.
  */
  handleParty = (event) => {
    this.setState({ num: event.target.value})

  }

  /*
    This function generates an array based off of the size of the party, and 
  */
  handleClick = () => {
    this.setState({ numPeople: this.state.num })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Billsplitter</h1>
          <label>
            <span>How many people are in your party?</span>
            <input type="text" value={this.state.num} onChange={this.handleParty} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleClick} />

          <AddValue />

          <InputList numPeople={this.state.numPeople} />
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
