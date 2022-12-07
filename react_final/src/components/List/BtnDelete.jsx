import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemThunk } from "./../../store/list/reducer";

export default function BtnDelete({ id }) {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(deleteItemThunk(id));
  return <button onClick={handleClick}>Delete</button>;
}
