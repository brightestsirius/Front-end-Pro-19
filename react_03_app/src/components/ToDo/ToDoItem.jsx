import React, { Component } from "react";

export default class ToDoItem extends Component {

  componentDidMount(){
    console.log(`ToDoItem componentDidMount`);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(nextProps.item.complited); // true
  //   console.log(this.props.item.complited); // false
    
  //   if(this.props.item.complited === nextProps.item.complited){
  //     return false;
  //   } else{
  //     return true;
  //   }
  // }

  componentDidUpdate(){
    console.log(`ToDoItem componentDidUpdate`);
  }

  componentWillUnmount(){
    console.log(`ToDoItem componentWillUnmount`);
    // clearInterval
    // removeEventListener
  }

  render() {

    let {item:{complited, title}, closeTask, compliteTask} = this.props;

    return (
      <li className={complited ? `complited` : `inprogress`}>
        {title}
        {complited ? (
          <button onClick={closeTask}>Close</button>
        ) : (
          <button onClick={compliteTask}>
            Complite
          </button>
        )}
      </li>
    );
  }
}
