"use client";

// External Imports
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { toast } from "sonner";

// Local Imports
import { useBag } from "@/hooks/useBag";

interface Props {
  children: ReactNode;
};

export const CheckPaymentProvider = ({ children }: Props) => {
  const searchParams = useSearchParams();
  const { removeAll } = useBag();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment complete.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Purchase canceled!");
    }
  }, [searchParams, removeAll]);

  return (
    <>
      {children}
    </>
  );
};
