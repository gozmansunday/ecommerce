"use client";

// Global Imports
import { ReactNode } from "react";

// Local Imports
import { cn } from "@/lib/utils/cn";
import { Button } from "../ui/button";

interface Props {
  children: ReactNode;
  onClick: () => void;
  hiddenOnMobile?: boolean;
};

export const IconButton = ({
  children,
  onClick,
  hiddenOnMobile = false,
}: Props) => {
  return (
    <Button
      onClick={(x) => {}}
      size={"lgIcon"}
      className={cn(
        "rounded-full shadow bg-white text-black hover:bg-white/90",
        hiddenOnMobile && "hidden lg:inline-flex"
      )}
    >
      {children}
    </Button>
  );
};
