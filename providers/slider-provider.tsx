"use client";

// Global Imports
import { useEffect, useState } from "react";

// Local Imports
import { CartSlider } from "@/components/cart/cart-slider";

export const SliderProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CartSlider />
    </>
  );
};
