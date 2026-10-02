import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Download,
  Eye,
  Lock,
  Navigation,
  Crosshair,
  CheckCircle2,
  Settings,
  Radio,
  Tag,
  TrafficCone,
  ScanLine,
  DoorOpen,
  Volume2,
  MonitorPlay,
} from 'lucide-react';
import unmannedweighBg from '../../assets/unmannedweigh-bg.webp';
import unmannedweigh1 from '../../assets/unmannedweigh1.webp';

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

const KEY_POINTS = [
  'Eliminates the need for an operator at the weighment point',
  'Restricts entry of unauthorized vehicles automatically',
  'Ensures correct weighment through accurate vehicle positioning',
  'Improves safety by holding entry until the current vehicle clears',
];

const ADVANTAGES = [
  {
    icon: Eye,
    title: 'Surveillance',
    text: 'Inspects the vehicle before entering and after leaving the weighbridge, ensuring correct weighment of material.',
  },
  {
    icon: Lock,
    title: 'Access Control',
    text: 'Boom barriers and traffic lights restrict entry to authorized vehicles only.',
  },
  {
    icon: Navigation,
    title: 'Safety & Guidance',
    text: "Guides the driver to the correct position and blocks the next vehicle until the current one clears.",
  },
  {
    icon: Crosshair,
    title: 'Correct Positioning',
    text: 'Detects the vehicle and confirms correct placement on the platform for an accurate reading.',
  },
];

const COMPONENTS = [
  { icon: Settings, label: 'Special Projects' },
  { icon: Radio, label: 'RFID Reader' },
  { icon: Tag, label: 'RFID Tags' },
  { icon: TrafficCone, label: 'Traffic Light' },
  { icon: ScanLine, label: 'Position Sensor' },
  { icon: DoorOpen, label: 'Boom Barriers' },
  { icon: Volume2, label: 'Speakers' },
  { icon: MonitorPlay, label: 'Jumbo Display & Hooter' },
];

export default function UnmannedWeighBridge() {
  return (
    <>
      {/* HERO — same pattern as Rail / Road Weigh Bridges */}
      <section
        id="page-hero"
        className="relative isolate overflow-hidden bg-primary-900 pb-24 pt-36 sm:pb-28 sm:pt-44 lg:pb-32 lg:pt-52"
      >
        <img
          src={unmannedweighBg}
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
            Unmanned Weigh Bridge
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
            <span className="font-medium text-white">Unmanned Weigh Bridge</span>
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

      {/* OVERVIEW + KEY POINTS */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
          >
            <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
              A fully automated weighing process
            </h2>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-steel-500">
              Our unmanned weighing system removes the need for an operator at every
              weighment, cutting down manpower and human error. RFID-based vehicle
              identification, automatic boom barriers, position sensors, and a jumbo
              display work together for an error-free, fully automated reading — every
              single time.
            </p>

            <a
              href="/downloads/unmanned-weigh-bridge.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
            >
              <Download size={16} />
              Download datasheet
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={staggerGroup}
            className="space-y-4"
          >
            {KEY_POINTS.map((point) => (
              <motion.li
                key={point}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" strokeWidth={2} />
                <span className="text-sm leading-relaxed text-ink">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="font-heading text-2xl font-bold text-primary sm:text-3xl"
          >
            Advantages of the unmanned solution
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={staggerGroup}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {ADVANTAGES.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="rounded-2xl bg-surface p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-500">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SCHEMATIC DIAGRAM */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-x">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="font-heading text-2xl font-bold text-primary sm:text-3xl"
          >
            How the system is laid out
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="mt-8 overflow-hidden rounded-2xl bg-white shadow-card"
          >
            <img
              src={unmannedweigh1}
              alt="Schematic diagram of the unmanned electronic weighbridge, showing traffic light, boom barrier, position sensor, cameras, alphanumeric display, hooter, RFID reader and cabin"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="font-heading text-2xl font-bold text-primary sm:text-3xl"
          >
            System components
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={staggerGroup}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {COMPONENTS.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 rounded-xl bg-surface p-5 text-center shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <p className="text-sm font-medium text-ink">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary-900 py-14">
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
              Looking to automate your weighbridge?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Talk to our team about fitting an unmanned system to your site.
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