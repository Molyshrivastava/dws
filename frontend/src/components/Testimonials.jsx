import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Quote,
  Scale,
  Star,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

// Finds testimonial1.*, testimonial2.* ... in src/assets whatever the extension is (photos optional)
const imageModules = import.meta.glob("../assets/testimonial*.*", {
  eager: true,
  import: "default",
});
const findImage = (n) => {
  const key = Object.keys(imageModules).find((p) =>
    new RegExp(`/testimonial${n}\\.[a-zA-Z]+$`).test(p),
  );
  return key ? imageModules[key] : null;
};

// ---- DUMMY CONTENT: replace with real projects and reviews ----
const TESTIMONIALS = [
  {
    img: findImage(1),
    project: "80-Tonne Road Weighbridge",
    location: "Chhattisgarh",
    metrics: [
      { v: "80 T", l: "Capacity" },
      { v: "2 yrs", l: "In service" },
    ],
    quote:
      "The weighbridge has run around the clock for over two years with no drift in accuracy. Installation was quick and the calibration report was thorough.",
    name: "Rajesh Verma",
    role: "Plant Manager, Power Generation",
  },
  {
    img: findImage(2),
    project: "In-Motion Rail Weighbridge",
    location: "Madhya Pradesh",
    metrics: [
      { v: "120 T", l: "Wagon load" },
      { v: "24×7", l: "Operation" },
    ],
    quote:
      "Weighing loaded wagons used to be our biggest bottleneck. Now it happens as trains roll through, and the data flows straight into our dispatch records.",
    name: "Anil Sharma",
    role: "Logistics Head, Mining Operations",
  },
  {
    img: findImage(3),
    project: "Unmanned Weighbridge System",
    location: "Odisha",
    metrics: [
      { v: "100%", l: "Automated" },
      { v: "−40%", l: "Gate queue time" },
    ],
    quote:
      "Fully automated, tamper-proof and easy for our drivers. Queue times at the gate dropped noticeably in the very first month.",
    name: "Suresh Patel",
    role: "Operations Manager, Cement Plant",
  },
  {
    img: findImage(4),
    project: "Bin & Tank Weighing System",
    location: "Uttar Pradesh",
    metrics: [
      { v: "±0.1%", l: "Accuracy" },
      { v: "<4 hrs", l: "Support response" },
    ],
    quote:
      "Precise level and quantity readings even in a harsh environment. The support team responded within hours whenever we had a question.",
    name: "Meera Nair",
    role: "Head of Stores, Food Processing",
  },
];

const pad = (n) => String(n).padStart(2, "0");
const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

