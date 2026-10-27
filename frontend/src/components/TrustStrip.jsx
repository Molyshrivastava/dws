import { motion } from 'framer-motion';
import { Award, Clock, ShieldCheck, Users } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.3 };

const STATS = [
  { icon: Award, v: '30+', l: 'Years in electronic weighing' },
  { icon: ShieldCheck, v: '1000+', l: 'Road & rail weighbridges maintained' },
  { icon: Users, v: '200+', l: 'Field engineers at 30+ locations' },
  { icon: Clock, v: '90%+', l: 'Uptime, response within 12 hours' },
];

const dropIn = { hidden: { y: -18, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } } };
const group = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export default function TrustStrip() {
  return (
    <section className="relative bg-white py-10 sm:py-12">
      <motion.div
        className="container-x grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={group}
      >
        {STATS.map((s) => (
          <motion.div key={s.l} variants={dropIn} className="text-center">
            <s.icon size={22} className="mx-auto mb-2 text-accent" />
            <p className="font-heading text-xl font-bold text-primary sm:text-2xl">{s.v}</p>
            <p className="mt-1 text-xs leading-snug text-steel-500 sm:text-sm">{s.l}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}