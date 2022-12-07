import React from "react";

import './style.sass'

import {
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_NON_COMPLETED,
} from "./../../constants/filter";

import { useSelector, useDispatch } from "react-redux";

import { setFilter } from "./../../store/filter/reducer";

import FilterBtn from "./FilterBtn";

export default function Filter() {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleClick = (e) => dispatch(setFilter(e.target.name));

  const isActive = (name) => filter === name;

  return (
    <div>
      <FilterBtn
        name={FILTER_ALL}
        handleClick={handleClick}
        title={`All`}
        isActive={isActive(FILTER_ALL)}
      />
      <FilterBtn
        name={FILTER_COMPLETED}
        handleClick={handleClick}
        title={`Complited`}
        isActive={isActive(FILTER_COMPLETED)}
      />
      <FilterBtn
        name={FILTER_NON_COMPLETED}
        handleClick={handleClick}
        title={`Non-complited`}
        isActive={isActive(FILTER_NON_COMPLETED)}
      />
    </div>
  );
}