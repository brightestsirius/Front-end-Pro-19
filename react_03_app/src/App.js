import React, { Component, Fragment } from "react";
import Counter from "./components/Counter";
import ToDoList from "./components/ToDo/ToDoList";

export default class App extends Component {
  
  componentDidMount(){
    setTimeout(() => {
      // this.setState({
      //   showToDoList: false
      // })
    },3000);
  }

  state = {
    counter: 10,
    list: [
      {
        title: "Taks 1",
        complited: true
      },
      {
        title: "Taks 2",
        complited: false
      },
      {
        title: "Taks 3",
        complited: true
      },
      {
        title: "Taks 4",
        complited: false
      }
    ],
    showToDoList: true
  };

  onPlusClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  onMinusClick() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <Fragment>
        <Counter
          counter={this.state.counter}
          onPlusClickCounter={this.onPlusClick.bind(this)}
          onMinusClickCounter={this.onMinusClick.bind(this)}
        />
        <hr></hr>
        <p align="center">
          <b>{this.state.counter}</b>
        </p>
        <hr></hr>
        {this.state.showToDoList && <ToDoList list={this.state.list} />}
      </Fragment>
    );
  }
}
