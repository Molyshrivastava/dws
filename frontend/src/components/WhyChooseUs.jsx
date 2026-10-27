import { motion } from 'framer-motion';
import { Factory, MapPin, PlugZap, ScrollText, Wrench } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

const POINTS = [
  { icon: Factory, title: 'In-house manufacturing', desc: 'Integrated plant at Tifra Industrial Area, Bilaspur; design and testing under one roof.' },
  { icon: ScrollText, title: 'Legal-for-trade accuracy', desc: 'Systems approved under Legal Metrology and built to OIML standards.' },
  { icon: Wrench, title: 'Comprehensive AMC (CAMC)', desc: 'We maintain and even operate weighing equipment, so you focus on your core business.' },
  { icon: MapPin, title: 'Pan-India service', desc: '200+ engineers at 30+ locations, response within 12 hours.' },
  { icon: PlugZap, title: 'Integration-ready', desc: 'ERP, SAP, FOIS, PLC/SCADA, cloud and IP camera integration.' },
];

const dropIn = { hidden: { y: 24, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } } };
const group = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-14 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
      <div className="container-x relative">
        <div className="mb-8 text-center sm:mb-10">
          <span className="eyebrow">Why DWS</span>
          <h2 className="text-3xl leading-tight text-white sm:text-4xl">
            <span className="font-bold">Why Industries Choose </span>
            <span className="italic text-white/70" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>DWS</span>
          </h2>
        </div>
        <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={group}>
          {POINTS.map((p) => (
            <motion.div key={p.title} variants={dropIn} className="rounded-xl border border-white/15 bg-white/5 p-5">
              <p.icon size={22} className="mb-3 text-accent" />
              <h3 className="font-heading text-sm font-semibold text-white">{p.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/70">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}