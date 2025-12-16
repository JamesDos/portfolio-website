import { motion } from "framer-motion";
import { getSkillIconSrc } from "@/utils/data/getIconSrc";
import { useEffect, useState } from "react";

export interface TechData {
  title: string;
  iconSrc: string;
}

export interface ProjectCardProps {
  description: string;
  tech: string[];
  githubLink: string;
  imageLinks: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {

  const [imageAspectRatios, setImageAspectRatios] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Preload images and determine aspect ratios
    const preloadImages = async () => {
      const ratios: { [key: string]: boolean } = {};

      await Promise.all(
        props.imageLinks.map((link) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.src = link;
            img.onload = () => {
              ratios[link] = img.height > img.width; // Determine if the image is tall
              resolve();
            };
          });
        })
      );

      setImageAspectRatios(ratios);
    };

    preloadImages();
  }, [props.imageLinks]);

  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-xl mb-4">{props.description}</h2>
        <ul className="flex flex-wrap justify-start mb-4 gap-4">
          {props.tech.map((techItem, index) => (
            <TechBadge key={index} tech={techItem} className="project-tech-badge"/>
          ))}
        </ul>
        <div className={`flex flex-wrap gap-8 w-full justify-center`}>
          {props.imageLinks.map((imageLink, index) => (
            <img 
              key={index} 
              src={imageLink} 
              alt={`Project image ${index + 1}`} 
              className={`${imageAspectRatios[imageLink] ? "max-w-[50vw] h-auto md:max-w-[15vw]" : "w-full max-w-full h-auto"} 
              mt-4 mb-4 rounded-lg transition-transform duration-300 transform hover:scale-105`} 
            />
          ))}
        </div>
        <div className="flex justify-center w-full mt-2">
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <motion.button 
              className="bg-blue-500 text-white py-2 px-4 rounded-md transition-colors duration-300"
              whileHover={{ backgroundColor: "#FFFFFF", color: "#3b82f6", scale: 1.1, rotate: "-5deg"}}
              transition={{ duration: 0.125 }}
            >
              Link
            </motion.button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

interface TechBadgeProps {
  tech: string;
  className?: string;
}

const TechBadge = (props: TechBadgeProps) => {
  return (
    <motion.div 
      className="flex items-center gap-2 cursor-default"
      whileHover={{ scale: 1.1, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <img src={getSkillIconSrc(props.tech)} alt={props.tech} width={20} height={20}/>
      <p>{props.tech}</p>
    </motion.div>
  )
}
