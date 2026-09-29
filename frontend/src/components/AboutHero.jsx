import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Users } from 'lucide-react';
import bgVideo from '../assets/industry.mp4';

const EASE = [0.22, 1, 0.36, 1];

const TAGLINE = 'Three Decades of Engineering. Innovation. Trust.';

const PARAGRAPHS = [
  'Our journey began in 1992 with the establishment of RR Engineers & Consultants, a service-based engineering organization founded with a focus on technical expertise and customer service.',
  'In 1994, we took the next step in our journey with the establishment of Digital Weighing Systems Private Limited, dedicated to developing and delivering weighing solutions for industrial applications.',
  'What started with a team of just 8–10 employees has grown into an organization of 200+ employees, supported by decades of engineering experience, manufacturing capabilities and a growing portfolio of weighing and automation solutions.',
  'Today, Digital Weighing Systems offers comprehensive solutions across weighbridges, industrial weighing systems, load cells, checkweighers, in-motion weighing and industrial automation.',
];

const TRANSFORMATIONS = [
  { from: '8–10 employees', to: '200+' },
  { from: 'service expertise', to: 'indigenous engineering' },
  { from: 'our beginnings in 1992', to: 'a new generation of weighing technology' },
];

const group = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } },
};
const dropIn = {
  hidden: { y: -22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export default function AboutHero() {
  const reduce = useReducedMotion();
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduce) v.pause();
    else v.play().catch(() => {});
  }, [reduce]);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-primary-900 px-0 pb-12 pt-24 sm:pt-28">
      <div className="absolute inset-0" aria-hidden="true">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-[8px]"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-primary-900/30 to-primary-900/65" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(60% 60% at 20% 20%, rgba(70,120,190,0.2), transparent 70%)' }}
        />
      </div>

      <div className="container-x relative">
        <motion.div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/25 bg-gradient-to-br from-white/[0.16] to-white/[0.05] p-6 shadow-[0_24px_70px_rgba(3,13,26,0.5)] backdrop-blur-xl sm:p-8 lg:p-10"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.1 }}
        >
          <span
            className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
            aria-hidden="true"
          />

          <motion.div
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
            initial="hidden"
            animate="visible"
            variants={group}
          >
            {/* left: heading + highlights */}
            <div>
              <motion.p variants={dropIn} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Who we are
              </motion.p>

              <motion.h1 variants={dropIn} className="leading-[0.95] text-white">
                <span className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">About </span>
                <span
                  className="text-5xl italic text-white/80 sm:text-6xl lg:text-7xl"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  Us
                </span>
              </motion.h1>

              <motion.p variants={dropIn} className="mt-4 text-base font-medium leading-snug text-white/90 sm:text-lg">
                {TAGLINE}
              </motion.p>

              <motion.span variants={dropIn} className="mt-5 block h-1 w-14 rounded-full bg-accent" aria-hidden="true" />

              <motion.div variants={dropIn} className="mt-6 grid grid-cols-2 gap-3 lg:max-w-sm">
                <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <BadgeCheck size={18} className="mb-2 text-accent" />
                  <p className="font-heading text-base font-semibold text-white">ISO 9001:2015</p>
                  <p className="text-xs text-white/65">Certified company</p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <Users size={18} className="mb-2 text-accent" />
                  <p className="font-heading text-base font-semibold text-white">200+ Employees</p>
                  <p className="text-xs text-white/65">Since 1992</p>
                </div>
              </motion.div>
            </div>

            {/* right: content */}
            <div>
              <div className="space-y-4">
                {PARAGRAPHS.map((p, i) => (
                  <motion.p key={i} variants={dropIn} className="text-[0.92rem] leading-relaxed text-white/80">
                    {p}
                  </motion.p>
                ))}
              </div>

              <motion.div variants={dropIn} className="mt-6 flex flex-wrap gap-2.5 border-t border-white/15 pt-5">
                {TRANSFORMATIONS.map((t) => (
                  <span
                    key={t.from}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-medium text-white/85 sm:text-sm"
                  >
                    <span className="text-white/55">From {t.from}</span>
                    <ArrowRight size={13} className="text-accent" />
                    <span className="font-semibold text-white">{t.to}</span>
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}