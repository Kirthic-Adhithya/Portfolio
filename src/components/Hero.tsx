import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Kirthic Adhithya J
          </motion.h1>

          <motion.div
            className="relative inline-block mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              AI & Data Science Undergraduate | Software & Data Engineer | Builder of Intelligent Systems
            </h2>
            <motion.div
              className="absolute -inset-4 bg-accent/10 blur-xl -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-accent" />
      </motion.a>
    </section>
  );
};

export default Hero;
