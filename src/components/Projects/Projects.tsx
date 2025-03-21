import Project from "@/components/Projects/Project";
import collections from "@/content/collections";

const Projects = async () => {
  const projects = await collections.project.getAll();
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-semibold text-2xl ">My projects</h2>
      <article className="flex gap-4">
        {projects.map((project) => (
          <Project key={project.metadata.slug} project={project} />
        ))}
      </article>
    </section>
  );
};

export default Projects;
