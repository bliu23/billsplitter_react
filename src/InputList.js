import React, { Component } from 'react';
import Individual from './Individual.js';

class InputList extends Component {
  render() {
    var people = [];
    console.log("asdf", this.props.numPeople);
    for(let i = 0; i < this.props.numPeople; i++) {
      people.push(<Individual index={i} key={i}/>)

    }

    return (     
      <div className="Button">
        <div className="ind">{people}</div>
      </div>
    );
  }
}

export default InputList;
