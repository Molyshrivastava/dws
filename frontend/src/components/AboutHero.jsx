import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Users } from 'lucide-react';
import bgVideo from '../assets/industry.mp4';

const EASE = [0.22, 1, 0.36, 1];

const TAGLINE = 'Three Decades of Engineering. Innovation. Trust.';

const PARAGRAPHS = [
  'Digital Weighing Systems (P) Ltd is an ISO 9001:2015 certified manufacturer, supplier and service provider of industrial weighing systems. Our works and head office are at Tifra Industrial Area, Bilaspur, Chhattisgarh, with an R&D and regional office in Chennai.',
  "Since 1994 we have built our business on one principle from our founders: make quality products, stay customer-centric, and create real value in every customer's operation.",
  'DWS was founded by the joint effort of its two directors with a clear goal — build rugged, simple and highly accurate weighing systems in India. That goal led to one of our proudest milestones: developing an indigenous in-motion railway weighbridge without any foreign technical collaboration.',
  'Today our range covers everything from 200-ton road weighbridges and RDSO-approved rail weighbridges to on-board, belt, tank and steel plant weighing. Our systems serve the smallest independent businesses and the largest public sector undertakings alike.',
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

// Keeps white text legible over moving footage without needing a dark panel
const textShadow = { textShadow: '0 1px 3px rgba(0,0,0,0.55), 0 2px 12px rgba(0,0,0,0.35)' };

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
      {/* ---------- video, fully sharp (no blur) ---------- */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/35 via-transparent to-primary-900/50" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(70% 60% at 50% 100%, rgba(5,13,26,0.55), transparent 70%)' }}
        />
      </div>

      <div className="container-x relative">
        {/* glass card: tinted, NOT blurred, so the video reads clearly through it */}
        <motion.div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/30 bg-primary-900/35 p-6 shadow-[0_24px_70px_rgba(3,13,26,0.45)] sm:p-8 lg:p-10"
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
              <motion.p
                variants={dropIn}
                style={textShadow}
                className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
              >
                Who we are
              </motion.p>

              <motion.h1 variants={dropIn} style={textShadow} className="leading-[0.95] text-white">
                <span className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">About </span>
                <span
                  className="text-5xl italic text-white/90 sm:text-6xl lg:text-7xl"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  Us
                </span>
              </motion.h1>

              <motion.p
                variants={dropIn}
                style={textShadow}
                className="mt-4 text-base font-medium leading-snug text-white sm:text-lg"
              >
                {TAGLINE}
              </motion.p>

              <motion.span variants={dropIn} className="mt-5 block h-1 w-14 rounded-full bg-accent" aria-hidden="true" />

              <motion.div variants={dropIn} className="mt-6 grid grid-cols-2 gap-3 lg:max-w-sm">
                <div className="rounded-xl border border-white/25 bg-primary-900/45 px-4 py-3">
                  <BadgeCheck size={18} className="mb-2 text-accent" />
                  <p className="font-heading text-base font-semibold text-white">ISO 9001:2015</p>
                  <p className="text-xs text-white/75">Certified company</p>
                </div>
                <div className="rounded-xl border border-white/25 bg-primary-900/45 px-4 py-3">
                  <Users size={18} className="mb-2 text-accent" />
                  <p className="font-heading text-base font-semibold text-white">200+ Employees</p>
                  <p className="text-xs text-white/75">30+ locations nationwide</p>
                </div>
              </motion.div>
            </div>

            {/* right: content */}
            <div>
              <div className="space-y-4">
                {PARAGRAPHS.map((p, i) => (
                  <motion.p
                    key={i}
                    variants={dropIn}
                    style={textShadow}
                    className="text-[0.92rem] leading-relaxed text-white/95"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              <motion.div variants={dropIn} className="mt-6 flex flex-wrap gap-2.5 border-t border-white/20 pt-5">
                {TRANSFORMATIONS.map((t) => (
                  <span
                    key={t.from}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-primary-900/45 px-3.5 py-2 text-xs font-medium text-white/90 sm:text-sm"
                  >
                    <span className="text-white/65">From {t.from}</span>
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