import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const name = "Abdelrahman";
  const audioRef = useRef(null);
  
  // Fade out audio function
  const fadeOutAudio = (audio) => {
    const fadeInterval = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume = Math.max(0, audio.volume - 0.05);
      } else {
        audio.volume = 0;
        audio.pause();
        clearInterval(fadeInterval);
      }
    }, 50);
  };

  // Play sound effect on mount
  useEffect(() => {
    audioRef.current = new Audio('/soundEffects/loadingsound.mp3');
    audioRef.current.volume = 0.7;
    
    const playSound = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log('Audio autoplay was prevented');
      }
    };
    setTimeout(() => {
      playSound();
    }, 3500);

    return () => {
      if (audioRef.current) {
        fadeOutAudio(audioRef.current);
      }
    };
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Morphing Square */}
      <motion.div
        className="relative z-10 w-20 h-20 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] mb-10"
        animate={{
          borderRadius: ['10%', '50%', '10%'],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          boxShadow: '0 0 60px rgba(59, 130, 246, 0.5)',
        }}
      />

      {/* Animated Name */}
      <div className="relative z-10 flex overflow-hidden mb-4">
        {name.split('').map((letter, i) => (
          <motion.span
            key={i}
            className="text-4xl md:text-5xl font-bold text-white"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          className="text-4xl md:text-5xl font-bold text-[#3b82f6]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          .
        </motion.span>
      </div>

      {/* Subtitle */}
      <motion.p
        className="relative z-10 text-[#a1a1aa] text-lg font-mono"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        Software Developer
      </motion.p>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 h-1.5 bg-white/10 rounded-full overflow-hidden"
        initial={{ opacity: 0, scaleX: 0.8 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
          onAnimationComplete={onLoadingComplete}
        />
      </motion.div>

      {/* Loading Percentage */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#a1a1aa] text-sm font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Counter />
      </motion.div>
    </motion.div>
  );
};

// Counter component for percentage
const Counter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2500;
    const steps = 500;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return <span>{count}%</span>;
};

export default Loader;