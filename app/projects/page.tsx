import { Metadata } from "next";
import { projectsData as projects } from "@/projects/projects";
import ProjectCard from "../components/ProjectCard";
export const metadata: Metadata = {
  title: "Projects",
};
const Projects = () => {
  return (
    <main>
      <h1>Projects</h1>
      <p>Work in progress...come back later 😊</p>
      {/* <div className="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1  "> */}
      {/*   {projects.map((project) => ( */}
      {/*     <ProjectCard key={project.id} project={project} /> */}
      {/*   ))} */}
      {/* </div> */}
    </main>
  );
};

export default Projects;
