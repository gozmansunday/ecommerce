"use client";

// Global Imports
import { useEffect, useState } from "react";

// Local Imports
import { PreviewModal } from "@/components/modals/preview-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
};
