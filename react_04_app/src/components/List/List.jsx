import React, { Component, Fragment } from "react";

export default class List extends Component {
  render() {
    let { list, actions } = this.props;

    return Array.isArray(list) && list.length ? (
      <Fragment>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>

        {actions.map((item,index) => <button key={index} onClick={item.action}>{item.btn}</button>)}
      </Fragment>
    ) : null;
  }
}