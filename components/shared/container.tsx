// Global Imports
import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div className={cn(
      "container",
      className
    )}>
      {children}
    </div>
  );
};
