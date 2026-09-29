import { motion } from 'framer-motion';
import { Award, Building2, Factory, MapPin, Users, Zap } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.1 };

const INTRO =
  'Digital Weighing Systems (P) Limited, headquartered in Bilaspur, Chhattisgarh, was founded in 1994 with more than 25 years of experience in manufacturing, servicing, importing and exporting all types of weighing scales worldwide. With a great team of management and more than 200 professional engineers and technicians with vast experience in the field of weighing, we are one of the fastest-growing companies in the industry.';

const HIGHLIGHT =
  'Digital is the first Indian company to get the credit of developing "Indigenous In-Motion Railway Weighbridges" without any foreign technical collaboration.';

const PARAGRAPHS = [
  'The integrated manufacturing unit located in the industrial area of Tifra, Bilaspur (C.G.) is the only one of its kind in India. Our most advanced research and development centre is located at Chennai, which is the axis behind the development of our sophisticated systems and instrumentation — among the best in the international weighing industry.',
  'Digital has 28 branches nationwide, helping us deliver better after-sales service, one of our greatest strengths. Digital Weighing Systems continuously works towards developing our products with the latest technology, and aims for the future to be recognised as the weighing experts throughout the world.',
];

const STATS = [
  { icon: Building2, value: '1994', label: 'Year founded' },
  { icon: Zap, value: '25+ yrs', label: 'Industry experience' },
  { icon: Users, value: '200+', label: 'Engineers & technicians' },
  { icon: MapPin, value: '28', label: 'Branches nationwide' },
  { icon: Factory, value: 'Tifra', label: 'Manufacturing unit' },
  { icon: Award, value: 'Chennai', label: 'R&D centre' },
];

const dropIn = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: EASE } },
};
const riseIn = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: EASE } },
};
const group = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function CompanyOverview() {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-14 text-white sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(55% 60% at 90% 0%, rgba(70,120,190,0.28), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={group}>
          <motion.span variants={dropIn} className="eyebrow">Since 1994</motion.span>
          <motion.h2 variants={dropIn} className="mb-5 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            <span className="font-bold">Company </span>
            <span className="italic text-white/70" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              Overview
            </span>
          </motion.h2>

          <motion.p variants={dropIn} className="text-[0.95rem] leading-relaxed text-white/80">
            {INTRO}
          </motion.p>

          <motion.div variants={dropIn} className="my-6 rounded-xl border-l-4 border-accent bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-base font-medium leading-relaxed text-white sm:text-lg">{HIGHLIGHT}</p>
          </motion.div>

          <div className="space-y-4">
            {PARAGRAPHS.map((p, i) => (
              <motion.p key={i} variants={dropIn} className="text-[0.95rem] leading-relaxed text-white/80">
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 content-start gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={group}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={riseIn}
              className="rounded-xl border border-white/15 bg-white/5 p-5 transition-colors duration-300 hover:bg-white/10"
            >
              <s.icon size={22} className="mb-3 text-accent" />
              <p className="font-heading text-xl font-bold text-white sm:text-2xl">{s.value}</p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}