import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'C++', 'C'],
  },
  {
    title: 'Frameworks',
    skills: ['React.js', 'FastAPI', 'Node.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'VS Code', 'Jupyter', 'Vite'],
  },
  {
    title: 'Libraries',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV'],
  },
  {
    title: 'Technologies',
    skills: ['Kafka', 'Airflow', 'Spark', 'REST APIs', 'MySQL', 'MongoDB'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="relative glass-effect rounded-2xl p-8 hover-glow overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Glowing dot */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <motion.span 
                    className="w-3 h-3 bg-accent rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 0 0 hsl(var(--accent) / 0.7)',
                        '0 0 0 8px hsl(var(--accent) / 0)',
                        '0 0 0 0 hsl(var(--accent) / 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 glass-effect text-sm text-foreground font-medium rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all cursor-default"
                      whileHover={{ scale: 1.08, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
