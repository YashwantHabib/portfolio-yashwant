import { experience } from "../_data/experience";

export default function Experience() {
  return (
    <div className="flex-1">
      <div className="text-stone-500 text-sm">Experience</div>
      <div>
        {experience.map((exp) => (
          <div key={exp.company} className="py-6">
            <div className="flex items-center gap-4">
              <span className="text-base text-stone-100 ">{exp.company}</span>
              <div className="flex-1 border-t border-stone-700" />
              <span className="text-sm text-stone-500 ">{exp.duration}</span>
            </div>
            <div className="py-2 text-sm text-stone-400 ">{exp.role}</div>
            <div className="text-sm text-stone-500">{exp.description} </div>
          </div>
        ))}
      </div>
      <div className="text-stone-500 text-sm">View all -{">"}</div>
    </div>
  );
}
