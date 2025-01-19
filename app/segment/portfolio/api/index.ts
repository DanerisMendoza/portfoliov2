import { useQuery } from "@tanstack/react-query";
import slidesData from '@/app/segment/portfolio/values/project_values.json';
export const getProjectPictures = () => {
    const projects: ProjectType[] = slidesData;
    console.log(projects[0].images_path)
};
