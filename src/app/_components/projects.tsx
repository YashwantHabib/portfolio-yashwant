import { projects } from "../_data/projects";

export default function Projects() {
  return (
    <div className="flex-1 py-6 sm:py-0 sm:pl-3">
      <div className="text-stone-500 text-sm text-left sm:text-right">
        Projects
      </div>
      <div>
        {projects.map((project) => (
          <div key={project.title} className="py-6">
            <div className="flex items-center gap-4">
              <span className="text-base text-stone-100 ">{project.title}</span>
              <div className="flex-1 border-t border-stone-700" />
              <span className="text-sm text-stone-500 ">{project.year}</span>
            </div>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-block text-[10px] bg-stone-100 text-stone-800 px-2 py-1 my-2 mr-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            <p className="text-sm text-stone-500">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="text-stone-500 text-sm text-left sm:text-right">
        View all -{">"}
      </div>
    </div>
  );
}
