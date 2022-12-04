import { useState } from "react";

export default function useList() {
  const [todoList] = useState([
    {
      id: 1,
      title: `Todo 1`,
      isDone: true,
    },
    {
      id: 2,
      title: `Todo 2`,
      isDone: false,
    },
    {
      id: 3,
      title: `Todo 3`,
      isDone: true,
    },
    {
      id: 4,
      title: `Todo 4`,
      isDone: false,
    },
  ]);

  const [listStyleType] = useState(`disclosure-closed`)

  return { todoList, listStyleType };
}
