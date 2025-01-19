interface ProjectType {
  name: string;
  project_link: string;
  project_logo: string;
  description: string;
  long_description: string;
  technology: string[];
  platform: string[];
  status: string[];
  type: string;
  role: string[];
  source_code: LinkItem[]
  images_path: string;
  images_num_web: number;
  images_num_mobile?: number;
  demo_accounts?: { role: string; username: string; password: string }[];
  higlights: string[];
  isWebFirst: boolean;
}

interface LinkItem {
  Frontend?: string;
  Backend?: string;
  Mobile?: string;
  source_code?: string;
}

interface PortfolioState {
  multiple_link: LinkItem[];
  multiple_link_dialog: boolean;
  set_multiple_links: (multiple_link: LinkItem[]) => void;
  set_multiple_link_dialog: (multiple_link_dialog: boolean) => void;
}
