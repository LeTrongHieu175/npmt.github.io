import type { ReactNode } from "react";
import clsx from "clsx";

const PageContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <main className={clsx("mx-auto w-full max-w-6xl px-4 pb-20 pt-6", className)}>
      {children}
    </main>
  );
};

export default PageContainer;
