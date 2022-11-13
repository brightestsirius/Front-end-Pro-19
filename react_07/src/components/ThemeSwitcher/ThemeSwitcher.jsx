import React from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import ThemeContext from "./../../context/ThemeContext";

export default function ThemeSwitcher() {
  const {theme, setTheme} = useContext(ThemeContext);
  const user = useContext(UserContext);
  
  return (
    <label>
      Light theme for {user}:{" "}
      <input
        type="checkbox"
        onChange={e => setTheme(e.target.checked ? `light` : `dark`)}
        defaultChecked={theme === `light`}
      />
    </label>
  );
}
