import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.1 };

const STEPS = [
  { label: '1992', desc: 'RR Engineers & Consultants founded' },
  { label: '1994', desc: 'Digital Weighing Systems Private Limited established' },
  { label: '8–10 Employees', desc: 'Where our journey began' },
  { label: 'Indigenous Innovation', desc: 'Development of our indigenous in-motion weighing design' },
  { label: '2025', desc: 'U-Beam plant expansion' },
  { label: '200+ Employees', desc: 'Where we are today' },
  { label: '2026 & Beyond', desc: 'Building the next generation of weighing & automation solutions' },
];

const STATEMENTS = [
  'From weighing to intelligent weighing.',
  'From engineering to innovation.',
  'From 8–10 people to 200+.',
  'From 1992 to the future.',
];

const dropIn = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
};
const group = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function JourneyRecap() {
  return (
    <section className="relative overflow-hidden bg-surface py-14 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{ backgroundImage: 'radial-gradient(#0A2E5C12 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* ---------- vertical recap chain ---------- */}
        <motion.div className="mb-6 text-center sm:mb-8" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={group}>
          <motion.span variants={dropIn} className="eyebrow">Milestones</motion.span>
          <motion.h2 variants={dropIn} className="text-3xl leading-tight sm:text-4xl">
            <span className="font-bold text-primary">The Journey </span>
            <span className="italic text-steel-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              continues
            </span>
          </motion.h2>
        </motion.div>

        <motion.div className="mx-auto max-w-xl" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={group}>
          {STEPS.map((s, i) => (
            <motion.div key={s.label} variants={dropIn} className="relative flex gap-4 pb-7 last:pb-0">
              {i < STEPS.length - 1 && (
                <span className="absolute left-[9px] top-6 h-[calc(100%-0.5rem)] w-px bg-steel-100" aria-hidden="true" />
              )}
              <span className="relative z-10 mt-1 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <div className="pb-1">
                <p className="font-heading text-base font-bold text-primary sm:text-lg">{s.label}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-steel-500">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- closing statements ---------- */}
        <motion.div className="mx-auto mt-14 max-w-2xl text-center sm:mt-16" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={group}>
          {STATEMENTS.map((line, i) => (
            <motion.p
              key={line}
              variants={dropIn}
              className={
                i % 2 === 0
                  ? 'mb-1 text-2xl font-bold leading-snug text-primary sm:text-3xl'
                  : 'mb-4 text-2xl italic leading-snug text-steel-400 sm:text-3xl'
              }
              style={i % 2 !== 0 ? { fontFamily: "'Instrument Serif', Georgia, serif" } : undefined}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* ---------- closing brand statement ---------- */}
        <motion.div
          className="mx-auto mt-14 max-w-xl border-t-2 border-accent pt-8 text-center sm:mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="font-heading text-xl font-bold text-primary sm:text-2xl">
            Digital Weighing Systems Private Limited
          </p>
          <p className="mt-2 text-lg italic text-accent sm:text-xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Complete Weighing Solutions Under One Roof.
          </p>
        </motion.div>
      </div>
    </section>
  );
}