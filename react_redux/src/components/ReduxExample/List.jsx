import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {changeItemIsDone} from './../../store/todo/actions'

import {FILTER_ALL, FILTER_DONE} from './../../constants/filter'

export default function List() {
  let {todoList} = useSelector((state) => state.todo);
  let {listStyleType, themeColor} = useSelector(state => state.theme);
  let {todoFilter} = useSelector(state => state.filter)

  const dispatch = useDispatch();

  if(todoFilter !== FILTER_ALL){
    todoList = todoList.filter(item => todoFilter === FILTER_DONE ? item.isDone : !item.isDone);
  }

  return (
    <ul style={{listStyleType, background: themeColor}}>
      {todoList.map((item) => (
        <li style={{ color: item.isDone ? `green` : `red` }} key={item.id}>
          {item.title} <button onClick={() => dispatch(changeItemIsDone(item.id))}>Change status</button>
        </li>
      ))}
    </ul>
  );
}