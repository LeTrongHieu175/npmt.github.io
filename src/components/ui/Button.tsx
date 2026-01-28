import type { ComponentProps } from "react";
import clsx from "clsx";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400";

const variants = {
  primary:
    "bg-gradient-to-r from-blush-400 to-lilac-400 text-white shadow-soft hover:opacity-90",
  outline:
    "border border-slategray/60 text-ink hover:border-blush-300 hover:text-blush-400 dark:border-white/20 dark:text-white",
  ghost: "text-ink hover:text-blush-400 dark:text-white",
};

type ButtonProps = ComponentProps<"button"> & {
  variant?: keyof typeof variants;
};

const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props} />
  );
};

export default Button;
