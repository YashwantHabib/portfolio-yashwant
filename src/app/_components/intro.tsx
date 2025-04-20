"use client";
import React, { useState } from "react";
import { intro } from "../_data/intro";

export default function Intro() {
  const [showIcon, setShowIcon] = useState(false);
  const [showStack, setShowStack] = useState(false); // ← New state for stack tooltip

  const handleIconToggle = () => setShowIcon((prev) => !prev);
  const handleStackToggle = () => setShowStack((prev) => !prev);
  return (
    <div className="py-20">
      <p className="text-lg text-stone-100">{intro.name}</p>
      <p className="text-xs text-stone-500">
        {intro.title} | {intro.location}
      </p>
      <p className="py-6 text-stone-100">
        {intro.taglineStart}{" "}
        <span
          className="relative group underline italic cursor-pointer"
          onClick={handleIconToggle}
        >
          vigilante
          <span
            className={`absolute -top-6 bg-black left-1/2 -translate-x-1/2 transition-opacity ${
              showIcon ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100`}
          >
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
        <span
          className="relative group underline italic cursor-pointer"
          onClick={handleStackToggle}
        >
          stack
          <span
            className={`absolute top-full   sm:translate-x-1/2 mt-2 grid ${
              showStack ? "opacity-100" : "opacity-0"
            } grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 max-w-[250px] sm:max-w-[400px] w-max border border-stone-700 rounded bg-stone-800 px-3 py-2 text-xs text-stone-100 shadow group-hover:opacity-100`}
          >
            {intro.stack.map((tech) => (
              <span key={tech} className="break-words whitespace-normal">
                {tech}
              </span>
            ))}
          </span>
        </span>
      </p>
    </div>
  );
}
