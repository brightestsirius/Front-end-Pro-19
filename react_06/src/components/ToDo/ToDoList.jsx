import React, { useState, useEffect } from "react";
import {
  getList,
  addItem,
  updateItem,
  deleteItem,
} from "./../../services/todoService";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import "./style.sass";

export default function ToDoList() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState(``);

  useEffect(() => {
    getList().then((list) => setList(list.slice(0, 10)));
  }, []);

  const completeItem = async (item) => {
    let updatedItem = await updateItem(item.id, { completed: !item.completed });
    setList((prevState) =>
      prevState.map((el, i) => {
        if (el.id === item.id) el = updatedItem;
        return el;
      })
    );
  };

  const addTask = async (e) => {
    e.preventDefault();
    let addedItem = await addItem({ title: title });
    setList((prevState) => [...prevState, addedItem]);
    e.target.reset();
  };

  const removeItem = async (e, itemId) => {
    e.stopPropagation();
    await deleteItem(itemId);
    setList((prevState) => prevState.filter((el) => el.id !== itemId));
  };

  return (
    <div className="todo">
      <ToDoForm addTask={addTask} setTitle={(e) => setTitle(e.target.value)} />
      <hr />
      <ul>
        {list.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            completeItem={() => completeItem(item)}
            removeItem={(e) => removeItem(e, item.id)}
          />
        ))}
      </ul>
    </div>
  );
}
