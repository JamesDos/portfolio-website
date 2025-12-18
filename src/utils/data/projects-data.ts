import { ProjectCardProps } from "@/components/sections/Projects/project-card";
import DivvyAI from "/project-screenshots/DivvyAI/DivvyAI.png";
import DivvyHome from "/project-screenshots/DivvyAI/DivvyHome.png";
import JChessGame from "/project-screenshots/JChess/Game.png";
import JChessLobby from "/project-screenshots/JChess/Home-Select-Game.png";
import ScribeLogin from "/project-screenshots/Scribe/Scribe_login.png";
import ScribeFeed from "/project-screenshots/Scribe/Scribe_Feed.png";
import ScribeSearch from "/project-screenshots/Scribe/Scribe_Search.png";
import ZoodiniHome from "/project-screenshots/Zoodini/Zoodini_Home.png";
import ZoodiniGameplay from "/project-screenshots/Zoodini/Zoodini_Gameplay.png";

export const projectData: { title: string; content: ProjectCardProps }[] = [
  {
    title: "JChess",
    content: {
      description:
        "JChess is a full-stack multiplayer chess website that allows users to play real-time games, send chat messages, analyze past games, and add/challenge friends",
      tech: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      githubLink: "https://github.com/JamesDos/JChess",
      imageLinks: [{ front: JChessGame, back: JChessLobby }],
    },
  },
  {
    title: "DivvyAI",
    content: {
      description:
        "DivvyAI is an AI powered calendar web app that automates task division and scheduling for students",
      tech: ["React", "Next.js", "TypeScript", "Supabase", "Google Cloud", "OpenAI", "Pinata"],
      githubLink: "https://github.com/AndrewCheung360/DivvyAI",
      imageLinks: [{ front: DivvyAI, back: DivvyHome }],
    },
  },
  {
    title: "Zoodini",
    content: {
      description:
        "Zoodini is a stealth strategy co-op game where players help Gar the Cat and Otto the Octopus \
        free animals from captivity while avoiding capture by guards",
      tech: ["Java", "LibGDX", "Gradle", "Git"],
      githubLink: "https://github.com/SebastianJeanF/Zoodini",
      imageLinks: [{ front: ZoodiniHome, back: ZoodiniGameplay }],
    },
  },
  {
    title: "Scribe",
    content: {
      description:
        "Scribe is a note-sharing Android app tailored for Cornell students, allowing users to publicly share class notes with others",
      tech: ["Python", "SQLite", "SQLAlchemy", "Docker", "Google Cloud", "Git"],
      githubLink: "https://github.com/AndrewCheung360/Scribe",
      imageLinks: [
        { front: ScribeLogin, back: ScribeFeed },
        { front: ScribeFeed, back: ScribeSearch },
      ],
    },
  },
  // {
  //   title: "Diabetes Predictor",
  //   content: {
  //     description:
  //       "In this project, I trained various different machine learning models to predict the presence of diabetes in patients.",
  //     tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
  //     githubLink: "https://github.com/JamesDos/diabetes-predictor",
  //     imageLinks: [{ front: DiabetesPredictor, back: DiabetesPredictor }],
  //   },
  // },
];
