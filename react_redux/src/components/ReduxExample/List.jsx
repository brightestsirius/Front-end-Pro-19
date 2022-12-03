import React from "react";
import { useSelector } from "react-redux";

export default function List() {
  const list = useSelector((state) => state.list);
  const listStyleType = useSelector(state => state.listStyleType);
  const themeColor = useSelector((state) => state.themeColor);

  return (
    <ul style={{listStyleType, background: themeColor}}>
      {list.map((item) => (
        <li key={item.id} style={{ color: item.isDone ? `green` : `crimson` }}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}