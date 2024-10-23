import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { skillsDataFrontEnd, skillsDataBackEnd } from "@/utils/data/skills-data";

export const Skills = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
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
