import { create } from "zustand";


export const PortfolioStore = create<PortfolioState>((set) => ({
  multiple_link: [],
  multiple_link_dialog:false,
  set_multiple_links: (multiple_link) => set({ multiple_link }),
  set_multiple_link_dialog: (multiple_link_dialog) => set({ multiple_link_dialog }),
}));
