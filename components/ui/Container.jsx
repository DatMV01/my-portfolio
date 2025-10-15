import React from "react";
import clsx from "clsx";

const Container = ({ className, children, size = "default" }) => {
  const sizes = {
    default: "max-w-7xl", // ~1280px
    wide: "max-w-[1600px]",
    narrow: "max-w-3xl",
    full: "max-w-none",
  };

  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 md:px-6 lg:px-8",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
