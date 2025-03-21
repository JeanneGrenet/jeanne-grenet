import Project from "@/components/Projects/Project";
import collections from "@/content/collections";

const Projects = async () => {
  const projects = await collections.project.getAll();
  return (
    <section className="flex flex-col gap-4" id="projects">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-primary">My Projects</h2>
        <div className="h-px flex-1 bg-primary/30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project) => (
          <Project key={project.metadata.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
