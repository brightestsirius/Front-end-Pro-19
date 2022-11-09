import React, { useState, useEffect, useCallback } from "react";
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
  const [filteredList, setFilteredList] = useState([]);
  const [title, setTitle] = useState(``);
  const [filter, setFilter] = useState(`all`);

  useEffect(() => {
    getList().then((list) => setList(list.slice(0, 10)));
  }, []);

  useEffect(() => {
    //console.log(`in useEffect for list`, list);
    setFilteredList(list);
  }, [list]);

  useEffect(() => {
    //console.log(`in useEffect for filter,list`, list, filter);
    makeFilter();
  }, [filter, list]);

  const completeItem = useCallback(
    async (item) => {
      let updatedItem = await updateItem(item.id, { completed: !item.completed });
      setList((prevState) =>
        prevState.map((el, i) => {
          if (el.id === item.id) el = updatedItem;
          return el;
        })
      );
    }, []);

  const addTask = useCallback(async (e) => {
    e.preventDefault();
    let addedItem = await addItem({ title: title });
    setList((prevState) => [...prevState, addedItem]);
    e.target.reset();
  }, [title]);

  const removeItem = useCallback(async (e, itemId) => {
    e.stopPropagation();
    await deleteItem(itemId);
    setList((prevState) => prevState.filter((el) => el.id !== itemId));
  }, []);

  const makeFilter = () => {
    if (filter === `completed`) {
      setFilteredList(list.filter((item) => item.completed));
    } else if (filter === `non-completed`) {
      setFilteredList(list.filter((item) => !item.completed));
    } else if (filter === `all`) {
      setFilteredList(list);
    }
  };

  return (
    <div className="todo">
      <ToDoForm addTask={addTask} setTitle={(e) => setTitle(e.target.value)} />
      <hr />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="non-completed">Non-completed</option>
      </select>
      <hr />
      <ul>
        {filteredList.map((item) => (
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
