import { motion } from 'framer-motion';
import { ArrowDown, Cpu, FileText, Scale, Sparkles, Truck } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

// Finds any .pdf in src/assets/downloads/, matched to an item by filename
const pdfModules = import.meta.glob('../assets/downloads/*.pdf', { eager: true, import: 'default' });
const findPdf = (slug) => {
  const key = Object.keys(pdfModules).find((p) => p.endsWith(`/${slug}.pdf`));
  return key ? pdfModules[key] : null;
};

// ---- Edit downloads here: title, slug (matches the pdf filename), icon ----
const DOWNLOADS = [
  { title: 'Experience Silver Linings', slug: 'experience-silver-linings', icon: Sparkles },
  { title: 'Smart Weighing', slug: 'smart-weighing', icon: Scale },
  { title: 'Software Integration', slug: 'software-integration', icon: Cpu },
  { title: 'Unmanned Weigh Bridge', slug: 'unmanned-weigh-bridge', icon: Truck },
];

const dropIn = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: EASE } },
};
const group = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

function TicketCard({ title, icon: Icon, pdfUrl }) {
  const available = Boolean(pdfUrl);

  return (
    <motion.div
      variants={dropIn}
      className={`relative flex overflow-hidden rounded-2xl border border-steel-100 bg-white shadow-card transition-shadow duration-300 ${
        available ? 'hover:shadow-card-hover' : 'opacity-60'
      }`}
    >
      {/* left: icon + title */}
      <div className="flex flex-1 items-center gap-4 p-5 sm:p-6">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
          <Icon size={22} />
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-heading text-base font-semibold text-primary sm:text-lg">{title}</h3>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-steel-500">
            <FileText size={13} />
            PDF Document
          </p>
        </div>
      </div>

      {/* perforated divider */}
      <div className="relative flex w-24 shrink-0 items-center justify-center border-l-2 border-dashed border-steel-100 sm:w-28">
        <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-surface" aria-hidden="true" />
        <span className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-surface" aria-hidden="true" />

        {available ? (
          <a
            href={pdfUrl}
            download
            className="group flex flex-col items-center gap-1 text-accent transition-colors hover:text-accent-dark"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 transition-transform duration-300 group-hover:translate-y-0.5">
              <ArrowDown size={16} />
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-wide">Download</span>
          </a>
        ) : (
          <span className="flex flex-col items-center gap-1 text-steel-300">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-steel-100">
              <ArrowDown size={16} />
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-wide">Soon</span>
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function DownloadCenter() {
  return (
    <section className="relative overflow-hidden bg-surface py-14 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{ backgroundImage: 'radial-gradient(#0A2E5C12 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mb-8 text-center sm:mb-10">
          <span className="eyebrow">Resources</span>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            <span className="font-bold text-primary">Downloads &amp; </span>
            <span className="italic text-steel-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              Brochures
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-steel-500 sm:text-[0.95rem]">
            Product literature and technical documents, ready to save for offline reference.
          </p>
        </div>

        <motion.div
          className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={group}
        >
          {DOWNLOADS.map((d) => (
            <TicketCard key={d.slug} title={d.title} icon={d.icon} pdfUrl={findPdf(d.slug)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}