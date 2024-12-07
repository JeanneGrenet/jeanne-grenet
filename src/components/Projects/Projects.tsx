import Project from "@/components/Projects/Project";
import collections from "@/content/collections";

const Projects = async () => {
  const projects = await collections.project.getAll();
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
};

export default Projects;
