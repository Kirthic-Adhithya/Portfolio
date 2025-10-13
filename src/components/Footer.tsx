import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 relative border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Kirthic Adhithya J. All rights reserved.
          </p>
          
          <motion.p
            className="text-xs text-muted-foreground/40 text-center italic max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
          >
            "Jack of all trades, master of none, but oftentimes better than master of one."
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
