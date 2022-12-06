import React from "react";
import {
  FILTER_ALL,
  FILTER_DONE,
  FILTER_NOT_DONE,
} from "./../../constants/filter";

import { useSelector, useDispatch } from "react-redux";

import { setFilter } from "./../../store/filter/actions";

export default function Filter() {
  const {todoFilter} = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const hadleChange = (e) => dispatch(setFilter(e.target.name));

  return (
    <div>
      <button
        style={{ background: todoFilter === FILTER_ALL ? `crimson` : undefined }}
        name={FILTER_ALL}
        onClick={hadleChange}
      >
        All
      </button>
      <button
        style={{ background: todoFilter === FILTER_DONE ? `crimson` : undefined }}
        name={FILTER_DONE}
        onClick={hadleChange}
      >
        Done
      </button>
      <button
        style={{ background: todoFilter === FILTER_NOT_DONE ? `crimson` : undefined }}
        name={FILTER_NOT_DONE}
        onClick={hadleChange}
      >
        Not done
      </button>
    </div>
  );
}
