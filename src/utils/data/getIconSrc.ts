// Langs
import python from "/skill-icons/Python.svg";
import javascript from "/skill-icons/JavaScript.svg";
import typescript from "/skill-icons/TypeScript.svg";
import java from "/skill-icons/Java.svg";
import cpp from "/skill-icons/CPlusPlus.svg";
import swift from "/skill-icons/Swift.svg";
// Frontend
import react from "/skill-icons/React.svg";
import tailwindcss from "/skill-icons/Tailwind.svg";
import html from "/skill-icons/HTML5.svg";
import css from "/skill-icons/CSS3.svg";
import threejs from "/skill-icons/ThreeJS.svg";
// Backend
import mongodb from "/skill-icons/MongoDB.svg";
import postgres from "/skill-icons/PostgreSQL.svg";
import nodejs from "/skill-icons/NodeJS.svg";
import express from "/skill-icons/Express.svg";
import flask from "/skill-icons/Flask.svg";
import sqlite from "/skill-icons/SQLite.svg";
import socketio from "/skill-icons/SocketIO.svg";
// Tools
import git from "/skill-icons/Git.svg";
// import github from "/skill-icons/GitHub.svg";
import docker from "/skill-icons/Docker.svg";
import aws from "/skill-icons/AWS.svg";
import gcp from "/skill-icons/GCP.svg";
// import postman from "/skill-icons/Postman.svg";
// Other
import supabase from "/skill-icons/supabase.svg";
import sqlalchemy from "/skill-icons/SQLAlchemy.svg";
import pandas from "/skill-icons/Pandas.svg";
import nextjs from "/skill-icons/NextJS.svg";
import matplotlib from "/skill-icons/Matplotlib.svg";
import scikitlearn from "/skill-icons/scikit-learn.svg";
import seaborn from "/skill-icons/seaborn.svg";
import openai from "/skill-icons/openai.svg";
import pinata from "/skill-icons/pinata.svg";

// Mapping of skill names to image sources
const skillIcons: { [key: string]: string } = {
  python,
  javascript,
  typescript,
  java,
  cpp,
  swift,
  react,
  tailwindcss,
  html,
  css,
  threejs,
  mongodb,
  postgres,
  nodejs,
  express,
  flask,
  sqlite,
  socketio,
  git,
  docker,
  aws,
  gcp,
  supabase,
  sqlalchemy,
  pandas,
  nextjs,
  matplotlib,
  scikitlearn,
  seaborn,
  openai,
  pinata,
};

// Function to get the image source for a given skill
export const getSkillIconSrc = (skill: string): string | undefined => {
  if (skill === "Google Cloud") {
    return skillIcons.gcp;
  } else if (skill === "Node.js") {
    return skillIcons.nodejs;
  } else if (skill === "Next.js") {
    return skillIcons.nextjs;
  } else if (skill === "Scikit-learn") {
    return skillIcons.scikitlearn;
  } else if (skill === "Seaborn") {
    return skillIcons.seaborn;
  }
  return skillIcons[skill.toLowerCase()];
};