"use client";

// Global Imports
import { ReactNode } from "react";
import { RiCloseFill } from "react-icons/ri";

// Local Imports
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils/cn";

interface Props {
  title?: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  headerClassName?: string;
};

export const Slider = ({
  title,
  description,
  isOpen,
  onClose,
  children,
  headerClassName
}: Props) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onChange}>
      <SheetContent className="flex flex-col overflow-auto">
        {(title || description) && (
          <SheetHeader className={cn("sticky top-0 z-50 border-b-2 border-black bg-inherit shadow p-6", headerClassName)}>
            {title && (
              <SheetTitle className="flex items-center justify-between text-2xl font-bold md:text-3xl">
                <span>{title}</span>
                <div onClick={onClose} role="button">
                  <RiCloseFill size={36} />
                </div>
              </SheetTitle>
            )}
            {description && (
              <SheetDescription>
                {description}
              </SheetDescription>
            )}
          </SheetHeader>
        )}

        {children}
      </SheetContent>
    </Sheet>
  );
};
