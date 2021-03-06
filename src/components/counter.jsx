import React, { Component } from "react";

class Counter extends Component {
  
  getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  };

  formatValue = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm btn-secondary"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
    
      </div>
    );
  }
}

export default Counter;
