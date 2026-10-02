import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

import spareBg from '../../assets/spare-bg.webp';
import spare1 from '../../assets/spare1.webp';
import spare2 from '../../assets/spare2.webp';
import spare3 from '../../assets/spare3.webp';
import spare4 from '../../assets/spare4.webp';
import spare5 from '../../assets/spare5.webp';
import spare6 from '../../assets/spare6.webp';
import spare7 from '../../assets/spare7.webp';
import spare8 from '../../assets/spare8.webp';
import spare9 from '../../assets/spare9.webp';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.2 };

const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};
const staggerGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const PARTS = [
  { img: spare1, name: 'Load Cell — Compression' },
  { img: spare2, name: 'Load Cell — With Assembly' },
  { img: spare3, name: 'Shear Beam Load Cell' },
  { img: spare4, name: 'Contactless Track Switches' },
  { img: spare5, name: 'Weigh Rails — Embedded Sensors', note: '52kg / 60kg rails' },
  { img: spare6, name: 'Compression Load Cells', note: 'Capacity as per requirement' },
  { img: spare7, name: 'Double Ended Load Cells', note: 'Capacity as per requirement' },
  { img: spare8, name: 'Weight Indicator / Digitizer', note: 'For Road Weigh Bridge — MWS2400' },
  { img: spare9, name: 'Weigh Bridge Indicator', note: 'In-Motion Weighing — MW2500' },
];

export default function SpareParts() {
  return (
    <>
      {/* HERO — same pattern as the rest of the Product Division */}
      <section
        id="page-hero"
        className="relative isolate overflow-hidden bg-primary-900 pb-20 pt-32 sm:pb-28 sm:pt-44 lg:pb-32 lg:pt-52"
      >
        <img
          src={spareBg}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          aria-hidden="true"
        />
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
            className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Spare Parts &amp; Accessories
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
            <span className="font-medium text-white">Spare Parts &amp; Accessories</span>
          </motion.nav>
        </div>

        <svg
          className="absolute inset-x-0 bottom-0 -z-10 h-10 w-full text-surface sm:h-16"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </section>

      {/* INTRO */}
      <section className="bg-surface pt-14 sm:pt-16">
        <div className="container-x">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="max-w-2xl text-[0.95rem] leading-relaxed text-steel-500"
          >
            Genuine load cells, indicators, and weighbridge components — built to the same
            tolerance as our original equipment, and available as standalone replacement parts
            for any installed system.
          </motion.p>
        </div>
      </section>

      {/* PARTS GRID — 1 col mobile, 2 col tablet, 3 col desktop */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="container-x">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={staggerGroup}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {PARTS.map((part) => (
              <motion.div
                key={part.name}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={part.img}
                    alt={part.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-primary-900/10 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="font-heading text-base font-bold leading-snug text-white sm:text-lg">
                      {part.name}
                    </h3>
                    {part.note && (
                      <p className="mt-1 text-xs text-white/75 sm:text-sm">{part.note}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary-900 py-12 sm:py-14">
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-heading text-lg font-bold text-white sm:text-2xl">
              Need a specific part or capacity?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Share your weighbridge model and we'll match the right component for it.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Contact us
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}