import React, { Component } from 'react'
import './style.sass'

export default class Counter extends Component {
  constructor(){
    super();

    // setInterval(() => {
    //   this.setState(
    //     {
    //       counter: this.state.counter+1
    //     },
    //     () => console.log(this.state)
    //   )

    // }, 1000);

    console.log();
  }

  render() {
    return (
      <div className='counter'>
        <button onClick={ this.props.onMinusClickCounter }>-</button>
        <span>{this.props.counter}</span>
        <button onClick={ this.props.onPlusClickCounter }>+</button>
      </div>
    )
  }
}
