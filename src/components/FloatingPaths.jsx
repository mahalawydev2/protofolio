// components/FloatingPaths.jsx - Updated with new colors
import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const FloatingPaths = ({ position }) => {
  const prefersReducedMotion = useReducedMotion();
  
  const paths = useMemo(() => Array.from({ length: 16 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    strokeWidth: 0.5 + i * 0.03,
  })), [position]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="url(#pathGradient)"
            strokeWidth={path.strokeWidth}
            strokeOpacity={0.1 + path.id * 0.015}
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={prefersReducedMotion ? {} : {
              pathLength: 1,
              opacity: [0.4, 0.9, 0.4],
              pathOffset: [0, 1],
            }}
            transition={prefersReducedMotion ? {} : {
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
         <stop offset="0%" stopColor="#FE7F2D" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#4de1e9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#233D4D" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default React.memo(FloatingPaths);