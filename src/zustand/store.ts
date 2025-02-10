import { create } from "zustand";

interface BearStatePopulation {
  bears: number;
  increaseBearPopulation(): void;
  lowerBearPopulation(): void;
  resetBearPopulation(): void;
}

const useStore = create<BearStatePopulation>((set) => ({
  bears: 0,
  increaseBearPopulation: () => set((state) => ({ bears: state.bears + 1 })),
  lowerBearPopulation: () =>
    set((state) => ({
      bears: state.bears - 1,
    })),
  resetBearPopulation: () =>
    set(() => ({
      bears: 0,
    })),
}));

export default useStore;
