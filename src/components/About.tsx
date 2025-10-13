import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">About</h2>

          <motion.div
            className="bg-card border border-border rounded-2xl p-8 md:p-12 hover-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Undergraduate student at Shiv Nadar University in AI & Data Science, passionate about 
              software and data engineering, building scalable systems, and solving real-world problems.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Education
              </h3>
              <div className="space-y-2">
                <p className="text-lg font-medium">Shiv Nadar University, Chennai</p>
                <p className="text-muted-foreground">
                  B.Tech in Artificial Intelligence & Data Science
                </p>
                <p className="text-sm text-muted-foreground">2023 – 2027</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
