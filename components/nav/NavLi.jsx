import clsx from "clsx";
import React from "react";

const NavLi = ({
  className,
  item,
  onClick = undefined,
  showIcon = false,
  active = false,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      console.log("click", item.id);
      onClick(item.id);
    }
  };

  return (
    <li
      className={clsx(
        "cursor-pointer",
        "rounded-full",
        "hover:scale-110",
        active
          ? "bg-secondary text-foreground hover:bg-secondary font-bold"
          : "hover:bg-muted",
        className,
      )}
    >
      <a
        onClick={handleClick}
        href={`#${item.id}`}
        className="block h-full w-full p-2 text-center"
      >
        {showIcon ? item.icon : item.title}
      </a>
    </li>
  );
};

export default NavLi;
