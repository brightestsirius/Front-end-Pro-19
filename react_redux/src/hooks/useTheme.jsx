import { useState } from "react";

export default function useTheme() {
  const [themeColor, setThemeColor] = useState(`#8bc34a`);
  return { themeColor, setThemeColor };
}
