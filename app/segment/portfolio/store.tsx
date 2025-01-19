import { create } from "zustand";
import { ProjectVal } from "@/app/segment/portfolio/values";

export const PortfolioStore = create<PortfolioState>((set) => ({
  multiple_link: [],
  multiple_link_dialog:false,
  project_dialog:false,
  selected_project:ProjectVal,

  set_multiple_links: (multiple_link) => set({ multiple_link }),
  set_multiple_link_dialog: (multiple_link_dialog) => set({ multiple_link_dialog }),
  set_project_dialog: (project_dialog) => set({ project_dialog }),
  set_selected_project: (selected_project) => set({ selected_project }),
}));
