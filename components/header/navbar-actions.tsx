"use client";

// Global Imports
import { useEffect, useState } from "react";
import { RiShoppingBag2Line } from "react-icons/ri";

// Local Imports
import { useCart } from "@/hooks/useCart";
import { useCartSlider } from "@/hooks/useSlider";
import { Button } from "../ui/button";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();
  const cartSlider = useCartSlider();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center">
      <Button
        onClick={() => cartSlider.onOpen()}
        size={"custom"}
        className="gap-2"
      >
        <RiShoppingBag2Line size={22} />
        <span className="text-lg">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};
