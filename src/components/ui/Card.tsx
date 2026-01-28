import type { ComponentProps } from "react";
import clsx from "clsx";

type CardProps = ComponentProps<"div"> & {
  variant?: "default" | "ghost";
};

const Card = ({ variant = "default", className, ...props }: CardProps) => {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/60 bg-white/80 p-6 shadow-card backdrop-blur-sm transition duration-200 dark:border-white/10 dark:bg-white/5",
        variant === "ghost" && "border-transparent bg-white/60 shadow-soft",
        className
      )}
      {...props}
    />
  );
};

export default Card;
