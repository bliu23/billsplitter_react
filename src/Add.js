import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCost: 0,
      checked: false
    }
  }
  
  handleChange = ()=> {
    checked: !this.state.checked;
  }

  render() {
    var incr = 0;
    if(this.state.checked) {
      this.state.totalCost = this.props.increment;
    }
    return (     
      <div className="Add">
        <input type="checkbox"/>
      </div>
    );
  }
}

export default Add;
