"use client";

// Global Imports
import { useEffect, useState } from "react";

// Local Imports
import { BagSlider } from "@/components/bag/bag-slider";

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
      <BagSlider />
    </>
  );
};
