import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {changeIsDoneList} from './../../store/actions/action'

export default function List() {
  const list = useSelector((state) => state.list);
  const listStyleType = useSelector(state => state.listStyleType);
  const themeColor = useSelector((state) => state.themeColor);

  const dispatch = useDispatch();

  return (
    <ul style={{listStyleType, background: themeColor}}>
      {list.map((item) => (
        <li key={item.id} style={{ color: item.isDone ? `green` : `crimson` }}>
          {item.title} <button onClick={() => dispatch(changeIsDoneList(item.id))}>Change status</button>
        </li>
      ))}
    </ul>
  );
}