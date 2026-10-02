import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  CheckCircle2,
  Printer,
  Users,
  Gauge,
  ShieldCheck,
  Radio,
  MapPin,
  BadgeCheck,
  ArrowUpDown,
  Target,
} from 'lucide-react';
import onboardweighBg from '../../assets/onboardweigh-bg.webp';
import onboardweigh1 from '../../assets/onboardweigh1.webp';

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

const FEATURE_GROUPS = [
  {
    title: 'Build & Display',
    icon: Gauge,
    items: [
      'Durable ABS housing with easy cabin mounting',
      '16×2 LCD display for messages and weight',
      '15-key front keyboard for easy operation',
      '2 digital inputs for proximity sensor',
      'Onboard weighing accurate up to 2–3%',
    ],
  },
  {
    title: 'Printing & Data',
    icon: Printer,
    items: [
      'Front-mount thermal printer for slip printing',
      'Various report options, including operator-wise',
      'Pen-drive dumping facility for softcopy data',
      'Firmware update using pen drive',
      '50,000 records memory',
    ],
  },
  {
    title: 'Operator & Material Management',
    icon: Users,
    items: [
      'Operator login for up to 9 operators',
      '9 field-programmable material codes (sand, aggregate, etc.)',
      '9 field-programmable destination codes',
      'Multi-time loading to reach a lifted-material target',
    ],
  },
];

const ADVANTAGES = {
  title: 'Advantages',
  icon: BadgeCheck,
  items: [
    'Precise, advanced weighing electronics',
    'System accurate up to 2 to 3%',
    'Application-specific, high-tech build',
    'Rugged & reliable',
  ],
};
const OPTIONAL = {
  title: 'Optional Features',
  icon: Radio,
  items: ['GLCD display', 'SMS provision', 'Data integration on server', 'GPS tracking', 'Validation'],
};
const MODES = {
  title: 'Weigh Modes',
  icon: Target,
  items: ['Increment Mode — to lift unknown weight', 'Target Mode — to lift targeted material'],
};

export default function OnBoardWeighing() {
  return (
    <>
      <section
        id="page-hero"
        className="relative isolate overflow-hidden bg-primary-900 pb-20 pt-32 sm:pb-28 sm:pt-44 lg:pb-32 lg:pt-52"
      >
        <img src={onboardweighBg} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-900/85 via-primary-900/70 to-primary-900" aria-hidden="true" />

        <div className="container-x relative">
          <motion.p initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Product Division
          </motion.p>
          <motion.h1 initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Onboard Weighing System
          </motion.h1>
          <motion.nav initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            aria-label="Breadcrumb" className="mt-6 flex items-center gap-1.5 text-sm text-white/70">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <span className="font-medium text-white">Onboard Weighing System</span>
          </motion.nav>
        </div>

        <svg className="absolute inset-x-0 bottom-0 -z-10 h-10 w-full text-surface sm:h-16" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </section>

      {/* INTRO + DIAGRAM */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
            <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
              Accurate weighing, right at the point of loading
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-steel-500">
              Digital Weighing Systems' onboard weigher is an electronic weighing solution for
              wheel loaders, excavators, and articulated dump trucks. It lets you weigh material
              as it's being loaded — directly on the machine — and prevents under- or overloading
              of vehicles right at the time of loading.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="overflow-hidden rounded-2xl shadow-card"
          >
            <img
              src={onboardweigh1}
              alt="Onboard weighing system components fitted to a wheel loader"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURE GROUPS */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-x">
          <motion.h2 initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="font-heading text-2xl font-bold text-primary sm:text-3xl">
            Features
          </motion.h2>

          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerGroup}
            className="mt-10 grid gap-6 md:grid-cols-3">
            {FEATURE_GROUPS.map(({ title, icon: Icon, items }) => (
              <motion.div key={title} variants={fadeUp} className="rounded-2xl bg-surface p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-primary">{title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-steel-500">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ADVANTAGES / OPTIONAL / MODES */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="container-x">
          <motion.h2 initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="font-heading text-2xl font-bold text-primary sm:text-3xl">
            Why choose DWS onboard weighing
          </motion.h2>

          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerGroup}
            className="mt-10 grid gap-6 md:grid-cols-3">
            {[ADVANTAGES, OPTIONAL, MODES].map(({ title, icon: Icon, items }) => (
              <motion.div key={title} variants={fadeUp} className="rounded-2xl bg-white p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-primary">{title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-steel-500">
                      <ArrowUpDown size={14} className="mt-1 shrink-0 text-accent" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Sample ticket printout — recreated as real data, not an image */}
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              { mode: 'Increment Mode', ticketNo: 3, date: '02/01/2026', start: '10:00', end: '10:01', operator: 'Operator 1', product: 'Sand', total: 1575, partial: 3 },
              { mode: 'Target Mode', ticketNo: 10, date: '12/04/2026', start: '18:19', end: '18:19', operator: 'Operator 1', product: 'Sand', target: 2, weight: 195, partial: 1 },
            ].map((t) => (
              <div key={t.mode} className="rounded-xl bg-white p-5 font-mono text-xs leading-relaxed text-ink shadow-card sm:text-sm">
                <p className="mb-2 font-heading font-bold tracking-wide text-primary">{t.mode}</p>
                <p>Ticket No: {t.ticketNo}&nbsp;&nbsp;Date: {t.date}</p>
                <p>Start: {t.start}&nbsp;&nbsp;End: {t.end}</p>
                <p>Operator: {t.operator}</p>
                <p>Product: {t.product}</p>
                {t.mode === 'Increment Mode' ? <p>Total Wt: {t.total}</p> : <p>Target: {t.target}&nbsp;&nbsp;Weight: {t.weight}</p>}
                <p>No. of Partial Weighment: {t.partial}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 py-12 sm:py-14">
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-heading text-lg font-bold text-white sm:text-2xl">
              Fit onboard weighing to your fleet
            </h3>
            <p className="mt-1 text-sm text-white/70">Tell us your machine type and we'll recommend the right setup.</p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90">
            Contact us <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}