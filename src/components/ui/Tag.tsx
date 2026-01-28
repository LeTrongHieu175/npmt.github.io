import type { ComponentProps } from "react";
import clsx from "clsx";

type TagProps = ComponentProps<"span"> & {
  tone?: "pink" | "violet" | "neutral";
};

const tones = {
  pink: "bg-blush-100 text-blush-500",
  violet: "bg-lilac-100 text-lilac-500",
  neutral: "bg-slategray/40 text-muted",
};

const Tag = ({ tone = "neutral", className, ...props }: TagProps) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
      {...props}
    />
  );
};

export default Tag;
