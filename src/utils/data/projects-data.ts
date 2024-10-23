import { ProjectCardProps } from "@/components/Sections/Projects/project-card"
import DivvyAI from "/images/DivvyAI.png"
import JChess from "/images/JChess_Game.png"
import ScribeLogin from "/images/Scribe_login.png"
import ScribeFeed from "/images/Scribe_Feed.png"
import ScribeSearch from "/images/Scribe_Search.png"
import DiabetesPredictor from "/images/Diabetes_Predictor.png"


export const projectData : {title: string, content: ProjectCardProps}[] = [
  {
    title: "JChess",
    content: {
      description: "DivvyAI is an AI powered calendar web app that automates task division and scheduling for students.",
      tech: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      githubLink: "https://github.com/JamesDos/JChess",
      imageLinks: [JChess] 
    }
  },
  {
    title: "DivvyAI",
    content: {
      description: "DivvyAI is an AI powered calendar web app that automates task division and scheduling for students.",
      tech: ["React", "Next.js", "TypeScript", "Supabase", "Google Cloud", "OpenAI", "Pinata"],
      githubLink: "https://github.com/AndrewCheung360/DivvyAI",
      imageLinks: [DivvyAI ]
    }
  },
  {
    title: "Scribe",
    content: {
      description: "DivvyAI is an AI powered calendar web app that automates task division and scheduling for students.",
      tech: ["Python", "SQLite", "SQLAlchemy", "Docker", "Google Cloud", "Git"],
      githubLink: "https://github.com/AndrewCheung360/Scribe",
      imageLinks: [ScribeLogin, ScribeFeed, ScribeSearch]
    }
  },
  {
    title: "Diabetes Predictor",
    content: {
      description: "DivvyAI is an AI powered calendar web app that automates task division and scheduling for students.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      githubLink: "https://github.com/JamesDos/diabetes-predictor",
      imageLinks: [DiabetesPredictor]
    }
  },

  // {
  //   title: "Word Hunt",
  //   content: {

  //   }
  // }
]

