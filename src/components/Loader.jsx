import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const audioRef = useRef(null);
  
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



  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute w-48 h-48 bg-[#FE7F2D]/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Morphing Square */}
      <motion.div
        className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#FE7F2D] to-[#FF9F5A]"
        animate={{
          borderRadius: ['10%', '50%', '10%'],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          boxShadow: '0 0 40px rgba(254, 127, 45, 0.4)',
        }}
      />

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-20 w-48 h-1 bg-white/10 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#FE7F2D] to-[#FF9F5A] rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          onAnimationComplete={onLoadingComplete}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;