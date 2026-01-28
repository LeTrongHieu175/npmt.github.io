import { useEffect, useState } from "react";

const STORAGE_KEY = "npmt-theme";

type ThemeMode = "light" | "dark";

export const useDarkMode = () => {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored) {
      setMode(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
      return;
    }
    document.documentElement.classList.toggle("dark", false);
  }, []);

  const toggle = () => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  return { mode, toggle };
};
