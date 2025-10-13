import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'SwiftTicket',
    subtitle: 'Bus & Train Booking Application',
    description: 'Developed a full-stack ticket booking system with authentication, search, and booking modules.',
    tools: ['React', 'HTML', 'CSS', 'MySQL', 'Python', 'Node.js'],
    github: 'https://github.com/Kirthic-Adhithya/SwiftTicket',
  },
  {
    title: 'Resumizer',
    subtitle: 'AI-Powered Resume Assistant',
    description: 'Built an intelligent career assistant that optimizes resumes using NLP and AI.',
    tools: ['Python', 'FastAPI', 'Groq API', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Kirthic-Adhithya/Outliers_1_Resumizer',
  },
  {
    title: 'Driver Profiling Analysis',
    subtitle: 'Formula 1 Telemetry',
    description: 'Analyzed F1 telemetry data to cluster drivers by performance patterns.',
    tools: ['FastF1', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/Kirthic-Adhithya/Driver_Profiling',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative glass-effect rounded-2xl p-8 hover-glow group overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating background shape */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-accent mb-4 font-medium">{project.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <motion.span
                      key={tool}
                      className="px-3 py-1 bg-accent/10 text-foreground font-medium text-xs rounded-full border border-accent/20 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent) / 0.2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group/btn bg-background/50 hover:bg-accent/10 hover:border-accent transition-all"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
