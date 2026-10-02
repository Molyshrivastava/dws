import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Download, FileText, TrainFront } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];

const imgModules = import.meta.glob('../../assets/railweigh*.*', { eager: true, import: 'default' });
const IMAGES = Object.keys(imgModules).sort().map((k) => imgModules[k]);

const pdfModules = import.meta.glob('../../assets/downloads/rail*.pdf', { eager: true, import: 'default' });
const BROCHURE = Object.keys(pdfModules).find((p) => p.endsWith('/rail-weigh-bridges.pdf'));
const BROCHURE_URL = BROCHURE ? pdfModules[BROCHURE] : null;

// ---- Content, extracted from the old site's three product blocks ----
const SYSTEMS = [
  {
    id: 'in-motion',
    tab: 'In-Motion',
    title: 'Rail In-Motion Weighbridge',
    tag: 'MW 2500',
    img: IMAGES[0],
    intro:
      'Digital\'s "MW 2500" In-motion Weighing System is an RDSO-approved product which overcomes many of the limitations inherent in conventional static weighing systems by being able to weigh wagons on the move. This state-of-the-art yet simple in-motion weighing system has been designed and developed indigenously. MW2500 detects the different types of wagon to initiate axle or bogie weighing, with remarkable compatibility to achieve accurate weighment even up to a speed of 15 km/hr.',
    features: ['RDSO Approved', 'OIML & GOI Approved', 'Power plants, cement plants, pvt siding', 'High accuracy, time saving'],
    specs: [
      { v: '15 km/hr', l: 'Max weighing speed' },
      { v: '35 T', l: 'Capacity per axle' },
      { v: '140 T', l: 'Per wagon / coach' },
      { v: 'Bi-directional', l: 'Weighing capability' },
      { v: 'Mixed rake', l: 'Weighing support' },
      { v: 'Tamper proof', l: 'Anti-roll back protected' },
    ],
    extraSpecs: ['Advance over-speed warning system', 'Wagon or coach identification', 'Accidental mal-adjustment protection'],
  },
  {
    id: 'static',
    tab: 'Static',
    title: 'Static Rail Weighbridge',
    tag: 'Full Draft',
    img: IMAGES[1],
    intro:
      'The static rail weighbridge is a load-cell-based weighing system with a prefabricated supporting structure. It is generally used for self-assessment, valued for its high accuracy.',
    features: ['High accuracy', 'Load cell based', 'Steel structure, long life', 'Fits any industry'],
    specs: [
      { v: '300 MT', l: 'Capacity, up to' },
      { v: 'Load cell', l: 'Trackswitch based' },
      { v: 'Custom', l: 'Software integration available' },
    ],
    extraSpecs: [],
  },
  {
    id: 'tippler',
    tab: 'Wagon Tippler',
    title: 'Wagon Tippler Weighing System',
    tag: 'Bulk Unloading',
    img: IMAGES[2],
    intro:
      'When transporting bulk materials by rail using wagon tipplers, quick and efficient unloading is vital and can affect your bottom line. Our wagon tippler weighing system is a static weighing scale integrated with a wagon tippler, designed to weigh the wagon before and after tippling — giving quick, accurate gross and tare weight readings.',
    features: ['Weighs loose bulk materials', 'Custom-built per tippler', 'Integrates with control systems', 'Up to 150–200 T capacity'],
    specs: [
      { v: '150–200 T', l: 'Capacity range' },
      { v: 'BOXN / BTAP', l: 'Wagon types supported' },
      { v: 'Signal interlock', l: 'Control-system integration' },
    ],
    extraSpecs: [],
    subsections: [
      { title: 'Weighs loose bulk materials', desc: 'Designed to weigh loose bulk materials such as coal, coke, lignite, iron ore, limestone and dolomite from open-type railway wagons.' },
      { title: 'Custom made scale to fit your wagon tippler', desc: 'Custom-built to suit the dimensions of the wagon tippler, available in capacities up to 150–200 tons, and made suitable for various tippler types such as BOXN and BTAP.' },
      { title: 'Integrates with existing wagon-tippler control systems', desc: 'Can be integrated with your wagon tippler control system, with signal interlocks and data communication.' },
    ],
  },
];

const dropIn = { hidden: { y: -18, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: EASE } } };
const group = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

export default function RailShowcase() {
  const [active, setActive] = useState('in-motion');
  const s = SYSTEMS.find((x) => x.id === active);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{ backgroundImage: 'radial-gradient(#0A2E5C12 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* tab pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
          {SYSTEMS.map((sys) => {
            const isActive = sys.id === active;
            return (
              <button
                key={sys.id}
                type="button"
                onClick={() => setActive(sys.id)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-colors duration-200 sm:px-5 sm:text-sm ${
                  isActive ? 'bg-primary text-white shadow-card' : 'bg-surface text-steel-500 hover:bg-primary-50'
                }`}
              >
                {sys.tab}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {/* header row: image + intro */}
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface shadow-card"
              >
                {s.img ? (
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <TrainFront size={48} className="text-steel-200" strokeWidth={1.2} />
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {s.tag}
                </span>
              </motion.div>

              <motion.div initial="hidden" animate="visible" variants={group}>
                <motion.h2 variants={dropIn} className="mb-3 font-heading text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
                  {s.title}
                </motion.h2>
                <motion.p variants={dropIn} className="mb-5 text-sm leading-relaxed text-steel-500 sm:text-[0.95rem]">
                  {s.intro}
                </motion.p>

                <motion.div variants={dropIn}>
                  {BROCHURE_URL ? (
                    <a
                      href={BROCHURE_URL}
                      download
                      className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                    >
                      <Download size={16} /> Download Brochure
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border-2 border-steel-100 px-5 py-2.5 text-sm font-semibold text-steel-300">
                      <FileText size={16} /> Brochure coming soon
                    </span>
                  )}
                </motion.div>

                {/* feature chips */}
                <motion.div variants={group} className="mt-6 flex flex-wrap gap-2.5">
                  {s.features.map((f) => (
                    <motion.span
                      key={f}
                      variants={dropIn}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3.5 py-2 text-xs font-medium text-primary sm:text-sm"
                    >
                      <CheckCircle2 size={14} className="text-accent" />
                      {f}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* spec grid */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="mt-10 sm:mt-12"
            >
              <h3 className="mb-4 font-heading text-lg font-semibold text-primary sm:text-xl">Technical Specification</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {s.specs.map((sp) => (
                  <div key={sp.l} className="rounded-xl border border-steel-100 bg-surface p-4 text-center">
                    <p className="font-heading text-base font-bold text-primary sm:text-lg">{sp.v}</p>
                    <p className="mt-1 text-[0.7rem] text-steel-500 sm:text-xs">{sp.l}</p>
                  </div>
                ))}
              </div>
              {s.extraSpecs.length > 0 && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {s.extraSpecs.map((e) => (
                    <li key={e} className="flex items-center gap-2 text-sm text-steel-500">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {e}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

            {/* wagon tippler sub-sections */}
            {s.subsections && (
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
                className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3"
              >
                {s.subsections.map((sub) => (
                  <div key={sub.title} className="rounded-xl border border-steel-100 bg-white p-5 shadow-card">
                    <h4 className="mb-2 font-heading text-base font-semibold text-primary">{sub.title}</h4>
                    <p className="text-sm leading-relaxed text-steel-500">{sub.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}