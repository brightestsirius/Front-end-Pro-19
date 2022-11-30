import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function Switcher() {
  const { themeColor, setThemeColor } = useContext(ThemeContext);
  return (
    <label>
      Set theme color:{" "}
      <input
        type="color"
        defaultValue={themeColor}
        onChange={(e) => setThemeColor(e.target.value)}
      />
    </label>
  );
}
