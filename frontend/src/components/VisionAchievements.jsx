import { motion } from 'framer-motion';
import { Award, Cpu, MapPinned, ShieldCheck, Sparkles, Target } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

// Extracted verbatim from your Overview text
const VISION = 'To be recognized as the weighing experts throughout the world.';
// Extracted verbatim from your Quality Policy text
const MISSION =
  'To provide our customers with a weighing solution relevant to their needs and that will sustain value-added benefits.';

const ACHIEVEMENTS = [
  {
    icon: Cpu,
    size: 'lg',
    title: 'Indigenous Innovation',
    desc: 'The first Indian company credited with developing Indigenous In-Motion Railway Weighbridges, without any foreign technical collaboration.',
  },
  {
    icon: ShieldCheck,
    size: 'sm',
    title: 'ISO 9001:2015',
    desc: 'Certified for our quality management systems and manufacturing processes.',
  },
  {
    icon: MapPinned,
    size: 'sm',
    title: '28 Branches',
    desc: 'A nationwide presence supporting fast, reliable after-sales service.',
  },
  {
    icon: Sparkles,
    size: 'sm',
    title: 'R&D in Chennai',
    desc: 'Our advanced research centre behind sophisticated systems and instrumentation.',
  },
  {
    icon: Award,
    size: 'lg',
    title: 'National Recognition',
    desc: 'Awarded twice by the Govt. of India — for Quality, and for Outstanding Entrepreneurship — plus a Creativity and Innovation Award.',
  },
];

// word-by-word blur-in reveal
function BlurReveal({ text, className, delayStart = 0 }) {
  const words = text.split(' ');
  return (
    <p className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, ease: EASE, delay: delayStart + i * 0.035 }}
        >
          {w}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </p>
  );
}

const dropIn = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
};
const group = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const SPAN = {
  lg: 'sm:col-span-2 lg:row-span-2',
  sm: '',
};

function AchievementCard({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: i % 2 === 0 ? 40 : -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors duration-300 hover:bg-white/10 ${SPAN[item.size]}`}
    >
      <item.icon
        size={item.size === 'lg' ? 34 : 26}
        className="mb-4 text-accent transition-transform duration-300 group-hover:scale-110"
      />
      <div>
        <h3 className={`font-heading font-bold text-white ${item.size === 'lg' ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
          {item.title}
        </h3>
        <p className={`mt-2 leading-relaxed text-white/70 ${item.size === 'lg' ? 'text-sm sm:text-[0.95rem]' : 'text-sm'}`}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function VisionAchievements() {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-14 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(55% 55% at 50% 0%, rgba(70,120,190,0.3), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* ---------- Vision & Mission ---------- */}
        <div className="mx-auto mb-14 grid max-w-4xl gap-10 text-center sm:mb-16 sm:grid-cols-2 sm:text-left">
          <div>
            <div className="mb-3 flex items-center justify-center gap-2 sm:justify-start">
              <Target size={18} className="text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Vision</span>
            </div>
            <BlurReveal
              text={VISION}
              className="font-heading text-2xl font-bold leading-snug text-white sm:text-3xl"
            />
          </div>
          <div>
            <div className="mb-3 flex items-center justify-center gap-2 sm:justify-start">
              <Sparkles size={18} className="text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Mission</span>
            </div>
            <BlurReveal
              text={MISSION}
              className="text-xl italic leading-snug text-white/80 sm:text-2xl"
              delayStart={0.15}
            />
          </div>
        </div>

        {/* ---------- Achievements: asymmetric bento grid ---------- */}
        <motion.div className="mb-8 text-center" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={group}>
          <motion.span variants={dropIn} className="eyebrow">Recognition</motion.span>
          <motion.h2 variants={dropIn} className="text-3xl leading-tight text-white sm:text-4xl">
            <span className="font-bold">Our </span>
            <span className="italic text-white/70" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              Achievements
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={item.title} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}