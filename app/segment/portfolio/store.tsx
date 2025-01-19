import { create } from "zustand";


export const PortfolioStore = create<PortfolioState>((set) => ({
  multiple_link: [],
  set_multiple_links: (multiple_link) => set({ multiple_link }),
}));
