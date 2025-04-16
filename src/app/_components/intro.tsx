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
        <span className="relative group line-through">
          {intro.taglineStrike}
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xl">
            🕷️
          </span>
        </span>{" "}
        {intro.taglineEnd}
      </p>
    </div>
  );
}
