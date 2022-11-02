import React, { Component } from "react";
import List from "./../List/List";

export default class Lists extends Component {
  state = {
    firstList: this.props.list,
    secondList: [],
    thirdList: [],
  };

  moveFromFirstToSecond() {
    this.setState({
      secondList: [this.state.firstList.shift(), ...this.state.secondList],
    }, () => {
      console.log(this.state.secondList);
    });

  }

  moveFromSecondToThird() {
    this.setState({
      thirdList: [this.state.secondList.shift(), ...this.state.thirdList],
    });
  }

  moveFromSecondToFirst() {
    this.setState({
      firstList: [this.state.secondList.shift(), ...this.state.firstList],
    });
  }

  removeLastItem() {
    this.setState({
      thirdList: this.state.thirdList.slice(0, -1),
    });
  }

  render() {
    return (
      <div>
        <List
          list={this.state.firstList}
          actions={[
            {btn: "Move To Second", action: this.moveFromFirstToSecond.bind(this)}
          ]}
        />
        <List
          list={this.state.secondList}
          actions={[
            {btn: "Move To First", action: this.moveFromSecondToFirst.bind(this)},
            {btn: "Move To Third", action: this.moveFromSecondToThird.bind(this)}
          ]}
        />
        <List
          list={this.state.thirdList}
          actions={[
            {btn: "Remove last item", action: this.removeLastItem.bind(this)}
          ]}
        />
      </div>
    );
  }
}
