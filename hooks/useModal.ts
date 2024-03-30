import { create } from "zustand";

interface PreviewModalState {
  isOpen: boolean;
  onOpen: (data: Product) => void;
  onClose: () => void;
  data?: Product;
};

export const usePreviewModal = create<PreviewModalState>()((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data) => set(() => ({ data, isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));