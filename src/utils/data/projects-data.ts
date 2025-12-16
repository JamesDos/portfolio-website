import { ProjectCardProps } from "@/components/sections/Projects/project-card";
import DivvyAI from "/images/DivvyAI.png";
import JChess from "/images/JChess_Game.png";
import ScribeLogin from "/images/Scribe_login.png";
import ScribeFeed from "/images/Scribe_Feed.png";
import ScribeSearch from "/images/Scribe_Search.png";
import DiabetesPredictor from "/images/Diabetes_Predictor.png";

export const projectData: { title: string; content: ProjectCardProps }[] = [
  {
    title: "JChess",
    content: {
      description:
        "JChess is a full-stack multiplayer chess website that allows users to play real-time games, send chat messages, analyze past games, and add/challenge friends.",
      tech: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      githubLink: "https://github.com/JamesDos/JChess",
      imageLinks: [JChess],
    },
  },
  {
    title: "DivvyAI",
    content: {
      description:
        "DivvyAI is an AI powered calendar web app that automates task division and scheduling for students.",
      tech: ["React", "Next.js", "TypeScript", "Supabase", "Google Cloud", "OpenAI", "Pinata"],
      githubLink: "https://github.com/AndrewCheung360/DivvyAI",
      imageLinks: [DivvyAI],
    },
  },
  {
    title: "Scribe",
    content: {
      description:
        "Scribe is a note-sharing Android app tailored for Cornell students, allowing users to publicly share class notes with others",
      tech: ["Python", "SQLite", "SQLAlchemy", "Docker", "Google Cloud", "Git"],
      githubLink: "https://github.com/AndrewCheung360/Scribe",
      imageLinks: [ScribeLogin, ScribeFeed, ScribeSearch],
    },
  },
  {
    title: "Diabetes Predictor",
    content: {
      description:
        "In this project, I trained various different machine learning models to predict the presence of diabetes in patients.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      githubLink: "https://github.com/JamesDos/diabetes-predictor",
      imageLinks: [DiabetesPredictor],
    },
  },

  // {
  //   title: "Word Hunt",
  //   content: {

  //   }
  // }
];
