import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageOff } from 'lucide-react';
import aboutBuilding from '../assets/about-building.webp';
import aboutGate from '../assets/about-gate.webp';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

const PARAGRAPHS = [
  'Digital Weighing Systems (P) Ltd proudly introduces itself as the leading manufacturer of electronic weighing systems from the last 2 decades. We are engaged in manufacturing, exporting and supplying a wide range of Electronic Weighing Machines. We provide the best quality Weighing Machines, which are widely appreciated and accepted in the market for their simple configuration and efficient working.',
  'We offer customization facility as per the need and requirement of our esteemed clients. Our weighing solutions & services are known for durability, corrosion resistance and application specific designs. We have a very strong principle to ensure that our products are tamper proof.',
  'Digital Weighing Systems (P) Ltd has chosen the latest technology which substitutes expensive and heavy materials with more suitable alternatives, which ensures that the products are cost effective, have long life and can perform in extreme conditions.',
  'Digital Weighing Systems (P) Ltd has been awarded twice with the National Award for Quality and Entrepreneurship by the Govt. of India.',
];

const dropIn = {
  hidden: { y: -22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};
const paraGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const HEADING_PART1 = 'What is ';
const HEADING_PART2 = 'DWS?';

const letterContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};
const letter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.05 } },
};

const glow = {
  textShadow:
    '0 0 14px rgba(255,255,255,0.95), 0 0 6px rgba(255,255,255,0.95), 0 1px 3px rgba(0,0,0,0.15)',
};

function RevealImage({ src, alt, className = '', delay = 0 }) {
  const [ok, setOk] = useState(true);

  return (
    <motion.div
      className={`relative shrink-0 overflow-hidden bg-steel-100 ${className}`}
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {ok ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setOk(false)}
          draggable="false"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 text-center text-steel-300">
          <ImageOff size={24} strokeWidth={1.3} />
          <span className="text-xs font-medium leading-tight">
            Image not found — check src/assets
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function AboutIntro() {
  return (
    <section className="relative flex flex-col justify-center bg-surface px-0 py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(#0A2E5C12 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-y-8 lg:grid-cols-[380px_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-4">
        <motion.h2
          className="relative z-20 whitespace-nowrap font-heading leading-none lg:col-start-1 lg:row-start-1"
          style={{ fontSize: 'clamp(2rem, 4.8vw, 3.6rem)' }}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={letterContainer}
        >
          <span className="inline-block font-bold text-primary" style={glow}>
            {HEADING_PART1.split('').map((char, i) => (
              <motion.span key={`p1-${i}`} variants={letter} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
          <span
            className="inline-block italic text-steel-500"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif", ...glow }}
          >
            {HEADING_PART2.split('').map((char, i) => (
              <motion.span key={`p2-${i}`} variants={letter} className="inline-block">
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={paraGroup}
          className="z-10 space-y-3 lg:col-start-1 lg:row-start-2"
        >
          {PARAGRAPHS.map((p, i) => (
            <motion.p
              key={i}
              variants={dropIn}
              className="max-w-md text-[0.9rem] leading-relaxed text-steel-500"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        <div className="z-0 flex items-end gap-3 self-start pt-3 sm:gap-4 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:pt-4">
          <RevealImage
            src={aboutBuilding}
            alt="Digital Weighing Systems head office building"
            className="aspect-[4/5] w-[58%] shadow-card"
          />
          <RevealImage
            src={aboutGate}
            alt="Digital Weighing Systems factory gate"
            className="aspect-[4/5] w-[38%] shadow-card"
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}