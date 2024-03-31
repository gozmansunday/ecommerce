// Global Imports
import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BagState {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

export const useBag = create(
  persist<BagState>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);

      if (existingItem) {
        return toast.error("Item already in bag!");
      }

      set({ items: [...get().items, data] });
      toast.success("Item added to bag.");
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success("Item removed from the bag.");
    },
    removeAll: () => {
      set({ items: [] });
      toast.success("All items removed from the bag.")
    },
  }), {
    name: "bag-storage",
    storage: createJSONStorage(() => localStorage),
  })
);