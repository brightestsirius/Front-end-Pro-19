import React, { Fragment, useEffect, useState } from "react";
import {
  getList,
  deleteItem,
  updateItem,
  addItem,
} from "./../../services/todoService";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import ToDoFilter from './ToDoFilter';
import "./style.sass";

export default function ToDoList() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [title, setTitle] = useState(``);
  const [selectedFilter, setSelectedFilter] = useState(`all`);

  useEffect(() => {
    console.log(`in useEffect`);

    getList()
        .then((data) => setList(data.slice(0, 10)));
  }, []);

  useEffect(() => {
    setFilteredList(list);
    filterList(selectedFilter);
  }, [list]);

  const getClass = (item) => {
    return item.completed ? `completed` : `progress`;
  };

  const removeItem = async (e, id) => {
    e.stopPropagation();
    e.target.disabled = true;

    await deleteItem(id);
    e.target.disabled = false;
    setList((prevState) => prevState.filter((item) => item.id !== id));
  };

  const changeCompleted = async (e, item) => {
    e.target.disabled = true;
    let updated = await updateItem(item.id, { completed: !item.completed });
    e.target.disabled = false;

    setList((prevState) =>
      prevState.map((el) => {
        if (el.id === item.id) el = updated;
        return el;
      })
    );
  };

  const submitForm = async (e) => {
    e.preventDefault();

    let addedItem = await addItem({ title: title, completed: false });
    setList((prevState) => [...prevState, addedItem]);

    e.target.reset();
  };

  const changeTitle = (e) => setTitle(e.target.value);

  const filterItems = e => {
    let value = e.target.value;
    filterList(value);
  }

  const filterList = value => {
    setSelectedFilter(value);
    // eslint-disable-next-line default-case
    switch(value){
        case `completed`:
            setFilteredList(list.filter(item => item.completed));
            break;
        case `progress`:
            setFilteredList(list.filter(item => !item.completed));
            break;
        case `all`:
            setFilteredList(list);
            break;
    }
  }

  return (
    <Fragment>

      <ToDoForm submitForm={submitForm} changeTitle={changeTitle} />

      <ToDoFilter filterItems={filterItems}  />

      {list.length ? (
        <ul>
          {filteredList.map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              getClass={getClass}
              changeCompleted={changeCompleted}
              removeItem={removeItem}
            />
          ))}
        </ul>
      ) : null}
    </Fragment>
  );
}
