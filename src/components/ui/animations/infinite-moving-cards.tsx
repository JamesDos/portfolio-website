import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    icon: string;
    alt: string;
    skill: string;
    // quote: string;
    // name: string;
    // title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Duplicate items in React instead of DOM cloning
  const duplicatedItems = [...items, ...items];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller max-h-4xl max-w-8xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_30%,white_70%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((item, idx) => (
          <SkillsCard
            key={`${item.skill}-${idx}`}
            icon={item.icon}
            alt={item.alt}
            skill={item.skill}
          />
        ))}
      </ul>
    </div>
  );
};

interface SkillsCardProps {
  icon: string,
  alt: string
  skill: string
}

const SkillsCard = (props: SkillsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      animate={{ scale: isHovered ? 1.1 : 1 }}
      transition={{
        duration: 0.125,
        ease: "easeInOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
    <li
      className="size-40 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:size-40"
      key={props.skill}
      style={{
      boxShadow: "0 0 10px 2px rgba(0, 0, 255, 0.5)", // Blue lighting effect
      }}
    >
    <CardIcon
      icon={props.icon}
      alt={props.alt}
      skill={props.skill}
    />
    </li>
    </motion.div>
  )
}

interface CardIconProps {
  icon: string,
  alt: string
  skill: string
}

const CardIcon = (props: CardIconProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 size-full">
      <div className="size-10">
        <img 
          src={props.icon}
          alt={props.alt}
        />
      </div>
      <p className="text-center">{props.skill}</p>
    </div>
  )
}
