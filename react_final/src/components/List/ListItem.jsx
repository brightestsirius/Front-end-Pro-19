import React from "react";
import ListItemCompleted from './ListItemCompleted'
import ListItemDelete from './ListItemDelete'

export default function ListItem({ item }) {
  return (
    <li style={{ color: item.completed ? `green` : undefined }}>
      {item.title}
      <ListItemCompleted item={item} />
      <ListItemDelete id={item.id} />
    </li>
  );
}
