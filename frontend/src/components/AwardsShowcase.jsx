import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0 };

const imageModules = import.meta.glob('../assets/award*.*', { eager: true, import: 'default' });
const findImage = (n) => {
  const key = Object.keys(imageModules).find((p) => new RegExp(`/award${n}\\.[a-zA-Z]+$`).test(p));
  return key ? imageModules[key] : null;
};

const AWARDS = [
  {
    img: findImage(1),
    title: 'Creativity and Innovation Award',
    desc: 'Presented to us by Shri Dr. Montek Singh Ahluwalia, Dy. Chairman, Planning Commission.',
  },
  {
    img: findImage(2),
    title: 'National Award for Quality',
    desc: "Presented to us by Shri Bhairon Singh Shekhawat, Hon'ble Vice President of India.",
  },
  {
    img: findImage(3),
    title: 'National Award for Outstanding Entrepreneur',
    desc: "Presented to us by Dr. Manmohan Singh, Hon'ble Prime Minister of India.",
  },
];

const GROUP = [...AWARDS, ...AWARDS, ...AWARDS];

const dropIn = {
  hidden: { y: -22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};
const headGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

function AwardCard({ img, title, desc }) {
  return (
    <article className="award-card group relative aspect-square shrink-0 select-none overflow-hidden rounded-2xl bg-primary-800 shadow-card ring-1 ring-white/60 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-card-hover">
      {img ? (
        <img
          src={img}
          alt={title}
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%] transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800">
          <Award size={48} className="text-white/25" strokeWidth={1.2} />
        </div>
      )}

      <div className="award-blur pointer-events-none absolute inset-x-0 bottom-0 h-[55%] overflow-hidden">
        {img && (
          <img
            src={img}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="absolute bottom-0 left-0 h-[182%] w-full scale-110 object-cover object-[50%_30%] blur-[14px]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/65 to-primary-900/25" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="mb-2.5 block h-[2px] w-8 bg-accent" aria-hidden="true" />
        <h3 className="font-heading text-base font-semibold leading-snug text-white sm:text-lg">{title}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-white/85 sm:text-[0.8rem]">{desc}</p>
      </div>
    </article>
  );
}

export default function AwardsShowcase() {
  return (
    <section
      className="snap-section relative flex flex-col justify-center overflow-hidden bg-surface py-14 sm:py-16"
      aria-label="Awards"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(#0A2E5C12 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(50% 55% at 50% 45%, rgba(255,255,255,0.75), transparent 75%)' }}
        aria-hidden="true"
      />

      <motion.div
        className="container-x relative mb-6 text-center sm:mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={headGroup}
      >
        <motion.span variants={dropIn} className="eyebrow">
          Recognition
        </motion.span>
        <motion.h2 variants={dropIn} className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
          <span className="font-bold text-primary">Awards </span>
          <span className="italic text-steel-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
            &amp; Honours
          </span>
        </motion.h2>
        <motion.p variants={dropIn} className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-steel-500 sm:text-[0.95rem]">
          Recognised at the national level for quality, creativity and enterprise.
        </motion.p>
      </motion.div>

      {/* the fix: card widths now come from this viewport's real size, not vw */}
      <div className="awards-viewport container-x relative">
        <motion.div
          className="marquee awards-view relative mx-auto py-8"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        >
          <div className="marquee__track" style={{ '--marquee-duration': '60s' }}>
            <div className="flex">
              {GROUP.map((a, i) => (
                <AwardCard key={`a-${i}`} {...a} />
              ))}
            </div>
            <div className="flex" aria-hidden="true">
              {GROUP.map((a, i) => (
                <AwardCard key={`b-${i}`} {...a} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}