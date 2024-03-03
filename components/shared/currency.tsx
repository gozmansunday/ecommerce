"use client";

import { moneyFormatter } from "@/lib/utils/money";
// Global Imports
import { useEffect, useState } from "react";

interface Props {
  price: string | number;
};

export const Currency = ({ price }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-bold text-xl md:text-2xl">
      {moneyFormatter.format(Number(price))}
    </div>
  );
};
