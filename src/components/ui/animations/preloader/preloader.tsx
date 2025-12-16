import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { slideUp } from "@/components/ui/animations/preloader/anim";
import { clsx } from "clsx";

export default function PreLoader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [percentage, setPercentage] = useState(1);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const duration = 2000; // 2 seconds to reach 100%
    const startTime = Date.now();
    const startValue = 0;
    const endValue = 100;

    const updatePercentage = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easeOutCubic for smoother, more linear progression
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(startValue + (endValue - startValue) * easedProgress);
      setPercentage(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updatePercentage);
      } else {
        setPercentage(100); // Ensure it ends at exactly 100
      }
    };

    requestAnimationFrame(updatePercentage);
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed z-30 flex h-screen w-screen items-center justify-center bg-white text-black"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={clsx("absolute z-50 flex items-center justify-center text-6xl md:text-8xl font-bold text-black")}
          >
            {percentage}%
          </motion.p>
          <svg className="absolute top-0 z-40 h-[calc(100%+300px)] w-full fill-[white]">
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
