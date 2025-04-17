import { projects } from "../_data/projects";
import Link from "next/link";
export default function Projects() {
  return (
    <div>
      <div className="text-stone-500 text-xs text-left sm:text-right">
        Projects
      </div>
      <div>
        {projects.slice(0, 2).map((project) => (
          <div
            key={project.title}
            className="p-2 my-4 rounded-lg cursor-pointer hover:bg-zinc-900"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm text-stone-100 underline decoration-wavy decoration-stone-600 hover:decoration-stone-400">
                {project.title}
              </span>
              <div className="flex-1 border-t border-stone-700" />
              <span className="text-xs text-stone-500 ">{project.year}</span>
            </div>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-block text-[8px] bg-stone-100 text-stone-800 px-2 py-1 my-2 mr-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            <p className="text-xs text-stone-500">{project.description}</p>
          </div>
        ))}
      </div>
      <Link
        className="text-stone-500 block text-xs text-left sm:text-right hover:text-stone-400"
        href="/Projects"
      >
        View all -{">"}
      </Link>
    </div>
  );
}
