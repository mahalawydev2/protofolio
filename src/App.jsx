import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Cursor from './components/Cursor';
import ClickSpark from './components/ClickSpark';
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
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

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
    {/* Cursor - highest z-index */}
    <Cursor />

    <AnimatePresence mode="wait">
      {isLoading && (
        <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
      )}
    </AnimatePresence>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0 : 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {!isLoading && (
        <ClickSpark
          sparkColor="#3b82f6"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={10}
          duration={500}
          easing="ease-out"
          extraScale={1.2}
        >
          <div className="bg-[#0a0a0a] min-h-screen">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </div>
        </ClickSpark>
      )}
    </motion.div>
  </>
);
}

export default App;