import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    // Small delay after progress bar completes
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <motion.div
        className="bg-[#0a0a0a] min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {!isLoading && (
          <>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </>
        )}
      </motion.div>
    </>
  );
}

export default App;