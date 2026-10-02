import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, Star } from 'lucide-react';
import beltweighBg from '../../assets/beltweigh-bg.webp';
import beltweigh1 from '../../assets/beltweigh1.webp';
import beltweigh2 from '../../assets/beltweigh2.webp';
import beltweigh3 from '../../assets/beltweigh3.webp';
import beltweigh4 from '../../assets/beltweigh4.webp';
import beltweigh5 from '../../assets/beltweigh5.webp';
import beltweigh6 from '../../assets/beltweigh6.webp';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.2 };

const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};
const staggerGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const GALLERY = [beltweigh2, beltweigh3, beltweigh4, beltweigh5, beltweigh6];

const ACCORDION = [
  {
    title: 'Hardware Features',
    items: [
      'LCD display to show rate of material transfer, speed & totaliser',
      'Front panel 4-key keyboard for easy operation',
      'Easy setting procedures',
      'Load cell port for weight sensing',
      'Linear input port to connect linear transducer for speed',
      'Digital input to connect pulse input for speed from tacho',
      'SMPS power supply to operate over a wide input range',
      'Panel mount housing',
      'Withstands harsh industrial environments and temperature variations',
      '16-bit 4-20mA analog output for rate of flow (optional)',
    ],
  },
  {
    title: 'Applications',
    note: 'BC04 can be made available for any of the following field requirements',
    items: [
      'Feeding of a material precisely using coarse-fine arrangement',
      'Feeding of more than one material',
      'Discharge of a ready batch from a weigh hopper',
      'Dispensing required quantity from a weigh hopper',
      'Check weighing',
      'Automatic bag filling with precise quantity and clamping action',
      'Tank level maintaining, and many more',
    ],
  },
  {
    title: 'Salient Features',
    note: 'Automatic calculation and continuous display of',
    items: [
      'L: Load weight being transferred, in per metre length (kg/metre)',
      'S: Speed of the conveyor belt, in metres per minute',
      'R: Rate of material being transferred, in tons/hour',
      'T: Totaliser in tonnes, showing total weight transferred',
    ],
  },
  {
    title: 'Software Features',
    items: [
      'Speed calibration via pulse input using a simple proximity switch (NPN or PNP type)',
      'Multi-step software calibration of weight for three speeds (Low / Medium / High)',
    ],
  },
];

function AccordionItem({ section, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-card">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6"
      >
        <span className={`font-heading text-sm font-bold sm:text-base ${isOpen ? 'text-accent' : 'text-primary'}`}>
          {section.title}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-steel-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6">
              {section.note && (
                <p className="mb-3 text-sm font-semibold text-ink">{section.note}</p>
              )}
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-lg bg-surface px-3 py-2.5 text-sm leading-relaxed text-steel-500"
                  >
                    <Star size={14} className="mt-0.5 shrink-0 text-accent" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BeltWeighing() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section
        id="page-hero"
        className="relative isolate overflow-hidden bg-primary-900 pb-20 pt-32 sm:pb-28 sm:pt-44 lg:pb-32 lg:pt-52"
      >
        <img src={beltweighBg} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-900/85 via-primary-900/70 to-primary-900" aria-hidden="true" />

        <div className="container-x relative">
          <motion.p initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Product Division
          </motion.p>
          <motion.h1 initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Belt Weighing System
          </motion.h1>
          <motion.nav initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            aria-label="Breadcrumb" className="mt-6 flex items-center gap-1.5 text-sm text-white/70">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <span className="font-medium text-white">Belt Weighing System</span>
          </motion.nav>
        </div>

        <svg className="absolute inset-x-0 bottom-0 -z-10 h-10 w-full text-surface sm:h-16" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </section>

      {/* INTRO + MECHANISM RENDER */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
            <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
              Continuous, in-motion weight calculation
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-steel-500">
              Our conveyor weighing system is designed to deliver continuous weight calculation
              for industries where inward raw material or outgoing finished goods are being
              transferred through a conveyor belt — giving you real-time load, speed, rate, and
              totalised figures without interrupting the line.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={beltweigh1}
              alt="Belt weighing load cell mechanism mounted on a conveyor idler"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-x">
          <motion.h2 initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="font-heading text-2xl font-bold text-primary sm:text-3xl">
            BC04 Belt Weigher
          </motion.h2>

          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerGroup}
            className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
            {GALLERY.map((img, i) => (
              <motion.div key={i} variants={fadeUp}
                className="group aspect-square overflow-hidden rounded-xl bg-surface shadow-card">
                <img
                  src={img}
                  alt={`BC04 belt weigher component ${i + 1}`}
                  className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="container-x">
          <motion.h2 initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="font-heading text-2xl font-bold text-primary sm:text-3xl">
            Full specification
          </motion.h2>

          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerGroup}
            className="mt-8 space-y-4">
            {ACCORDION.map((section, i) => (
              <motion.div key={section.title} variants={fadeUp}>
                <AccordionItem
                  section={section}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 py-12 sm:py-14">
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-heading text-lg font-bold text-white sm:text-2xl">
              Need belt weighing on your conveyor line?
            </h3>
            <p className="mt-1 text-sm text-white/70">Tell us your belt speed and material, and we'll spec the BC04 for it.</p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90">
            Contact us <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}