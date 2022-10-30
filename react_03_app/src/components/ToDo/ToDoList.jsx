import React, { Component } from "react";
import "./style.sass";

import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  state = Object.assign({}, this.props);

  componentDidMount() {
    console.log(`ToDoList componentDidMount`);

    // setInterval(() => {
    //     console.log(`in interval`);
    // }, 1000);
  }

  componentDidUpdate() {
    console.log(`ToDoList componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount`);
  }

  compliteTask(index) {
    this.setState(
      {
        list: this.state.list.map((item, i) => {
          if (i === index) item.complited = true;
          return item;
        }),
      },
      () => console.log(this.state.list)
    );
  }

  closeTask(index) {
    this.setState(
      {
        list: this.state.list.filter((item, i) => i !== index),
      },
      () => console.log(this.state.list)
    );
  }

  render() {
    return this.state.list.length ? (
      <ul>
        {this.state.list.map((item, index) => (
          <ToDoItem
            key={index}
            item={item}
            compliteTask={this.compliteTask.bind(this, index)}
            closeTask={this.closeTask.bind(this, index)}
          />
        ))}
      </ul>
    ) : null;
  }
}
