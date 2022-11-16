import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {getListItem} from './../../services/todoService';

export default function ToDoItem() {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(()=>{
    (async () => {
        let item = await getListItem(id);
        setTask(item);
    })()
  },[id]);

  return <div>ToDoItem: {task.title}</div>;
}