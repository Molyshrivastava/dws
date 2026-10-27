import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scale } from 'lucide-react';
import { PRODUCT_LINKS } from '../data/navLinks';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

// Matched to your existing routes where possible. "to: null" items have no
// page yet — they render as plain (non-link) cards until that page exists.
const SOLUTIONS = [
  { title: 'Rail In-Motion Weighbridge', desc: 'RDSO-approved weighing of moving trains up to 15 km/h, FOIS-ready.', to: '/products/rail-weigh-bridges' },
  { title: 'Rail Static Weighbridge', desc: 'Real-time wagon weighing under silos to avoid railway overload penalties.', to: '/products/rail-weigh-bridges' },
  { title: 'Road Weighbridge', desc: 'Pit, pitless, concrete and portable truck scales up to 200 tons.', to: '/products/road-weigh-bridges' },
  { title: 'Unmanned Weighbridge', desc: 'RFID, ANPR, boom barriers and cameras for zero-operator weighing.', to: '/products/unmanned-weigh-bridge' },
  { title: 'Road Weigh-in-Motion', desc: 'Axle and gross vehicle weight at toll plazas and plant gates.', to: null },
  { title: 'On-Board Weighing', desc: 'Load-as-you-lift weighing for loaders and excavators.', to: '/products/on-board-weighing' },
  { title: 'Belt & Tank Weighing', desc: 'Continuous conveyor and process-vessel weighing.', to: '/products/belt-weighing' },
  { title: 'Steel Plant Weighing', desc: 'Ladle transfer car, torpedo and wagon tippler systems up to 800 T.', to: null },
];

const dropIn = { hidden: { y: 24, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } } };
const group = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

function Card({ s }) {
  const inner = (
    <>
      <Scale size={20} className="mb-3 text-accent" />
      <h3 className="font-heading text-base font-semibold text-primary">{s.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-steel-500">{s.desc}</p>
      {s.to && <ArrowRight size={16} className="mt-3 text-accent opacity-0 transition-opacity group-hover:opacity-100" />}
    </>
  );
  const cls = 'group rounded-xl border border-steel-100 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-card-hover';
  return s.to ? <Link to={s.to} className={cls}>{inner}</Link> : <div className={cls}>{inner}</div>;
}

export default function SolutionsGrid() {
  return (
    <section className="relative bg-surface py-14 sm:py-16">
      <div className="container-x relative">
        <div className="mb-8 text-center sm:mb-10">
          <span className="eyebrow">What we build</span>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            <span className="font-bold text-primary">Our Weighing </span>
            <span className="italic text-steel-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Solutions</span>
          </h2>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={group}
        >
          {SOLUTIONS.map((s) => (
            <motion.div key={s.title} variants={dropIn}><Card s={s} /></motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}