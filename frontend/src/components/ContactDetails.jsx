import { motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin, Phone, Printer } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

const mapSearch = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const HEAD_OFFICE_MAP = mapSearch('Digital Weighing Systems (P) Ltd, Plot No. P1 B & C P2, Industrial Area, Tifra, Bilaspur, Chhattisgarh 495223');
const HEAD_OFFICE_EMBED = 'https://www.google.com/maps?q=Digital+Weighing+Systems+Tifra+Bilaspur+Chhattisgarh&output=embed';

const CARDS = [
  { icon: MapPin, label: 'Address', lines: ['Plot No. P1 B & C P2, Industrial Area,', 'Tifra, Bilaspur (C.G.) – 495223'], href: HEAD_OFFICE_MAP, cta: 'View on map' },
  { icon: Mail, label: 'Email', lines: ['info@digitalweighingsystems.com', 'dwsbsp@yahoo.com'], hrefs: ['mailto:info@digitalweighingsystems.com', 'mailto:dwsbsp@yahoo.com'] },
  { icon: Phone, label: 'Phone', lines: ['+91-7752-252097'], href: 'tel:+917752252097' },
  { icon: Printer, label: 'Fax', lines: ['+91-7752-252484'] },
];

const dropIn = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: EASE } } };
const group = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

function DetailCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.div
      variants={dropIn}
      className="group rounded-2xl border border-steel-100 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon size={22} />
      </span>
      <h3 className="mt-4 font-heading text-base font-semibold text-primary">{item.label}</h3>
      <div className="mt-2 space-y-1 text-sm text-steel-500">
        {item.lines.map((line, i) =>
          item.hrefs ? (
            <a key={i} href={item.hrefs[i]} className="block break-all transition-colors hover:text-accent">
              {line}
            </a>
          ) : (
            <p key={i}>{line}</p>
          )
        )}
      </div>
      {item.href && (
        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent"
        >
          {item.cta ?? 'Contact'}
          {item.href.startsWith('http') && <ExternalLink size={12} />}
        </a>
      )}
    </motion.div>
  );
}

export default function ContactDetails() {
  return (
    <section className="relative overflow-hidden bg-surface py-14 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{ backgroundImage: 'radial-gradient(#0A2E5C12 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mb-8 text-center sm:mb-10">
          <span className="eyebrow">Get in touch</span>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            <span className="font-bold text-primary">Contact </span>
            <span className="italic text-steel-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Us</span>
          </h2>
        </div>

        <motion.div
          className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={group}
        >
          {CARDS.map((c) => <DetailCard key={c.label} item={c} />)}
        </motion.div>

        {/* map, in a distinctive tilted-tag frame */}
        <motion.div
          className="relative mx-auto max-w-4xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <div className="overflow-hidden rounded-2xl border-4 border-white shadow-card-hover">
            <iframe
              title="Digital Weighing Systems location"
              src={HEAD_OFFICE_EMBED}
              className="h-[360px] w-full sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <motion.a
            href={HEAD_OFFICE_MAP}
            target="_blank"
            rel="noreferrer"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 0, y: -4 }}
            className="absolute -top-6 left-6 flex -rotate-2 items-center gap-3 rounded-xl bg-primary px-4 py-3 text-white shadow-card-hover transition-transform sm:left-10"
          >
            <MapPin size={20} className="text-accent" />
            <span className="text-sm font-semibold">Digital Weighing Systems (P) Ltd</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}