"use client";
import { useState, useEffect } from "react";

export default function useTheme() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const htmlAttr = document.documentElement.getAttribute("data-theme");

      let current = (saved || htmlAttr || "dark").toLowerCase();
      if (current !== "light" && current !== "dark") current = "dark";

      document.documentElement.setAttribute("data-theme", current);
      setIsLightTheme(current === "light");
    } catch {
      // no-op
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isLightTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsLightTheme(!isLightTheme);
  };

  return { isLightTheme, toggleTheme };
}
