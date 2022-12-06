import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setThemeColor } from "./../../store/theme/actions";

export default function Switcher() {
  const {themeColor} = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <label>
      Set theme color{" "}
      <input
        type="color"
        defaultValue={themeColor}
        onChange={(e) => dispatch(setThemeColor(e.target.value))}
      />
    </label>
  );
}