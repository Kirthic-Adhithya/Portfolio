import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const contactLinks = [
  {
    name: 'Email',
    value: 'kirthicadhithyaj@gmail.com',
    href: 'mailto:kirthicadhithyaj@gmail.com',
    icon: Mail,
  },
  {
    name: 'GitHub',
    value: 'github.com/Kirthic-Adhithya',
    href: 'https://github.com/Kirthic-Adhithya',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/kirthicadhithyaj',
    href: 'https://linkedin.com/in/kirthicadhithyaj',
    icon: Linkedin,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-card border border-border rounded-2xl p-8 md:p-12 hover-glow"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-xl text-center text-muted-foreground mb-12">
              Feel free to reach out for collaborations, opportunities, or just a chat!
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-auto flex flex-col items-center gap-4 p-6 group/contact"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover/contact:bg-accent/20 transition-colors">
                        <link.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold mb-1">{link.name}</p>
                        <p className="text-xs text-muted-foreground break-all">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
