import React from "react";
import { intro } from "../_data/intro";

export default function Intro() {
  return (
    <div className="py-4">
      <p className="text-lg">{intro.name}</p>
      <p className="text-xs text-stone-500">
        {intro.title} | {intro.location}
      </p>
      <p className="py-6">{intro.tagline}</p>
    </div>
  );
}
