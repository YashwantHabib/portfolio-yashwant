import React from "react";
import { projects } from "../_data/projects";

export default function ProjectsPage() {
  return (
    <div className="flex-1 py-20 ">
      <p className="text-lg text-stone-100">Projects</p>
      <p className="text-xs text-stone-500">
        A collection of projects I've worked on.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  mt-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-2 rounded-lg cursor-pointer hover:bg-zinc-900"
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm text-stone-100 underline decoration-wavy decoration-stone-600 hover:decoration-stone-400">
                {project.title}
              </span>
              <div className="flex-1 border-t border-stone-700" />
              <span className="text-xs text-stone-500">{project.year}</span>
            </div>
            <div className="mb-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-block text-[10px] bg-stone-100 text-stone-800 px-2 py-[2px] mb-1 mr-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-stone-500">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
