import { InfiniteMovingCards } from "../../ui/animations/infinite-moving-cards";
import { skillsDataFrontEnd, skillsDataBackEnd } from "@/utils/data/skills-data";
import { Heading } from "../../ui/general/heading";

export const Skills = () => {
  return (
    <section className="py-8 flex flex-col center">
      <Heading title="Skills" textAlign="center" />
      <div>
        <InfiniteMovingCards items={skillsDataFrontEnd} direction="right" speed="slow" />
      </div>
      <div>
        <InfiniteMovingCards items={skillsDataBackEnd} direction="left" speed="slow" />
      </div>
    </section>
  );
};
