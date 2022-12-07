import React from "react";

import { useDispatch } from "react-redux";
import {changeCompleted} from './../../store/list/action'

export default function InputChange({ item }) {
  const dispatch = useDispatch();
  const handleChange = () => dispatch(changeCompleted(item));

  return <input type="checkbox" onChange={handleChange} defaultChecked={item.completed} />;
}