// ---------- animation variants ----------
const dropIn = {
  hidden: { y: -22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};
const riseIn = {
  hidden: { y: 34, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};
const stagger = (gap = 0.09) => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren: 0.05 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
});

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[active];

  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  return (
    <section
      className="snap-section relative flex flex-col justify-center overflow-hidden bg-surface py-14 sm:py-16"
      aria-label="Client testimonials"
    >
      {/* faint dot grid + soft glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(#0A2E5C12 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 50% at 50% 40%, rgba(255,255,255,0.8), transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* heading: drops in from the top */}
        <motion.div
          className="mb-7 text-center sm:mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger(0.12)}
        >
          <motion.span variants={dropIn} className="eyebrow">
            Testimonials
          </motion.span>
          <motion.h2
            variants={dropIn}
            className="text-3xl leading-tight sm:text-4xl lg:text-5xl"
          >
            <span className="font-bold text-primary">What our clients </span>
            <span
              className="italic text-steel-500"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              say
            </span>
          </motion.h2>
        </motion.div>

        {/* ---------- featured card ---------- */}
        <motion.div
          className="grid overflow-hidden rounded-2xl bg-white shadow-card-hover ring-1 ring-steel-100 lg:h-[clamp(300px,44vh,390px)] lg:grid-cols-[0.9fr_1.1fr]"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* LEFT: project panel (rises from the bottom) */}
          <div className="relative overflow-hidden bg-primary-900 text-white">
            {/* background: project photo if present, otherwise a blueprint grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${active}`}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                {t.img ? (
                  <img
                    src={t.img}
                    alt=""
                    draggable="false"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "34px 34px",
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(70% 70% at 85% 15%, rgba(70,120,190,0.45), transparent 70%)",
                      }}
                    />
                    <Scale
                      className="absolute -bottom-6 -right-6 h-44 w-44 text-white/[0.07]"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                  </>
                )}
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/55 to-primary-900/40" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${active}`}
                className="relative flex h-full flex-col justify-between gap-8 p-6 sm:p-8"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={stagger(0.1)}
              >
                <motion.div
                  variants={riseIn}
                  className="flex items-center justify-between"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium ring-1 ring-white/25 backdrop-blur-md">
                    <MapPin size={13} />
                    {t.location}
                  </span>
                  <span className="font-heading text-sm font-semibold">
                    {pad(active + 1)}
                    <span className="text-white/40"> / {pad(total)}</span>
                  </span>
                </motion.div>

                <div>
                  <motion.p
                    variants={riseIn}
                    className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent"
                  >
                    Project
                  </motion.p>
                  <motion.h3
                    variants={riseIn}
                    className="font-heading text-2xl font-bold leading-tight sm:text-3xl"
                  >
                    {t.project}
                  </motion.h3>

                  <motion.div
                    variants={riseIn}
                    className="mt-5 flex items-center gap-5"
                  >
                    {t.metrics.map((m, i) => (
                      <div key={m.l} className="flex items-center gap-5">
                        {i > 0 && (
                          <span
                            className="h-8 w-px bg-white/20"
                            aria-hidden="true"
                          />
                        )}
                        <div>
                          <p className="font-heading text-xl font-bold leading-none">
                            {m.v}
                          </p>
                          <p className="mt-1 text-[0.7rem] uppercase tracking-wide text-white/60">
                            {m.l}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: review (drops in from the top) */}
          <div className="relative overflow-hidden">
            <Quote
              className="pointer-events-none absolute right-6 top-4 h-24 w-24 text-primary-50 sm:h-32 sm:w-32"
              strokeWidth={1}
              fill="currentColor"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${active}`}
                className="relative flex h-full flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={stagger(0.1)}
              >
                <div>
                  <motion.div
                    variants={dropIn}
                    className="mb-4 flex items-center gap-1"
                    aria-label="5 out of 5 stars"
                  >
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star
                        key={s}
                        size={16}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </motion.div>
                  <motion.p
                    variants={dropIn}
                    className="line-clamp-5 text-xl italic leading-snug text-primary sm:text-2xl lg:text-[1.65rem]"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    “{t.quote}”
                  </motion.p>
                </div>

                <motion.div
                  variants={dropIn}
                  className="flex items-center gap-3 border-t border-steel-100 pt-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white ring-2 ring-accent/70 ring-offset-2 ring-offset-white">
                    {initials(t.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-heading text-base font-semibold text-primary">
                      {t.name}
                    </p>
                    <p className="truncate text-xs text-steel-500 sm:text-sm">
                      {t.role}
                    </p>
                  </div>

                  <div className="ml-auto flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-steel-100 bg-white text-primary shadow-card transition-colors hover:bg-primary-50"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next testimonial"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-card transition-transform hover:scale-105"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ---------- project selector with auto-play progress ---------- */}
        <motion.div
          className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 lg:grid-cols-4"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
        >
          {TESTIMONIALS.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.project}
                type="button"
                onClick={() => setActive(i)}
                aria-current={isActive}
                className={`relative overflow-hidden rounded-xl border p-3 pb-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-accent/40 bg-white shadow-card"
                    : "border-transparent bg-white/50 hover:bg-white/80"
                }`}
              >
                <span
                  className={`block font-heading text-xs font-semibold transition-colors ${
                    isActive ? "text-accent" : "text-steel-300"
                  }`}
                >
                  {pad(i + 1)}
                </span>
                <span
                  className={`mt-0.5 block truncate text-sm font-semibold transition-colors ${
                    isActive ? "text-primary" : "text-steel-500"
                  }`}
                >
                  {item.project}
                </span>

                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-[3px] bg-steel-100">
                    <span
                      key={active}
                      className="tprogress block h-full origin-left bg-accent"
                      style={{
                        animationPlayState: paused ? "paused" : "running",
                      }}
                      onAnimationEnd={next}
                    />
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
