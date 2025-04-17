import { experience } from "../_data/experience";

export default function Experience() {
  return (
    <div className="flex-1 py-6 sm:py-0 sm:pr-3">
      <div className="text-stone-500 text-xs">Experience</div>
      <div>
        {experience.map((exp) => (
          <div key={exp.company} className="py-6 cursor-pointer ">
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
      <div className="text-stone-500 text-xs  cursor-pointer">
        View all -{">"}
      </div>
    </div>
  );
}
