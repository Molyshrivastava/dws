import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const imgModules = import.meta.glob('../../assets/Rail-bg*.*', { eager: true, import: 'default' });
const IMAGES = Object.keys(imgModules).sort().map((k) => imgModules[k]);
const BG_SRC = IMAGES[0] ?? null;

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.25 };

const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export default function RailHero() {
  return (
    <section
      id="page-hero"
      className="relative isolate overflow-hidden bg-primary-900 pb-24 pt-36 sm:pb-28 sm:pt-44 lg:pb-32 lg:pt-52"
    >
      {BG_SRC && (
        <img
          src={BG_SRC}
          alt=""
          draggable="false"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          aria-hidden="true"
        />
      )}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-900/85 via-primary-900/70 to-primary-900"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent"
        >
          Product Division
        </motion.p>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="max-w-2xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Rail Weigh Bridges
        </motion.h1>

        <motion.nav
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          aria-label="Breadcrumb"
          className="mt-6 flex items-center gap-1.5 text-sm text-white/70"
        >
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="font-medium text-white">Rail Weigh Bridges</span>
        </motion.nav>
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 -z-10 h-12 w-full text-surface sm:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="currentColor" />
      </svg>
    </section>
  );
}