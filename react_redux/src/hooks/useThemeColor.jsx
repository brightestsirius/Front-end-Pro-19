import { useState } from "react";

export default function useThemeColor() {
  const [themeColor, setThemeColor] = useState(`#9e9e9e`);
  return { themeColor, setThemeColor };
}
