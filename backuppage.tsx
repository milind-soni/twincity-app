"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HexGridCoreProps = {
  className?: string; // className is optional and should be a string
  [key: string]: any; // Allow any other additional props
};

const useTypewriter = (words : string[], typingSpeed = 150, deletingSpeed = 100, pauseTime = 1000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const type = useCallback(() => {
    const currentWord = words[wordIndex];
    
    if (isWaiting) {
      setIsWaiting(false);
      setIsDeleting(true);
      return;
    }

    if (!isDeleting && text === currentWord) {
      setIsWaiting(true);
      setTimeout(() => setIsWaiting(false), pauseTime);
      return;
    }
    
    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }
    
    setText((prev) => {
      if (isDeleting) {
        return prev.slice(0, -1);
      } else {
        return currentWord.slice(0, prev.length + 1);
      }
    });

  }, [words, wordIndex, isDeleting, text, isWaiting, pauseTime]);

  useEffect(() => {
    const nextTypingDelay = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(type, nextTypingDelay);
    return () => clearTimeout(timer);
  }, [type, isDeleting, typingSpeed, deletingSpeed]);

  return text;
};

const HexGridCore: React.FC<HexGridCoreProps> = ({ className, ...rest })=> {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [hoveredHex, setHoveredHex] = useState<[number, number] | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const colors = [
    "rgb(186, 230, 253)", // sky-300
    "rgb(249, 168, 212)", // pink-300
    "rgb(134, 239, 172)", // green-300
    "rgb(253, 224, 71)",  // yellow-300
    "rgb(252, 165, 165)", // red-300
    "rgb(216, 180, 254)", // purple-300
    "rgb(147, 197, 253)", // blue-300
    "rgb(165, 180, 252)", // indigo-300
    "rgb(196, 181, 253)"  // violet-300
  ];
  
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const hexSize = 30;
  const hexHeight = hexSize * 2;
  const hexWidth = Math.sqrt(3) * hexSize;
  const horizontalSpacing = hexWidth;
  const verticalSpacing = hexHeight * 3/4;

  const cols = Math.ceil(dimensions.width / horizontalSpacing) + 1;
  const rows = Math.ceil(dimensions.height / verticalSpacing) + 1;

  const isNeighbor = (i: number, j: number): boolean => {
    if (!hoveredHex) return false;
    const [hi, hj] = hoveredHex as [number, number];
    const oddRow = hi % 2 !== 0;
    const evenRow = !oddRow;
    return (
      (i === hi && Math.abs(j - hj) === 1) ||
      (i === hi - 1 && (oddRow ? j === hj || j === hj + 1 : j === hj - 1 || j === hj)) ||
      (i === hi + 1 && (oddRow ? j === hj || j === hj + 1 : j === hj - 1 || j === hj))
    );
  };

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden bg-slate-900",
        className
      )}
      {...rest}
    >
      <div className="absolute" style={{ 
        left: `-${hexWidth}px`, 
        top: `-${hexHeight}px`, 
        width: `calc(100% + ${3 * hexWidth}px)`,
        height: `calc(100% + ${2 * hexHeight}px)`
      }}>
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={`row-${i}`}
            className="flex"
            style={{ 
              marginLeft: i % 2 !== 0 ? `${hexWidth / 2}px` : '0',
              marginTop: i !== 0 ? `${-hexSize / 2}px` : '0'
            }}
          >
            {Array.from({ length: cols }).map((_, j) => (
              <motion.div
                key={`hex-${i}-${j}`}
                onHoverStart={() => setHoveredHex([i, j])}
                onHoverEnd={() => setHoveredHex(null)}
                whileHover={{
                  backgroundColor: getRandomColor(),
                  transition: { duration: 0.2 },
                }}
                className="hex"
                style={{
                  width: `${hexWidth}px`,
                  height: `${hexHeight}px`,
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  backgroundColor: isNeighbor(i, j) 
                    ? "rgba(255, 255, 255, 0.2)" 
                    : "rgba(30, 41, 59, 0.3)",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const HexGrid = React.memo(HexGridCore);

function BackgroundHexagonsDemo() {
  const cities = ["California", "New York", "Boston", "Delhi"];
  const typedCity = useTypewriter(cities, 200, 100, 3000);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <HexGrid className="z-10" />
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="relative z-30 text-center">
        <h1 className={cn("md:text-4xl text-xl text-white")}>
          Find Similar Locations to <span className="text-sky-300">{typedCity}</span>
        </h1>
        <p className="mt-2 text-neutral-300">
          Based on multiple parameters!
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <BackgroundHexagonsDemo />
    </main>
  );
}