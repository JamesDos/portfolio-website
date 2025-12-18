import { experienceData } from "@/utils/data/experience-data";
// @ts-ignore - splitText.jsx doesn't have type definitions
import SplitText from "@/components/ui/general/splitText";

export const Experience = () => {
  return (
    <div id="experience" className="w-full bg-white dark:bg-neutral-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SplitText
          text="Experience"
          tag="h2"
          className="text-4xl md:text-5xl mb-4 font-bold text-black dark:text-white block"
          textAlign="left"
          splitType="lines"
          delay={0}
          duration={0.4}
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          mask="lines"
        />
        <div className="flex flex-col space-y-12">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 md:pl-8"
            >
              <div className="mb-4 flex flex-col">
                <SplitText
                  text={exp.company}
                  tag="h3"
                  className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 block"
                  textAlign="left"
                  splitType="lines"
                  delay={0}
                  duration={0.4}
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  mask="lines"
                />
                <SplitText
                  text={exp.role}
                  tag="h4"
                  className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mt-1 block"
                  textAlign="left"
                  splitType="lines"
                  delay={0}
                  duration={0.4}
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  mask="lines"
                />
                <SplitText
                  text={`${exp.location} | ${exp.startDate} – ${exp.endDate}`}
                  tag="p"
                  className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mt-1 block"
                  textAlign="left"
                  splitType="lines"
                  delay={0}
                  duration={0.4}
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  mask="lines"
                />
              </div>
              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((responsibility, respIdx) => (
                  <li
                    key={respIdx}
                    className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base"
                  >
                    <SplitText
                      text={responsibility}
                      tag="p"
                      className="inline"
                      textAlign="left"
                      splitType="lines"
                      delay={0}
                      duration={0.4}
                      from={{ opacity: 0, y: 20 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      mask="lines"
                    />
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
