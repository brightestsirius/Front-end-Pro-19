import React from "react";

export default function FilterBtn({ name, title, isActive, handleClick }) {
  return (
    <button
      name={name}
      onClick={handleClick}
      className={isActive ? `active` : undefined}
    >
      {title}
    </button>
  );
}
