import { experience } from "../_data/experience";
import Link from "next/link";

export default function Experience() {
  return (
    <div>
      <div className="text-stone-500 text-xs">Experience</div>
      <div>
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
      <Link
        className="text-stone-500 block text-xs hover:text-stone-400"
        href="/Experience"
      >
        View all -{">"}
      </Link>
    </div>
  );
}
