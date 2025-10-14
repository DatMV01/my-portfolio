import clsx from "clsx";
import React from "react";

const ScrollSpyNav = () => {
  return (
    <div
      className={clsx(
        "fixed bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 transform",
        "border-border bg-background rounded-full border backdrop-blur-md",
      )}
    >
      <ul className="flex flex-row items-center justify-center gap-2 p-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <li
            key={index}
            href={`#section${index + 1}`}
            className="flex aspect-square h-6 items-center justify-center cursor-pointer"
          >
            <a>{index}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollSpyNav;
