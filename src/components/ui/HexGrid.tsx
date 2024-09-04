"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Color {
  r: number;
  g: number;
  b: number;
}

const HexGridCore = ({ className, ...rest }: { className?: string; [key: string]: any }) => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [hoveredHex, setHoveredHex] = useState<[number, number] | null>(null);
  const [hoveredColor, setHoveredColor] = useState<Color | null>(null);

  const hoverColors = useMemo<Color[]>(() => [
    { r: 249, g: 115, b: 22 },  // Orange (close to orange-500)
    { r: 14, g: 165, b: 233 },  // Blue (close to sky-500)
    { r: 34, g: 197, b: 94 },   // Green (close to green-500)
    { r: 234, g: 179, b: 8 }    // Yellow (close to yellow-500)
  ], []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const hexSize = 30;
  const hexHeight = hexSize * 2;
  const hexWidth = Math.sqrt(3) * hexSize;
  const horizontalSpacing = hexWidth;
  const verticalSpacing = hexHeight * 3/4;

  const cols = Math.ceil(dimensions.width / horizontalSpacing) + 1;
  const rows = Math.ceil(dimensions.height / verticalSpacing) + 1;

  const getDistance = useCallback((i1: number, j1: number, i2: number, j2: number) => {
    const x1 = j1 * horizontalSpacing + (i1 % 2 === 0 ? 0 : horizontalSpacing / 2);
    const y1 = i1 * verticalSpacing;
    const x2 = j2 * horizontalSpacing + (i2 % 2 === 0 ? 0 : horizontalSpacing / 2);
    const y2 = i2 * verticalSpacing;
    
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }, [horizontalSpacing, verticalSpacing]);

  const getColor = useCallback((i: number, j: number) => {
    const baseColor: Color = { r: 10, g: 10, b: 10 }; // Slightly lighter than bg-slate-900

    if (!hoveredHex || !hoveredColor) return `rgb(${baseColor.r}, ${baseColor.g}, ${baseColor.b})`;

    const [hi, hj] = hoveredHex;
    
    if (i === hi && j === hj) {
      return `rgb(${hoveredColor.r}, ${hoveredColor.g}, ${hoveredColor.b})`;
    }

    const distance = getDistance(i, j, hi, hj);
    const maxDistance = 4 * hexSize; // Gradient effect range
    const t = Math.max(0, 1 - distance / maxDistance);

    const r = Math.round(baseColor.r + (hoveredColor.r - baseColor.r) * t);
    const g = Math.round(baseColor.g + (hoveredColor.g - baseColor.g) * t);
    const b = Math.round(baseColor.b + (hoveredColor.b - baseColor.b) * t);

    return `rgb(${r}, ${g}, ${b})`;
  }, [hoveredHex, hoveredColor, getDistance, hexSize]);

  const handleHexHover = useCallback((i: number, j: number) => {
    setHoveredHex([i, j]);
    setHoveredColor(hoverColors[Math.floor(Math.random() * hoverColors.length)]);
  }, [hoverColors]);

  return (
    <div
      className={cn(
        "w-full h-full overflow-hidden",
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
                onHoverStart={() => handleHexHover(i, j)}
                onHoverEnd={() => setHoveredHex(null)}
                className="hex"
                style={{
                  width: `${hexWidth}px`,
                  height: `${hexHeight}px`,
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  backgroundColor: getColor(i, j),
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

export const HexGrid = React.memo(HexGridCore);