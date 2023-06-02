import { Project } from "@/types/project";

export default function Example({ project }: { project: Project }) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow mr-6 flex flex-col mb-6 sm:mb-0">
      <div className="px-4 py-5 sm:px-6">
        <h3>{project.title}</h3>
      </div>
      <div className="px-4 py-5 sm:p-6 flex-1">
        {/* <Image */}
        {/*   src={coverImage} */}
        {/*   height={100} */}
        {/*   width={100} */}
        {/*   alt={`${title} cover image`} */}
        {/* /> */}
        <p>{project.description}</p>
      </div>
      <div className="px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  );
}
