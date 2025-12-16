import { experienceData } from "@/utils/data/experience-data";

export const Experience = () => {
  return (
    <div className="w-full bg-white dark:bg-neutral-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-4 font-bold text-black dark:text-white">
          Experience
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-12 max-w-2xl">
          My professional experience and roles in software development.
        </p>

        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 md:pl-8">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {exp.role}
                </h3>
                <h4 className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mt-1">
                  {exp.company}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mt-1">
                  {exp.location} | {exp.startDate} – {exp.endDate}
                </p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((responsibility, respIdx) => (
                  <li key={respIdx} className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
