import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  CheckCircle2,
  Warehouse,
  Blend,
  FlaskConical,
  Flame,
  Ruler,
  Shield,
  Thermometer,
  Waves,
  Droplets,
  Box,
  Lock,
} from 'lucide-react';
import bintankBg from '../../assets/bintank-bg.webp';
import binTankWeigh from '../../assets/bin-tankweigh.webp';

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

const INSTALL_FACTS = [
  'Load cells are placed between the tank and its support pedestals, with the tank mounted directly on the cells',
  'Inlet and outlet lines are fitted with suspension bellows to prevent pipeline interference from affecting accuracy',
  'Circular tanks can sit on 3 load cells; heavier rectangular/square tanks need a minimum of 4',
  'Load cell count for an existing tank matches its number of pedestals; a new installation can be sized as needed',
  'Suitable for both indoor and outdoor applications, with hardware rated for corrosive environments',
  'Uplift protection is available to stabilise the vessel and prevent dismounting',
];

const APPLICATIONS = [
  { icon: Warehouse, label: 'Big Storage Tanks' },
  { icon: Blend, label: 'Mixers, Kneaders & Stirrers' },
  { icon: FlaskConical, label: 'Dissolvers' },
  { icon: Flame, label: 'Reacting & Heating Tanks' },
];

const SALIENT_FEATURES = [
  { icon: Ruler, label: 'Easy to install in limited space' },
  { icon: Box, label: 'Modular design for easy installation & maintenance' },
  { icon: Lock, label: 'Lift-off protection' },
  { icon: Thermometer, label: 'Wide temperature range available' },
  { icon: Waves, label: 'Resistance against vibration' },
  { icon: Droplets, label: 'Suited for liquid or solid weighing & accurate batch preparation' },
  { icon: Shield, label: 'Shear beam or compression load cells meeting IP-67/68' },
  { icon: Box, label: 'Junction box meeting IP-65/55 standards' },
];

export default function BinTankWeighing() {
  return (
    <>
      {/* HERO */}
      <section
        id="page-hero"
        className="relative isolate overflow-hidden bg-primary-900 pb-20 pt-32 sm:pb-28 sm:pt-44 lg:pb-32 lg:pt-52"
      >
        <img
          src={bintankBg}
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
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent"
          >
            Product Division
          </motion.p>

          <motion.h1
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Bin / Tank Weigh System
          </motion.h1>

          <motion.nav
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            aria-label="Breadcrumb"
            className="mt-6 flex items-center gap-1.5 text-sm text-white/70"
          >
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <span className="font-medium text-white">Bin / Tank Weigh System</span>
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

      {/* INTRO + SCHEMATIC */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
            <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
              Convert any tank into a weighing system
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-steel-500">
              Any existing or new tank installation can be converted into a tank weighing system,
              with weight data available on a digital indicator or directly on your computer. Our
              indicators, controllers, and signal conditioners are built on modern technology that
              can interlink with a PLC, a computer, or automate the complete system — to whatever
              level your process needs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="overflow-hidden rounded-2xl bg-white shadow-card"
          >
            <img
              src={binTankWeigh}
              alt="Schematic diagram of a bin/tank weighing system showing load cell, junction box, digital control panel and PLC relay outputs"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* INSTALL FACTS */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-x">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="font-heading text-2xl font-bold text-primary sm:text-3xl"
          >
            How it's installed
          </motion.h2>

          <motion.ul
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerGroup}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {INSTALL_FACTS.map((fact) => (
              <motion.li
                key={fact}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl bg-surface p-4 shadow-card"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" strokeWidth={2} />
                <span className="text-sm leading-relaxed text-ink">{fact}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="container-x">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="font-heading text-2xl font-bold text-primary sm:text-3xl"
          >
            Applications
          </motion.h2>

          <motion.div
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerGroup}
            className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
          >
            {APPLICATIONS.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 rounded-xl bg-white p-5 text-center shadow-card sm:p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <p className="text-sm font-medium text-ink">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SALIENT FEATURES */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-x">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="font-heading text-2xl font-bold text-primary sm:text-3xl"
          >
            Salient Features
          </motion.h2>

          <motion.div
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerGroup}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {SALIENT_FEATURES.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="rounded-xl bg-surface p-5 shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <p className="mt-3 text-sm leading-snug text-ink">{label}</p>
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
              Convert your tank into a weighing system
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Tell us your tank size and mounting type, and we'll help you spec the right load cells.
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