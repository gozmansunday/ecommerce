import { create } from "zustand";

interface BagSliderState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data?: Product;
};

export const useBagSlider = create<BagSliderState>()((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));