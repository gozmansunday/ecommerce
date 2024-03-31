"use client";

import { usePreviewModal } from "@/hooks/useModal";
import { GalleryCarousel } from "../gallery/gallery-carousel";
import { Modal } from "../modals/modal";

export const PreviewModal = () => {
  const previewModal = usePreviewModal();

  if (!previewModal.data) return null;

  return (
    <Modal
      isOpen={previewModal.isOpen}
      onClose={previewModal.onClose}
    >
      <div className="py-4 lg:px-2">
        <GalleryCarousel
          product={previewModal.data}
          type="modal"
        />
      </div>
    </Modal>
  );
};
