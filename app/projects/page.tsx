import { Metadata } from "next";
import { projectsData as projects } from "@/projects/projects";
import ProjectCard from "../components/ProjectCard";
export const metadata: Metadata = {
  title: "Projects",
};
const Projects = () => {
  return (
    <main className="max-w-5xl ">
      <h1>Projects</h1>
      <p className="my-4">
        A few projects that {"I've"} built during my free time to solve various
        problems {"I've"} encountered.
      </p>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
