import React, { Component } from 'react';
import Individual from './Individual.js';
import './InputList.css'

class InputList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    };
  }

  /*
    This function is passed into Individual component as a callback function.
    It increments an index of people so we can track who owes what.
  */
  addValueFunction = (value, index) => {
    console.log("Called");
    var ppl = this.state.people;
    console.log('Value:', value);
    console.log('index:', index);
    ppl[index] = parseInt(ppl[index]) + parseInt(value);
    console.log(ppl[index]);
    this.setState({people: ppl, amt: value}, () => {
    })

  }


  render() {
    var people = [];
    console.log('NumPeople:', this.props.numPeople);
    for (let i = 0; i < this.props.numPeople; i++) {
      people.push(<Individual index={i} key={i} addVal={this.addValueFunction} totalVal={this.state.people[i]} />)  
    }



    return (
      <div className="InputList">
        <div className="ind list">{people}</div>
      </div>
    );
  }
}

export default InputList;
