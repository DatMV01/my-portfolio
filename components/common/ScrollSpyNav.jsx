"use client";

import React from "react";
import clsx from "clsx";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import navLinks from "@/data/navLinks";

export default function ScrollSpyExample() {
  const activeId = useScrollSpy(navLinks.map((s) => s.id));

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = window.innerHeight / 2 - el.offsetHeight / 2;
      const y = el.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={clsx(
        "fixed bottom-5 left-1/2 -translate-x-1/2 transform",
        "border-border rounded-full border backdrop-blur-md",
      )}
    >
      <ul className="flex flex-row items-center justify-center gap-2 p-2">
        {navLinks.map((s) => (
          <li
            key={s.id}
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo(s.id);
            }}
            className={clsx(
              "border-border block cursor-pointer border",
              "rounded-full p-2",
              "hover:scale-110",
              activeId === s.id
                ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                : "hover:bg-muted",
            )}
          >
            <a href={`#${s.id}`} className="block h-full w-full text-center">
              {s.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
