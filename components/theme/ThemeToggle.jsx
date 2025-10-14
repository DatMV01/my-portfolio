"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import clsx from "clsx";

export default function ThemeToggle({ className = "" }) {
  const { theme, changeTheme } = useTheme();

  return (
    <button
      onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
      className={clsx(
        "p-2 rounded-0.75 border hover:text-background hover:bg-foreground transition-colors duration-300",
        className
      )}
    >
      {theme === "light" ? (
        <Moon className="w-full h-full" />
      ) : (
        <Sun className="w-full h-full" />
      )}
    </button>
  );
}
