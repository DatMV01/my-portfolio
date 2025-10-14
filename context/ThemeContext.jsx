"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const themes = [
  "light",
  "dark",
  "blue",
  "forest",
  "sunset",
  "neon",
  "pastel",
];

const ThemeContext = createContext({
  theme: "light",
  changeTheme: () => {},
  themes: [],
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  const changeTheme = (newTheme) => {
    if (typeof window === "undefined") return;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = saved ?? (systemPrefersDark ? "dark" : "light");

    changeTheme(initialTheme);
    setMounted(true);

    if (!saved) {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = (e) => changeTheme(e.matches ? "dark" : "light");
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, []);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
