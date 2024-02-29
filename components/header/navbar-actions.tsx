"use client";

// Global Imports
import { RiShoppingBag2Line } from "react-icons/ri";
import { useState, useEffect } from "react";

// Local Imports
import { Button } from "../ui/button";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center">
      <Button
        size={"custom"}
        className="gap-2"
      >
        <RiShoppingBag2Line size={22} />
        <span className="text-lg">0</span>
      </Button>
    </div>
  );
};
