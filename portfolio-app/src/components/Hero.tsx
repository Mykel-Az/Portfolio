import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 800);   // Welcome shows
    const timer2 = setTimeout(() => setAnimationStage(2), 2200);  // Portfolio shows
    const timer3 = setTimeout(() => setAnimationStage(4), 4000);  // All fade out, major lines show
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut" as const
      }
    },
    exit: { 
      opacity: 0, 
      y: -15,
      transition: {
        duration: 0.6,
        ease: "easeIn" as const
      }
    }
  };

  const majorLinesVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section className="py-20 min-h-[40vh] flex items-center">
      <div className="max-w-4xl relative w-full px-4">
        
        {/* Animated Secondary Content*/}
        <AnimatePresence mode="wait">
          {animationStage < 4 && (
            <motion.div
              key="secondary-content"
              className="flex flex-col items-center text-center"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={container}
            >
              {/* Welcome */}
              {animationStage >= 1 && (
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent"
                  variants={item}
                >
                  Welcome
                </motion.h1>
              )}

              {/* Portfolio title */}
              {animationStage >= 2 && (
                <motion.h2 
                  className="text-3xl font-bold text-purple-700 mb-6"
                  variants={item}
                >
                  to My Portfolio
                </motion.h2>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Major Lines */}
        <motion.div 
          className="text-center md:text-left"
          variants={majorLinesVariants}
          initial="hidden"
          animate={animationStage >= 4 ? "show" : "hidden"}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-600">Hi, I'm</span> Michael Azeez-Adekanmbi
          </h1>
          <h2 className="text-3xl md:text-4xl text-amber-600 font-medium mt-2">
            Software Engineer
          </h2>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;