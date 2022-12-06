import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {changeItemStatus} from './../../store/list/actions'

export default function List() {
  const {todoList, listStyleType} = useSelector((state) => state.list);
  const {themeColor} = useSelector((state) => state.theme);

  const dispatch = useDispatch(); // store.dispatch();

  return (
    <ul style={{background: themeColor, listStyleType}}>
      {todoList.map((item) => (
        <li style={{ color: item.isDone ? `green` : `red` }} key={item.id}>
          {item.title} <button onClick={() => dispatch(changeItemStatus(item.id))}>Change status</button>
        </li>
      ))}
    </ul>
  );
}
