import React from "react";
import { useSelector } from "react-redux";

export default function Heading() {
  const themeColor = useSelector((state) => state.themeColor);

  return <h3 style={{color: themeColor}}>Hello, world!</h3>;
}