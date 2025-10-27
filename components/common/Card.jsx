import { clsx } from "clsx";

const Card = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "border-border w-full rounded-md border-2 p-4",
        "flex flex-col gap-2",
        "duration-100 hover:scale-101 hover:bg-gray-50",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
