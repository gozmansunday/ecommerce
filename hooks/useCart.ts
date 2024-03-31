// Global Imports
import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartState {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

export const useCart = create(
  persist<CartState>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);

      if (existingItem) {
        return toast.error("Item already in cart!");
      }

      set({ items: [...get().items, data] });
      toast.success("Item added to cart.");
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success("Item removed from the cart.");
    },
    removeAll: () => {
      set({ items: [] });
      toast.success("All items removed from the cart.")
    },
  }), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
  })
);