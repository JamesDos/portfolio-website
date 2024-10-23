import { ProjectCardProps } from "@/components/Sections/Projects/project-card"
import DivvyAI from "/images/DivvyAI.png"
import JChess from "/images/JChess_Game.png"
import Scribe from "/images/Scribe_login.png"
import DiabetesPredictor from "/images/Diabetes_Predictor.png"

export const projectData : {title: string, content: ProjectCardProps}[] = [
  {
    title: "JChess",
    content: {
      description: "DivvyAI is an AI powered calendar web app that automates task division and scheduling for students.",
      tech: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      githubLink: "https://github.com/JamesDos/JChess",
      imageLink: JChess 
    }
  },
  {
    title: "DivvyAI",
    content: {
      description: "DivvyAI is an AI powered calendar web app that automates task division and scheduling for students.",
      tech: ["React", "Next.js", "TypeScript", "Supabase", "Google Cloud", "OpenAI", "Pinata"],
      githubLink: "https://github.com/AndrewCheung360/DivvyAI",
      imageLink: DivvyAI 
    }
  },
  {
    title: "Scribe",
    content: {
      description: "DivvyAI is an AI powered calendar web app that automates task division and scheduling for students.",
      tech: ["Python", "SQLite", "SQLAlchemy", "Docker", "Google Cloud", "Git"],
      githubLink: "https://github.com/AndrewCheung360/Scribe",
      imageLink: Scribe
    }
  },
  {
    title: "Diabetes Predictor",
    content: {
      description: "DivvyAI is an AI powered calendar web app that automates task division and scheduling for students.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      githubLink: "https://github.com/JamesDos/diabetes-predictor",
      imageLink: DiabetesPredictor
    }
  },

  // {
  //   title: "Word Hunt",
  //   content: {

  //   }
  // }
]

