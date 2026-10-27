import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

const AWARDS = [
  { title: 'National Award for Quality', by: "Presented by Shri Bhairon Singh Shekhawat, Vice President of India." },
  { title: 'National Award for Outstanding Entrepreneurship', by: "Presented by Dr. Manmohan Singh, Prime Minister of India." },
  { title: 'Creativity & Innovation Award for Small Enterprises', by: 'All India Management Association, presented by Dr. Montek Singh Ahluwalia.' },
  { title: 'Performance Award', by: 'Governments of Madhya Pradesh and Chhattisgarh.' },
];

const dropIn = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } } };
const group = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export default function AwardsRecognition() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="container-x">
        <div className="mb-8 text-center sm:mb-10">
          <span className="eyebrow">Recognition</span>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            <span className="font-bold text-primary">Awards & </span>
            <span className="italic text-steel-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Recognition</span>
          </h2>
        </div>
        <motion.div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={group}>
          {AWARDS.map((a) => (
            <motion.div key={a.title} variants={dropIn} className="flex gap-3 rounded-xl border border-steel-100 bg-surface p-4">
              <Award size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <h3 className="font-heading text-sm font-semibold text-primary">{a.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-steel-500">{a.by}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}