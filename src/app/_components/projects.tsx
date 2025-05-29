"use client";

import React, { useState } from "react";
import { projects } from "../_data/projects";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
export default function Projects() {
  type Project = (typeof projects)[number];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
            onClick={() => setSelectedProject(project)}
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
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-900 p-6 rounded-xl max-w-md w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                className="absolute top-3 right-3 text-stone-400 hover:text-stone-100 text-xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              <h2 className="text-sm text-stone-100 underline decoration-wavy decoration-stone-600  mb-1">
                {selectedProject.title}
              </h2>
              <p className="text-xs text-stone-500 mb-2">
                {selectedProject.year}
              </p>
              <p className="text-xs text-stone-500 mb-4">
                {selectedProject.longDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.GitLink && (
                  <Link
                    className="my-2 text-stone-300 block text-xs text-right italic underline hover:text-stone-200"
                    href={selectedProject.GitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </Link>
                )}
                {selectedProject.LiveLink && (
                  <Link
                    className="my-2 text-stone-300 block text-xs text-right italic underline hover:text-stone-200"
                    href={selectedProject.LiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-md mb-4 w-full max-h-60 object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
