import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Large gradient orbs with more visible movement */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/40 via-accent/20 to-transparent blur-3xl"
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-accent/35 via-primary/10 to-transparent blur-3xl"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -80, 0],
          scale: [1, 1.3, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent/30 to-transparent blur-3xl"
        animate={{
          x: [-100, 100, -50, -100],
          y: [0, -80, 80, 0],
          scale: [1, 1.4, 1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Smaller floating orbs for depth */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/25 blur-2xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.5, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/15 via-accent/20 to-transparent blur-2xl"
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 80, -80, 0],
          scale: [1, 1.3, 1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated grid lines - more visible */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] opacity-30"
        animate={{
          backgroundPosition: ['0px 0px', '64px 64px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
    </div>
  );
};

export default AnimatedBackground;

