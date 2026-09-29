import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

// DUMMY CONTENT: names and quotes are placeholders. Project types are your
// real product categories. Replace with real client reviews when available.
const VOICES = [
  { name: 'Rajesh Verma', role: 'Plant Manager', project: 'Road Weighbridge', quote: 'Running for over two years with zero drift in accuracy. Installation and calibration were both quick and thorough.', size: 'lg', rotate: -1.5 },
  { name: 'Anil Sharma', role: 'Logistics Head', project: 'Rail Weighbridge', quote: 'Weighing loaded wagons in motion has removed our biggest dispatch bottleneck.', size: 'sm', rotate: 1 },
  { name: 'Suresh Patel', role: 'Operations Manager', project: 'Unmanned Weighbridge', quote: 'Fully automated and tamper-proof. Gate queue times dropped noticeably in the first month.', size: 'sm', rotate: -1 },
  { name: 'Meera Nair', role: 'Head of Stores', project: 'Bin & Tank Weighing', quote: 'Precise readings even in a harsh environment, with support that responds within hours.', size: 'lg', rotate: 1.5 },
  { name: 'Vikram Rao', role: 'Fleet Manager', project: 'On-Board Weighing', quote: 'Our drivers get instant load readings before leaving the yard. Fewer overloading penalties since.', size: 'sm', rotate: 1 },
  { name: 'Deepak Joshi', role: 'Maintenance Lead', project: 'Spare Parts & Service', quote: 'Genuine spares and a responsive service team keep our downtime to a minimum.', size: 'sm', rotate: -1 },
];

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('');

function VoiceCard({ v, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: v.rotate }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.1 }}
      whileHover={{ rotate: 0, y: -6, transition: { duration: 0.3 } }}
      className={`relative rounded-2xl border border-steel-100 bg-white p-6 shadow-card ${
        v.size === 'lg' ? 'sm:col-span-2' : ''
      }`}
    >
      <Quote className="absolute right-5 top-5 h-10 w-10 text-primary-50" strokeWidth={1} fill="currentColor" aria-hidden="true" />
      <div className="mb-3 flex gap-0.5">
        {[0, 1, 2, 3, 4].map((s) => (
          <Star key={s} size={13} className="fill-accent text-accent" />
        ))}
      </div>
      <p className="relative z-10 text-sm leading-relaxed text-steel-500 sm:text-[0.95rem]">"{v.quote}"</p>
      <div className="mt-5 flex items-center gap-3 border-t border-steel-100 pt-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
          {initials(v.name)}
        </span>
        <div className="min-w-0">
          <p className="truncate font-heading text-sm font-semibold text-primary">{v.name}</p>
          <p className="truncate text-xs text-steel-500">{v.role}</p>
        </div>
        <span className="ml-auto shrink-0 rounded-full bg-surface px-2.5 py-1 text-[0.68rem] font-medium text-steel-500">
          {v.project}
        </span>
      </div>
    </motion.div>
  );
}

export default function ClientVoices() {
  return (
    <section className="relative overflow-hidden bg-surface py-14 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{ backgroundImage: 'radial-gradient(#0A2E5C12 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mb-8 text-center sm:mb-10">
          <span className="eyebrow">Client Voices</span>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            <span className="font-bold text-primary">What our clients </span>
            <span className="italic text-steel-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              say
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VOICES.map((v, i) => (
            <VoiceCard key={v.name} v={v} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}