import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { BearState, BearActions, BearStatePopulation } from "./types/storeTypes";



const useStore = create<BearStatePopulation>()(
  persist<BearState & BearActions>(  
    (set): BearState & BearActions => ({
      bears: 0,
      increaseBearPopulation: () => set((state) => ({ bears: state.bears + 1 })),
      lowerBearPopulation: () => set((state) => ({ bears: state.bears - 1})),
      resetBearPopulation: () => set(() => ({ bears: 0 })),
    }),
    {
      name: 'bear-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useStore;
