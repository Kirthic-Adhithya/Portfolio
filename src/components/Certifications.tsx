import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
  },
  {
    title: 'Affective Computing',
    issuer: 'NPTEL',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-card border border-border rounded-2xl p-8 hover-glow flex items-start gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
