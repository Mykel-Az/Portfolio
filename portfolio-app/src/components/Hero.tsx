import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="text-center py-20 px-4">
      <motion.div 
        className="max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        {/* Welcome */}
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent"
          variants={item}
        >
          Welcome
        </motion.h1>

        {/* Name */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-2"
          variants={item}
        >
          <span className="text-gray-600">I'm</span> Michael Azeez-Adekanmbi
        </motion.h1>

        {/* Title */}
        <motion.h2 
          className="text-2xl md:text-3xl text-amber-600 font-medium mt-2"
          variants={item}
        >
          Full Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto"
          variants={item}
        >
          A software developer focused on building impactful applications that bring
          your imagination to reality.
        </motion.p>

        {/* Portfolio Tagline */}
        <motion.h2 
          className="text-3xl font-bold mt-10 text-purple-700"
          variants={item}
        >
          This is My Portfolio
        </motion.h2>
      </motion.div>
    </section>
  );
}

export default Hero;