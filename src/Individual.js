import React, { Component } from 'react';
import './Individual.css';

class Individual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCost: 0,
      addedCost: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    this.setState({addedCost: event.target.value}, ()=> {
        console.log('Added cost', this.state.addedCost);
    })
  }

  handleClick() {
    // e.preventDefault();
    this.props.addVal(this.state.addedCost, this.props.index);

    // if(this.state.addedCost === '') {
    //   console.log('empty');
    // }
    // else {
    //   this.setState({totalCost: (parseInt(this.state.totalCost) + parseInt(this.state.addedCost))}, () => {
    //     console.log('Total cost', this.state.totalCost);
    //   })
    // }
    // this.props.addVal(parseInt(this.state.addedCost), this.props.index);

  }
  
  render() {
    return (     
      <div className="Individual">
        <span>Person {this.props.index + 1} owes ${this.props.totalVal}</span>
          <label>
            <span>Add:</span>
            <input onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleClick} />
      </div>
    );
  }
}
Individual.propTypes = {
  totalCost: React.PropTypes.number,
  addedCost: React.PropTypes.number,

};

export default Individual;

//onChange={this.handleChange}
