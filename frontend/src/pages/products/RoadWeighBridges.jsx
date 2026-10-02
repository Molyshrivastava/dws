import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Gauge, Cpu, ShieldCheck, Zap, Signal, Download } from 'lucide-react';
import roadweighBg from '../../assets/roadweigh-bg.webp';
import roadweigh1 from '../../assets/roadweigh1.webp';
import roadweigh2 from '../../assets/roadweigh2.webp';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.25 };

const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};
const staggerGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const SPECS = [
  { icon: Gauge, label: 'Measurement Rate', value: '50 readings / second' },
  { icon: Cpu, label: 'Display', value: '25mm, 6-digit LED' },
  { icon: ShieldCheck, label: 'Calibration', value: 'Software, password protected' },
  { icon: Signal, label: 'Connectivity', value: 'RS-232 Serial / 4-20mA' },
  { icon: Zap, label: 'Power Supply', value: '230V AC ±10%, 50Hz' },
  { icon: Gauge, label: 'Weighing Range', value: '0 to Rated Load' },
];

const MODELS = [
  {
    name: 'MWS 2500',
    tag: 'Heavy-duty platform',
    blurb:
      'Built for high-capacity truck and road weighing, with a reinforced platform designed for continuous industrial use.',
    img: roadweigh2,
  },
  {
    name: 'MWS 2400',
    tag: 'Compact controller',
    blurb:
      'A reliable table-top indicator with menu-driven software, auto zero tracking, and full self-diagnostics.',
    img: roadweigh1,
  },
];

export default function RoadWeighBridges() {
  return (
    <>
      {/* HERO — transparent navbar sits on top of this */}
      <section
        id="page-hero"
        className="relative isolate overflow-hidden bg-primary-900 pb-24 pt-36 sm:pb-28 sm:pt-44 lg:pb-32 lg:pt-52"
      >
        <img
          src={roadweighBg}
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
            className="max-w-2xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Road Weigh Bridges
          </motion.h1>

          <motion.nav
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="mt-6 flex items-center gap-1.5 text-sm text-white/70"
          >
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="font-medium text-white">Road Weigh Bridges</span>
          </motion.nav>
        </div>

        {/* curved transition into the white content area */}
        <svg
          className="absolute inset-x-0 bottom-0 -z-10 h-12 w-full text-surface sm:h-16"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </section>

      {/* OVERVIEW */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-x">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
              Built for every road crossing
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-steel-500">
              Our road weighbridges give you fast, accurate gross and tare readings for trucks
              and heavy vehicles — from mines and quarries to logistics yards and toll points.
              Every platform is engineered for durability and corrosion resistance, paired with
              a tamper-proof, menu-driven indicator that's simple to calibrate and simple to run.
            </p>
          </motion.div>

          {/* technical highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={staggerGroup}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {SPECS.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-card"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-steel-300">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-ink">{value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MODELS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="font-heading text-2xl font-bold text-primary sm:text-3xl"
          >
            Available models
          </motion.h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
            {MODELS.map((m, i) => (
              <motion.article
                key={m.name}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                variants={fadeUp}
                transition={{ delay: i * 0.12 }}
                className="group overflow-hidden rounded-2xl bg-surface shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={m.img}
                    alt={`${m.name} road weighbridge`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary-900/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {m.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-primary">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-500">{m.blurb}</p>

                  <a
                    href="/downloads/road-weigh-bridges.pdf"
                    download
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                  >
                    <Download size={16} />
                    Download datasheet
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary-900 py-14">
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
              Need a custom capacity or platform size?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Talk to our team — we'll help you spec the right weighbridge for your site.
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