import React from "react";
import { intro } from "../_data/intro";

export default function Intro() {
  return (
    <div className="py-4">
      <p className="text-lg">{intro.name}</p>
      <p className="text-xs text-stone-500">
        {intro.title} | {intro.location}
      </p>
      <p className="py-6">
        {intro.taglineStart}{" "}
        <span className="relative group underline italic">
          {intro.taglineStrike}
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-700"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              <text
                x="6"
                y="17"
                fontSize="10"
                fontFamily="Arial"
                fill="currentColor"
              >
                DD
              </text>
            </svg>
          </span>
        </span>{" "}
        {intro.taglineEnd}{" "}
        <span className="relative group underline italic cursor-help text-white">
          stack
          <span className="absolute top-full mt-2 hidden group-hover:grid grid-cols-3 gap-4 border border-stone-700  translate-x-1/2 rounded bg-stone-800 px-3 py-2 text-xs text-stone-100 shadow">
            {intro.stack.map((tech) => (
              <span key={tech} className="whitespace-nowrap ">
                {tech}
              </span>
            ))}
          </span>
        </span>
      </p>
    </div>
  );
}
