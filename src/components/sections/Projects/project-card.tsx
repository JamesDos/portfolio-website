import { motion } from "framer-motion";
import { getSkillIconSrc } from "@/utils/data/getIconSrc";
import { useEffect, useState } from "react";
// @ts-ignore - splitText.jsx doesn't have type definitions
import SplitText from "@/components/ui/general/splitText";
import PixelTransition from "@/components/ui/animations/pixelTransition";

export interface TechData {
  title: string;
  iconSrc: string;
}

export interface imageData {
  front: string;
  back: string;
}

export interface ProjectCardProps {
  description: string;
  tech: string[];
  githubLink: string;
  imageLinks: imageData[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  const [imageAspectRatios, setImageAspectRatios] = useState<{ [key: string]: boolean }>({});

  // Debug logging
  useEffect(() => {
    console.log("ProjectCard imageLinks:", props.imageLinks);
  }, [props.imageLinks]);

  useEffect(() => {
    // Preload images and determine aspect ratios
    const preloadImages = async () => {
      const ratios: { [key: string]: boolean } = {};

      await Promise.all(
        props.imageLinks.flatMap(imageData => [
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = imageData.front;
            img.onload = () => {
              ratios[imageData.front] = img.height > img.width; // Determine if the image is tall
              resolve();
            };
            img.onerror = () => {
              console.error(`Failed to load image: ${imageData.front}`);
              ratios[imageData.front] = false; // Default to landscape if image fails to load
              resolve();
            };
          }),
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = imageData.back;
            img.onload = () => {
              ratios[imageData.back] = img.height > img.width; // Determine if the image is tall
              resolve();
            };
            img.onerror = () => {
              console.error(`Failed to load image: ${imageData.back}`);
              ratios[imageData.back] = false; // Default to landscape if image fails to load
              resolve();
            };
          }),
        ])
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
        <SplitText
          text={props.description}
          tag="h2"
          className="text-xl mb-4 block"
          textAlign="left"
        />
        <ul className="flex flex-wrap justify-start mb-4 gap-4">
          {props.tech.map((techItem, index) => (
            <TechBadge key={index} tech={techItem} className="project-tech-badge" />
          ))}
        </ul>
        <div className={`flex flex-wrap gap-8 w-full justify-center`}>
          {props.imageLinks.map((imageData, index) => {
            const isTall = imageAspectRatios[imageData.front];
            return (
              <PixelTransition
                key={index}
                firstContent={
                  <img
                    src={imageData.front}
                    alt={`Project image ${index + 1} - front`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                }
                secondContent={
                  <img
                    src={imageData.back}
                    alt={`Project image ${index + 1} - back`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                }
                gridSize={15}
                pixelColor={["#FFFFFF"]}
                animationStepDuration={0.35}
                className={`${isTall ? "w-[200px] md:w-[250px]" : "w-full max-w-full"}
                  mt-4 mb-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                aspectRatio={isTall ? "177.78%" : "56.25%"}
              />
            );
          })}
        </div>
        <div className="flex justify-center w-full mt-2">
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <motion.button
              className="bg-blue-500 text-white py-2 px-4 rounded-md transition-colors duration-300"
              whileHover={{
                backgroundColor: "#FFFFFF",
                color: "#3b82f6",
                scale: 1.1,
                rotate: "-5deg",
              }}
              transition={{ duration: 0.125 }}
            >
              Link
            </motion.button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

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
      <img src={getSkillIconSrc(props.tech)} alt={props.tech} width={20} height={20} />
      <p>{props.tech}</p>
    </motion.div>
  );
};
