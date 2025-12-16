import { Timeline } from "@/components/ui/timeline";
import { projectData } from "@/utils/data/projects-data";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  const data = projectData.map((item) => {
    return {
      title: item.title, 
      content: <ProjectCard {...item.content} key={item.title}/>
    };
  });

  return (
    <section>
      <Timeline data={data} />
    </section>
  );
};


