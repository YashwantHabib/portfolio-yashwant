import { experience } from "../_data/experience";
import BackButton from "../_components/BackButton";
import SwipeWrapper from "../_components/SwipeWrapper";

export default function Exp() {
  return (
    <SwipeWrapper>
      <div className="flex-1 py-10 relative">
        <BackButton />
        <p className="text-lg text-stone-100">Experience</p>
        <p className="text-xs text-stone-500">
          A collection of work I&apos;ve done.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="p-2 my-4 rounded-lg cursor-pointer hover:bg-zinc-900"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm text-stone-100 underline decoration-wavy decoration-stone-600 hover:decoration-stone-400">
                  {exp.company}
                </span>
                <div className="flex-1 border-t border-stone-700" />
                <span className="text-xs text-stone-500 ">{exp.duration}</span>
              </div>
              <p className="py-2 text-xs text-stone-400 ">{exp.role}</p>
              <p className="text-xs text-stone-500">{exp.description} </p>
            </div>
          ))}
        </div>
      </div>
    </SwipeWrapper>
  );
}
