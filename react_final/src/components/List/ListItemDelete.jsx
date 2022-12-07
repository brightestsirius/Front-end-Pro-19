import React from "react";

import { useDispatch } from "react-redux";
import { fetchDeleteItemThunk } from "./../../store/list/actions";

export default function ListItemDelete({ id }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(fetchDeleteItemThunk(id))}>Delete</button>
  );
}
