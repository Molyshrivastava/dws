import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Flag } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

// Finds journey1.*, journey2.* ... in src/assets, whatever the extension is
const imageModules = import.meta.glob("../assets/journey*.*", {
  eager: true,
  import: "default",
});
const findImage = (n) => {
  const key = Object.keys(imageModules).find((p) =>
    new RegExp(`/journey${n}\\.[a-zA-Z]+$`).test(p),
  );
  return key ? imageModules[key] : null;
};

const MILESTONES = [
  {
    year: "1992",
    title: "The Beginning",
    desc: "RR Engineers & Consultants was founded, marking the beginning of our journey. Established as a service-based engineering organization, it laid the foundation for our technical expertise, customer relationships and understanding of the weighing industry.",
    img: findImage(1),
  },
  {
    year: "1994",
    title: "DWS is Established",
    desc: "Digital Weighing Systems Private Limited was established in 1994. With a dedicated focus on weighing solutions, we began building the foundation of what would become a comprehensive industrial weighing and automation organization.",
    img: findImage(2),
  },
  {
    year: "Early Years",
    title: "Building the Foundation",
    desc: "We began with a team of approximately 8–10 employees. Through decades of dedication, technical expertise and customer-focused service, our organization steadily expanded its capabilities, workforce and presence in the weighing industry.",
    img: findImage(3),
  },
  {
    year: "Innovation",
    title: "In-Motion Weighing",
    desc: "As our engineering capabilities developed, we focused on creating solutions specifically suited to Indian industrial requirements. Digital Weighing Systems developed an indigenous in-motion weighing design, an important milestone in our engineering journey.",
    img: findImage(4),
  },
  {
    year: "2025",
    title: "U-Beam Plant Expansion",
    desc: "We expanded our plant and manufacturing capabilities for U-Beam weighbridges, strengthening our manufacturing infrastructure and enhancing our ability to cater to larger industrial requirements.",
    img: findImage(5),
  },
  {
    year: "2026",
    title: "Today",
    desc: "Digital Weighing Systems has grown from its beginnings of 8–10 employees to a team of 200+ professionals, spanning industrial weighing systems, weighbridges, U-Beam weighbridges, load cells, checkweighers, in-motion weighing and industrial automation.",
    img: findImage(6),
  },
];

const dropIn = {
  hidden: { y: -22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};
const headGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

function JourneyCard({ item, isActive, onActivate }) {
  return (
    <motion.button
      layout
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      transition={{ layout: { duration: 0.5, ease: EASE } }}
      className={`relative shrink-0 select-none overflow-hidden text-left shadow-card ring-1 ring-white/15 ${
        isActive ? "w-[340px] rounded-3xl" : "w-[92px] rounded-full"
      }`}
      style={{ height: "clamp(280px, 46vh, 420px)" }}
    >
      {item.img ? (
        <img
          src={item.img}
          alt={item.title}
          draggable="false"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800">
          <Flag size={32} className="text-white/25" strokeWidth={1.3} />
        </div>
      )}

      <div
        className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/40 to-primary-900/10 transition-opacity duration-300"
        style={{ opacity: isActive ? 0.9 : 1 }}
      />
      <span
        className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
        aria-hidden="true"
      />

      {!isActive && (
        <span className="absolute inset-0 flex items-end justify-center pb-6">
          <span
            className="font-heading text-sm font-semibold tracking-[0.15em] text-white/85"
            style={{ writingMode: "vertical-rl" }}
          >
            {item.year}
          </span>
        </span>
      )}

      {isActive && (
        <motion.div
          className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-md">
            <ArrowUpRight size={16} />
          </span>
          <div>
            <span className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              {item.year}
            </span>
            <h3 className="font-heading text-xl font-bold leading-tight text-white sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-white/80">
              {item.desc}
            </p>
          </div>
        </motion.div>
      )}
    </motion.button>
  );
}

export default function OurJourney() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative overflow-hidden bg-primary-900 py-14 sm:py-16"
      aria-label="Our journey"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 85% 10%, rgba(70,120,190,0.28), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <motion.div
          className="mb-8 text-center sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={headGroup}
        >
          <motion.span variants={dropIn} className="eyebrow">
            Our History
          </motion.span>
          <motion.h2
            variants={dropIn}
            className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            <span className="font-bold">Our </span>
            <span
              className="italic text-white/70"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Journey
            </span>
          </motion.h2>
          <motion.p
            variants={dropIn}
            className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-[0.95rem]"
          >
            From RR Engineers & Consultants in 1992 to a 200+ strong engineering
            team today — hover or tap a milestone to explore it.
          </motion.p>
        </motion.div>

        <motion.div
          className="no-scrollbar flex gap-3 overflow-x-auto pb-2 sm:gap-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          {MILESTONES.map((item, i) => (
            <JourneyCard
              key={item.year}
              item={item}
              isActive={i === active}
              onActivate={() => setActive(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
