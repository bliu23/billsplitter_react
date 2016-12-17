import React, { Component } from 'react';

class AddValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addValue: 0
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
      <div className="AddValue">
        <input placeholder="Enter $$"/>
        <input type="button" value="Split"/>
        <input type="button" value="Full Value"/>
      </div>
    );
  }
}

export default AddValue;
