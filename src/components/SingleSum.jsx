import React, { Component } from 'react';

  class SingleSum extends Component {
  
    render() {
    return (
        <div className="all-sums">
            <p className={`capitalize sum ${this.props.classing}`}>{this.props.category}: {Math.abs(this.props.sum)}</p>
            <hr/>
        </div>
        )
    }
    
  }
        
export default SingleSum;

