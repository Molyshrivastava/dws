import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const bgModules = import.meta.glob('../assets/contact-bg.*', { eager: true, import: 'default' });
const BG_SRC = Object.values(bgModules)[0] ?? null;
const EASE = [0.22, 1, 0.36, 1];

export default function ContactHero() {
  return (
    <section id="page-hero" className="relative flex h-[46vh] min-h-[300px] items-center justify-center overflow-hidden rounded-b-[2.5rem] bg-primary-900">
      {BG_SRC && (
        <img src={BG_SRC} alt="" draggable="false" className="absolute inset-0 h-full w-full scale-110 object-cover blur-[3px]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/75 via-primary-900/55 to-primary-900/85" />

      <motion.h1
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: EASE, delay: 0.3 }}
        className="relative px-4 text-center font-heading text-4xl font-bold text-white sm:text-5xl"
      >
        Contact
      </motion.h1>

      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
        className="absolute bottom-6 right-6 hidden items-center gap-2 text-sm text-white/75 sm:flex"
      >
        <Link to="/" className="transition-colors hover:text-white">Home</Link>
        <ChevronRight size={14} />
        <span className="font-medium text-white">Contact</span>
      </motion.nav>
    </section>
  );
}