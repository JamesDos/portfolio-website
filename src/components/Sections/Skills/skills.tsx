import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { skillsDataFrontEnd, skillsDataBackEnd } from "@/utils/data/skills-data";
import { Heading } from "../../ui/heading";

export const Skills = () => {
  return (
    <section className="py-8">
      <Heading title="Skills"/>
      <div>
        <InfiniteMovingCards 
          items={skillsDataFrontEnd} 
          direction="right" 
          speed="slow"
        />
      </div>
      <div>
        <InfiniteMovingCards 
          items={skillsDataBackEnd} 
          direction="left" 
          speed="slow"
        />
      </div>
    </section>
  )
}
