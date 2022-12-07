import React from "react";

import { useDispatch } from "react-redux";
import { changeCompletedThunk } from "./../../store/list/reducer";

export default function InputChange({ item }) {
  const dispatch = useDispatch();
  const handleChange = () => dispatch(changeCompletedThunk(item));

  return (
    <input
      type="checkbox"
      onChange={handleChange}
      defaultChecked={item.completed}
    />
  );
}
