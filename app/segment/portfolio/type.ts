type ProjectType = {
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
    source_code: { [key: string]: string }[];
    images_path: string;
    images_num_web: number;
    images_num_mobile?: number;
    demo_accounts?: { role: string; username: string; password: string }[];
    higlights: string[];
    isWebFirst: boolean;
};
