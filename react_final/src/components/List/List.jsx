import React, { useEffect } from "react";
import InputChange from "./InputChange";
import BtnDelete from "./BtnDelete";
import "./style.sass";
import { useSelector, useDispatch } from "react-redux";

import { FILTER_ALL, FILTER_COMPLETED } from "./../../constants/filter";

import { fetchList } from "./../../store/list/action";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function List() {
  let { list } = useSelector((state) => state.list);
  const { filter } = useSelector((state) => state.filter);
  const { isLoading } = useSelector((state) => state.loader);

  const dispatch = useDispatch();

  if (filter !== FILTER_ALL) {
    list = list.filter((item) =>
      filter === FILTER_COMPLETED ? item.completed : !item.completed
    );
  }

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return !isLoading ? (
    <ul>
      {list.map((item) => (
        <li key={item.id} className={item.completed ? `completed` : undefined}>
          {item.title}
          <InputChange item={item} />
          <BtnDelete id={item.id} />
        </li>
      ))}
    </ul>
  ) : (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
