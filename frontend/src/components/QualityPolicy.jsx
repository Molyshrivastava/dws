import { motion } from 'framer-motion';
import { CheckCircle2, Quote } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.1 };

const LEAD = [
  'We are committed to offer qualitative machines that are high on efficiency and are as per the requirement of the client. Quality and continuous improvement are the guides for every employee and the whole company.',
  'We have streamlined our Quality Management System with strict adherence to all the required guidelines.',
];

const POINTS = [
  'Our clients know us for our creative, imaginative and flexible solutions which help to solve their traceability and process problems.',
  'Our team of professional quality analysts conducts a thorough inspection of the raw material used for the production.',
  'Our Digital and Analog load cells are put through sensitivity and temperature tests to meet the required standards.',
  'All appropriate documentation is maintained, controlled and archived.',
  'Periodic audits and reviews of staff and project work are undertaken to ensure standards are maintained and opportunities for improvement are sought.',
  'Order Processing provides prompt and accurate delivery of products and billing information.',
  'Engineering provides timely, state-of-the-art solutions that meet customer requirements with high quality.',
  'Post-Sales support provides courteous, prompt and accurate resolution of customer problems.',
  "Sales are conducted with courtesy and integrity to ensure that our products and services satisfy the customer's needs.",
  'We aim to provide customers with a weighing solution relevant to their needs, sustaining value-added benefits.',
];

const dropIn = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
};
const group = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export default function QualityPolicy() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16">
      <div className="container-x relative">
        <motion.div className="mb-8 sm:mb-10" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={group}>
          <motion.span variants={dropIn} className="eyebrow">Our Commitment</motion.span>
          <motion.h2 variants={dropIn} className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
            <span className="font-bold text-primary">Quality </span>
            <span className="italic text-steel-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              Policy
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="relative mb-10 overflow-hidden rounded-2xl border-l-4 border-accent bg-surface p-6 shadow-card sm:mb-12 sm:p-8"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <Quote
            className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 text-primary-50 sm:h-36 sm:w-36"
            strokeWidth={1}
            fill="currentColor"
            aria-hidden="true"
          />
          <div className="relative space-y-3">
            {LEAD.map((p, i) => (
              <p key={i} className="max-w-3xl text-base font-medium leading-relaxed text-primary sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={group}
        >
          {POINTS.map((point, i) => (
            <motion.div
              key={i}
              variants={dropIn}
              className="flex gap-3 rounded-xl border border-steel-100 bg-white p-4 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-5"
            >
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-steel-500">{point}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}