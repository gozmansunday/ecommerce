"use client";

// Global Imports
import { useEffect, useState } from "react";
import { RiShoppingBag2Line } from "react-icons/ri";

// Local Imports
import { useBag } from "@/hooks/useBag";
import { useBagSlider } from "@/hooks/useSlider";
import { Button } from "../ui/button";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  const bag = useBag();
  const bagSlider = useBagSlider();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center">
      <Button
        onClick={() => bagSlider.onOpen()}
        size={"custom"}
        className="gap-2"
      >
        <RiShoppingBag2Line size={22} />
        <span className="text-lg">
          {bag.items.length}
        </span>
      </Button>
    </div>
  );
};
