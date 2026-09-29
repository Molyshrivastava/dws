import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Image as ImageIcon, Settings, Truck } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

// Finds software1.*, software2.* in src/assets, whatever the extension is
const imgModules = import.meta.glob('../assets/software[12].*', { eager: true, import: 'default' });
const findImage = (n) => {
  const key = Object.keys(imgModules).find((p) => new RegExp(`/software${n}\\.[a-zA-Z]+$`).test(p));
  return key ? imgModules[key] : null;
};
const SCREEN1 = findImage(1);
const SCREEN2 = findImage(2);

// ---- Content, from your message ----
const DEVELOPMENT =
  'DWS specialize in integrating applied software products, connectivity tools, and related standard products to perform the applications of batching, SQC, formulation, custom scale instrumentation, connectivity, and vehicle scale management software. DWS software is a powerful new way to get the most out of your weighing scale. It saves you time and money by putting complete control of weight and data management at your fingertips. Designed for compatibility with other systems, DWS software can fit seamlessly into your operation. The modular design lets you use the software to connect your scale to a single PC or a computer network. The program stores a database of vehicles, customers, products, and other information needed to complete transactions. Wizards are available to import, export, and convert data. Industrial instruments and software from DIGITAL WEIGHING SYSTEMS optimize your operations from receiving to shipping, with solutions for production, end-of-line product inspection and logistics. Results include improved product quality, accelerated and automated processes, increased efficiency and regulatory compliance. Many of our solutions can be integrated directly into ERP systems.';

const DESIGN =
  'A complete 3D product design, verification, motion simulation, data management, and communication tools to make the product. The team of designers, both mechanical and electronics, looks after the system design, computer coordinated mechanism using high-end CAD/CAM tools, design optimization, design theory and technology for digital weighing machines and equipment. The design team is also there for customer support for installation, maintenance and change requests. We also have a product development and product life cycle team for the upgradation and analysis of weighing machines using CAD/CAM.';

const SPECS = [
  { label: 'Hardware', value: 'Pentium / 700 MHz CPU / 128 MB RAM' },
  { label: 'Free disk space', value: '5 GB hard disk space' },
  { label: 'Operating systems', value: 'Windows 2000 or NT' },
];

const FEATURES = [
  'Complete data management made easy',
  'Software can control multiple scales, traffic lights, and gates',
  'GUI editor makes it easy to configure screens',
  'Customizable reports and tickets',
  'Versions for forestry, agriculture, and waste industries',
  'Presets speed transactions by entering data automatically',
  'Optional unattended weighing capabilities',
  'Sampling (step or random), contract support, taxes, and surcharges',
  'Weights and Measures log',
];

const TABS = [
  { id: 'development', label: 'Development', icon: Globe },
  { id: 'design', label: 'Design', icon: ImageIcon },
  { id: 'specs', label: 'Specifications', icon: Settings },
  { id: 'features', label: 'Features & Benefits', icon: Truck },
];

function TabContent({ id }) {
  if (id === 'development') {
    return <p className="text-sm leading-relaxed text-steel-500 sm:text-[0.95rem]">{DEVELOPMENT}</p>;
  }
  if (id === 'design') {
    return <p className="text-sm leading-relaxed text-steel-500 sm:text-[0.95rem]">{DESIGN}</p>;
  }
  if (id === 'specs') {
    return (
      <div className="grid gap-4 sm:grid-cols-3">
        {SPECS.map((s) => (
          <div key={s.label} className="rounded-xl border border-steel-100 bg-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">{s.label}</p>
            <p className="mt-1.5 text-sm font-medium text-primary">{s.value}</p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {FEATURES.map((f, i) => (
        <li key={i} className="flex gap-3 rounded-lg border border-steel-100 bg-surface p-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
            {i + 1}
          </span>
          <span className="text-sm leading-snug text-steel-500">{f}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SoftwareShowcase() {
  const [active, setActive] = useState('development');

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16">
      <div className="container-x relative">
        <div className="mb-8 text-center sm:mb-10">
          <span className="eyebrow">Our Platform</span>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            <span className="font-bold text-primary">Software </span>
            <span className="italic text-steel-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              Division
            </span>
          </h2>
        </div>

        {/* two software screenshots */}
        <motion.div
          className="mb-10 grid gap-4 sm:grid-cols-2 sm:gap-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {[SCREEN1, SCREEN2].map((src, i) => (
            <div
              key={i}
              className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-steel-100 bg-surface shadow-card"
            >
              {src ? (
                <img src={src} alt={`Digital's Auto Weighment Software screen ${i + 1}`} className="h-full w-full object-cover" />
              ) : (
                <span className="px-4 text-center text-sm text-steel-300">Screenshot coming soon</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* tabs */}
        <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {TABS.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                aria-pressed={isActive}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors duration-200 sm:text-sm ${
                  isActive ? 'bg-primary text-white shadow-card' : 'bg-surface text-steel-500 hover:bg-primary-50'
                }`}
              >
                <t.icon size={16} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-2xl border border-steel-100 bg-white p-6 shadow-card sm:p-8"
          >
            <TabContent id={active} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}