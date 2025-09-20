"use client";

import { Github, Linkedin, Mail, FileUser } from "lucide-react";

export default function Socials() {
  return (
    <div className="py-4">
      <div className="flex flex-row justify-center gap-4">
        <a
          href="https://drive.google.com/file/d/1LGCGz2HF5g3MIUosCJJ3uF7bi-Fjyhe6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="bg-white rounded-full p-2"
        >
          <FileUser className="w-4 h-4 text-black hover:opacity-70 transition" />
        </a>
        <a
          href="https://github.com/YashwantHabib"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="bg-white rounded-full p-2"
        >
          <Github className="w-4 h-4 text-black hover:opacity-70 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/yashwant-habib"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="bg-white rounded-full p-2"
        >
          <Linkedin className="w-4 h-4 text-black hover:opacity-70 transition" />
        </a>
        <a
          href="mailto:yashwanthabib567@gmail.com"
          aria-label="Email"
          className="bg-white rounded-full p-2"
        >
          <Mail className="w-4 h-4 text-black hover:opacity-70 transition" />
        </a>
      </div>
    </div>
  );
}
