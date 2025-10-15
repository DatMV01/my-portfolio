"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import clsx from "clsx";
import NavLi from "./NavLi";

export default function ScrollSpyNav({
  items = [],
  offset = 0,
  className = "",
}) {
  const activeId = useScrollSpy(items.map((s) => s.id));

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Smooth scroll with offset
    const yOffset = offset ?? window.innerHeight / 2 - el.offsetHeight / 2;
    const top = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top, behavior: "smooth" });

    // Update URL hash without page jump
    window.history.pushState(null, null, `#${id}`);
  };

  return (
    <nav
      className={clsx(
        "fixed bottom-5 left-1/2 -translate-x-1/2 transform",
        "border-border bg-background/70 rounded-full border backdrop-blur-md",
        className,
      )}
    >
      <ul className="flex flex-row items-center justify-center gap-2 p-2">
        {items.map((navLink) => (
          <NavLi
            key={navLink.id}
            item={navLink}
            onClick={handleClick}
            active={activeId == navLink.id}
            showIcon={true}
          />
        ))}
      </ul>
    </nav>
  );
}
