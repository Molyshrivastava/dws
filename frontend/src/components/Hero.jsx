import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { MapPin, BadgeCheck } from 'lucide-react';
import heroBg from '../assets/hero-bg.webp';

// Edit the headline here. accent: true = italic serif word
const TOP_LINES = [
  [{ t: 'Digital ' }, { t: 'Weighing', accent: true }],
  [{ t: 'Systems (P) Ltd' }],
];
const BOTTOM_LINES = [
  [{ t: 'Built on ' }, { t: 'precision', accent: true }],
  [{ t: 'Trusted for decades' }],
];

const EASE = [0.22, 1, 0.36, 1];

function Line({ parts, from, delay, reduce }) {
  return (
    <span className="hero-line">
      <motion.span
        className="hero-line__inner"
        initial={{ y: reduce ? '0%' : from }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {parts.map((p, i) =>
          p.accent ? (
            <em key={i} className="hero-accent">{p.t}</em>
          ) : (
            <span key={i}>{p.t}</span>
          )
        )}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // top half drifts up, bottom half drifts down while scrolling
  const topY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -160]);
  const bottomY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, reduce ? 1 : 0]);

  // photo slowly zooms while scrolling
  const stageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);
  const stageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);

  return (
   <section ref={ref} className="hero snap-section" aria-label="Digital Weighing Systems">
      <h1 className="sr-only">
        Digital Weighing Systems (P) Ltd - Built on precision, trusted for decades
      </h1>

      {/* background photo (feathered edges) */}
      <motion.div
        className="hero-stage hero-stage--bg"
        style={{ scale: stageScale, y: stageY }}
        aria-hidden="true"
      >
        <img
          src={heroBg}
          alt=""
          className="hero-img"
          fetchPriority="high"
          decoding="async"
          draggable="false"
        />
      </motion.div>

      {/* headline + details */}
      <div className="hero-content">
        <motion.div
          className="hero-text hero-text--top"
          style={{ y: topY, opacity: textOpacity }}
          aria-hidden="true"
        >
          {TOP_LINES.map((parts, i) => (
            <Line key={i} parts={parts} from="130%" delay={0.3 + i * 0.12} reduce={reduce} />
          ))}
        </motion.div>

        <motion.div className="hero-meta" style={{ opacity: textOpacity }}>
          <motion.div
            className="hero-meta__inner"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: EASE }}
          >
            <span className="hero-meta__item">
              <MapPin size={15} aria-hidden="true" />
              Tifra, Bilaspur, Chhattisgarh
            </span>
            <span className="hero-meta__divider" aria-hidden="true" />
            <span className="hero-meta__item">
              <BadgeCheck size={15} aria-hidden="true" />
              ISO 9001:2015 Certified
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-text hero-text--bottom"
          style={{ y: bottomY, opacity: textOpacity }}
          aria-hidden="true"
        >
          {BOTTOM_LINES.map((parts, i) => (
            <Line key={i} parts={parts} from="-130%" delay={0.3 + i * 0.12} reduce={reduce} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}