import React, {useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";
import {fetchListThunk} from './../../store/list/actions';

import ListItem from './ListItem'

export default function List() {
  const { todoList } = useSelector((state) => state.list);

  const dispatch = useDispatch();

  useEffect(()=>{
    (async () => {
      dispatch(fetchListThunk());
    })()
  }, [])

  return (
    <ul>
      {todoList.map((item) => <ListItem key={item.id} item={item} />)}
    </ul>
  );
}
