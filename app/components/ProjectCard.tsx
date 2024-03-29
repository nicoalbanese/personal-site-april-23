import { Project } from "@/types/project";
import Link from "next/link";
import { VideoIcon, CodeIcon, FileIcon } from "@radix-ui/react-icons";

export default function Example({ project }: { project: Project }) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 dark:bg-slate-700 dark:divide-slate-600 shadow  flex flex-col ">
      <div className="px-2 py-3 sm:px-6">
        <h3>{project.title}</h3>
      </div>
      <div className="px-2 py-3 sm:p-6 flex-1">
        <p>{project.description}</p>
      </div>
      <div className="px-2 py-3 sm:px-6 flex items-center justify-around space-x-4">
        {project.links.loom ? (
          <Link href={project.links.loom} className="hover:opacity-50">
            <VideoIcon aria-label="demo" />
          </Link>
        ) : (
          <div />
        )}
        {project.links.github ? (
          <Link href={project.links.github} className="hover:opacity-50">
            <CodeIcon aria-label="github" />
          </Link>
        ) : (
          <div />
        )}
        {project.links.article ? (
          <Link href={project.links.article} className="hover:opacity-50">
            <FileIcon aria-label="article" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
