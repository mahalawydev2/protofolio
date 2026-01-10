// components/ThemeToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-gradient-to-r from-[#215E61]/20 to-[#FE7F2D]/20 border border-[#215E61]/30 dark:border-[#F5FBE6]/20 p-1 transition-all duration-300 hover:shadow-lg hover:shadow-[#FE7F2D]/20"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Track Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <FaSun className="text-[#FE7F2D] text-sm" />
        <FaMoon className="text-[#215E61] dark:text-[#F5FBE6] text-sm" />
      </div>
      
      {/* Sliding Circle */}
      <motion.div
        className="relative w-6 h-6 rounded-full shadow-lg z-10"
        animate={{
          x: isDarkMode ? 32 : 0,
          backgroundColor: isDarkMode ? '#215E61' : '#FE7F2D',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-full bg-white/20" />
        
        {/* Icon inside circle */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white text-xs"
          animate={{ rotate: isDarkMode ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;