import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { skillsDataFrontEnd, skillsDataBackEnd } from "@/utils/data/skills-data";

export const Skills = () => {
  return (
    <section>
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
