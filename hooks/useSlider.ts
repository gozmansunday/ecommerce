import { create } from "zustand";

interface CartSliderState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data?: Product;
};

export const useCartSlider = create<CartSliderState>()((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));