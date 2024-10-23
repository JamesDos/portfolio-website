import { motion } from "framer-motion";

export interface ProjectCardProps {
  description: string;
  tech: string[];
  githubLink: string;
  imageLinks: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-xl mb-4">{props.description}</h2>
        <ul className="flex space-x-2 mb-4">
          {props.tech.map((techItem, index) => (
            <li className="flex items-center space-x-1"key={index}>{techItem}</li>
          ))}
        </ul>
        <div className="flex gap-4 w-full justify-center">
          {props.imageLinks.map((imageLink, index) => (
            <img 
              key={index} 
              src={imageLink} 
              alt={`Project image ${index + 1}`} 
              className="project-image max-h-[60vh] mt-4 mb-4 rounded-lg transition-transform duration-300 transform hover:scale-105" 
            />
          ))}
        </div>
        <div className="flex justify-center w-full mt-2">
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1">
              Link
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}