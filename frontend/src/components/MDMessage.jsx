import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const SPRING = { type: 'spring', stiffness: 120, damping: 14, mass: 0.7 };

// ---- Edit content here ----
const HEADING_LINES = ['A Message from our', 'Managing Director'];
const PARAGRAPHS = [
  'For over three decades, Digital Weighing Systems has stood for one principle above all others: precision you can depend on. Every weighbridge, every load cell, and every system we build carries the weight of that promise.',
  'As we continue to grow, our commitment remains the same — engineering excellence, honest service, and long-term partnerships with the industries that keep this country moving.',
];
const NAME = 'Rajesh Kumar';
const DESIGNATION = 'Managing Director';
// ----------------------------

// once: false -> replays every time the section re-enters view
const VIEWPORT = { once: false, amount: 0.3 };

const textGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.05 } },
};
const dropIn = {
  hidden: { y: -36, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ...SPRING } },
};

export default function MDMessage() {
  return (
    <section className="snap-section relative flex flex-col justify-center overflow-hidden bg-white px-0 pb-10 pt-24 sm:pt-28">
      {/* decorative watermark quote mark */}
      <Quote
        className="pointer-events-none absolute -left-6 top-4 h-32 w-32 text-primary-50 md:h-44 md:w-44"
        strokeWidth={1}
        aria-hidden="true"
      />
      {/* faint dot grid, industrial texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(#0A2E5C10 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ---------- Left: heading, text, signature ---------- */}
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={textGroup}>
          {/* eyebrow with a red underline that draws in */}
          <motion.div variants={dropIn} className="relative mb-1 inline-block">
            <span className="eyebrow relative z-10">Leadership</span>
            <motion.span
              className="absolute -bottom-0.5 left-0 h-[2px] bg-accent"
              variants={{ hidden: { width: '0%' }, visible: { width: '100%' } }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
            />
          </motion.div>

          <h2 className="text-3xl leading-[1.15] sm:text-4xl lg:text-[2.6rem]">
            {HEADING_LINES.map((line, i) => (
              <motion.span key={i} variants={dropIn} className="block">
                {line}
              </motion.span>
            ))}
          </h2>

          <div className="mt-5 space-y-4">
            {PARAGRAPHS.map((p, i) => (
              <motion.p
                key={i}
                variants={dropIn}
                className="max-w-xl text-[0.98rem] leading-relaxed text-steel-500"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Name + designation: slide in from the left, together */}
          <motion.div
            variants={{
              hidden: { x: -60, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { ...SPRING, delay: 0.1 } },
            }}
            className="mt-7 flex items-center gap-4"
          >
            <motion.span
              className="h-10 w-1 shrink-0 rounded-full bg-accent"
              variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 0.4, delay: 0.35 } } }}
              style={{ originY: 0 }}
            />
            <div>
              <p className="font-heading text-lg font-semibold text-primary">{NAME}</p>
              <p className="text-sm font-medium tracking-wide text-steel-500">{DESIGNATION}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------- Right: photo frame, rises from bottom ---------- */}
        <motion.div
          className="group relative mx-auto w-full max-w-sm lg:max-w-md"
          initial={{ y: 130, opacity: 0, scale: 0.92 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          {/* corner bracket accent, top-left */}
          <motion.span
            className="absolute -left-3 -top-3 z-10 h-10 w-10 border-l-4 border-t-4 border-accent sm:-left-4 sm:-top-4 sm:h-14 sm:w-14"
            initial={{ opacity: 0, x: -14, y: -14 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, ease: EASE, delay: 0.55 }}
            aria-hidden="true"
          />
          {/* corner bracket accent, bottom-right */}
          <motion.span
            className="absolute -bottom-3 -right-3 z-10 h-10 w-10 border-b-4 border-r-4 border-primary sm:-bottom-4 sm:-right-4 sm:h-14 sm:w-14"
            initial={{ opacity: 0, x: 14, y: 14 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, ease: EASE, delay: 0.6 }}
            aria-hidden="true"
          />

          {/* placeholder frame — replace this div's contents with a real <img> later */}
          <div className="relative flex aspect-[3/4] w-full max-h-[440px] items-center justify-center overflow-hidden rounded-lg border border-steel-100 bg-surface shadow-card transition-shadow duration-300 group-hover:shadow-card-hover">
            <div className="flex flex-col items-center gap-3 text-steel-300">
              <User size={48} strokeWidth={1.2} />
              <span className="text-sm font-medium tracking-wide">Photo coming soon</span>
            </div>
          </div>

          {/* quote badge: rotates + pops in after the frame lands */}
          <motion.span
            className="absolute -top-4 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-card sm:right-8"
            initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={VIEWPORT}
            transition={{ ...SPRING, delay: 0.5 }}
          >
            <Quote size={18} fill="currentColor" strokeWidth={0} />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}