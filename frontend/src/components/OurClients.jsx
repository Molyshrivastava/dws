import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import client1 from '../assets/client1.webp';
import client2 from '../assets/client2.webp';
import client3 from '../assets/client3.webp';
import client4 from '../assets/client4.webp';
import client5 from '../assets/client5.webp';
import client6 from '../assets/client6.webp';
import client7 from '../assets/client7.webp';
import client8 from '../assets/client8.webp';
import client9 from '../assets/client9.webp';
import client10 from '../assets/client10.webp';
import client11 from '../assets/client11.webp';
import client12 from '../assets/client12.webp';
import client13 from '../assets/client13.webp';
import client14 from '../assets/client14.webp';
import client15 from '../assets/client15.webp';
import client16 from '../assets/client16.webp';
import client17 from '../assets/client17.webp';
import client18 from '../assets/client18.webp';

// ---- Edit clients here: image, name, description ----
const CLIENTS = [
  { img: client1, name: 'Reserve Bank of India (RBI)', desc: "India's central bank, responsible for issuing currency and regulating the country's monetary and banking system." },
  { img: client2, name: 'Karnataka Power Corporation Ltd. (KPCL)', desc: 'A Karnataka state government undertaking that generates and supplies electricity across the state.' },
  { img: client3, name: 'Nuvoco Vistas', desc: "One of India's leading cement manufacturing companies, producing cement, ready-mix concrete and building materials." },
  { img: client4, name: 'Food Corporation of India (FCI)', desc: 'A central government body responsible for procuring, storing and distributing food grains across India to ensure food security.' },
  { img: client5, name: 'SEPCO (Sealing Equipment Products Co.)', desc: 'A manufacturer of industrial sealing equipment and related engineering products.' },
  { img: client6, name: 'UPRVUNL', desc: "The Uttar Pradesh state government's power generation corporation, responsible for producing electricity for the state." },
  { img: client7, name: 'Coal India Limited', desc: "India's largest coal-mining and coal-producing public sector company, supplying coal to power plants and industries nationwide." },
  { img: client8, name: 'Indian Railways', desc: "India's national railway system and one of the largest rail networks in the world, operated by the Government of India." },
  { img: client9, name: 'NTPC', desc: "India's largest power generation company, primarily producing electricity through thermal, hydro and renewable sources." },
  { img: client10, name: 'NECO Group of Industries', desc: 'A diversified Indian industrial group known for cast iron products, steel and foundry-related manufacturing.' },
  { img: client11, name: 'Madhya Pradesh Rajya Vidyut Mandal', desc: "An emblem associated with Madhya Pradesh's state electricity board / its workers' union." },
  { img: client12, name: 'KSK — Power from Knowledge', desc: 'An energy sector organization/group, as indicated by its tagline "Power from Knowledge."' },
  { img: client13, name: 'SAIL', desc: "India's largest government-owned steel producer, manufacturing steel for construction, infrastructure and industrial use." },
  { img: client14, name: 'ITC Limited', desc: 'A major Indian conglomerate with businesses spanning FMCG, hotels, paperboards, packaging and agribusiness.' },
  { img: client15, name: 'MSP Group', desc: 'A diversified Indian business group with interests in sectors such as sugar, power and infrastructure.' },
  { img: client16, name: 'Department of Food & Public Distribution', desc: "A Government of India body focused on safeguarding the nation's food security, closely linked with FCI's mandate." },
  { img: client17, name: 'Gupta', desc: 'Valued partner supporting our nationwide network of weighing solutions.' },
  { img: client18, name: 'ACB (India) Limited', desc: 'An Indian engineering company known for manufacturing conveyor systems, material handling equipment and industrial machinery.' },
];

// ---- Edit stats here ----
const STATS = [
  { target: 1000, label: 'Completed Projects' },
  { target: 850, label: 'Happy Customers' },
  { target: 30, label: 'Questions Answered' },
];

const EASE = [0.22, 1, 0.36, 1];

/* ---------- one client card: logo fills top half by default, expands to full card on hover ---------- */
function ClientCard({ img, name, desc }) {
  return (
    <div className="group relative h-[260px] w-[230px] shrink-0 select-none overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card transition-all duration-400 ease-out hover:-translate-y-1.5 hover:shadow-card-hover hover:border-accent/50 sm:h-[280px] sm:w-[250px]">
      {/* image: top 45% by default, grows to fill the whole card on hover */}
      <div className="absolute inset-x-0 top-0 flex h-[45%] items-center justify-center bg-surface p-4 transition-all duration-400 ease-out group-hover:h-full group-hover:p-8">
        <img
          src={img}
          alt={name}
          draggable="false"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* text: bottom half by default, fades out on hover */}
      <div className="absolute inset-x-0 bottom-0 top-[45%] flex flex-col justify-start p-4 transition-opacity duration-300 group-hover:opacity-0">
        <span className="mb-2 h-[2px] w-8 shrink-0 bg-accent" aria-hidden="true" />
        <p className="font-heading text-sm font-semibold leading-snug text-primary">{name}</p>
        <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-steel-500">{desc}</p>
      </div>
    </div>
  );
}

/* ---------- scrollable row, plus arrow buttons (beside on desktop, below on mobile) ---------- */
function ClientRow() {
  const trackRef = useRef(null);
  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  const ArrowButtons = ({ className = '' }) => (
    <div className={className}>
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Previous clients"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-steel-100 bg-white text-primary shadow-card transition-colors hover:bg-primary-50"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Next clients"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-card transition-transform hover:scale-105"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-4">
        <div ref={trackRef} className="no-scrollbar flex flex-1 gap-4 overflow-x-auto scroll-smooth py-2 sm:gap-5">
          {CLIENTS.map((c) => (
            <ClientCard key={c.name} img={c.img} name={c.name} desc={c.desc} />
          ))}
        </div>

        {/* desktop: stacked beside the row */}
        <ArrowButtons className="hidden shrink-0 flex-col gap-3 sm:flex" />
      </div>

      {/* mobile: centered row below the carousel, since there's no room beside it */}
      <ArrowButtons className="mt-5 flex justify-center gap-4 sm:hidden" />
    </div>
  );
}

/* ---------- one stat: counts up from 0 the moment it enters view ---------- */
function StatCounter({ target, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      setValue(0);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.5,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-bold text-primary sm:text-5xl">
        {value}
        <span className="text-accent">+</span>
      </p>
      <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-steel-500 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export default function OurClients() {
  return (
    <section className="snap-section relative flex flex-col justify-center overflow-hidden bg-white py-12 sm:py-16">
      {/* faint dot texture, consistent with the other light sections */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(#0A2E5C12 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <span className="eyebrow">Our Network</span>
        <h2 className="mb-2 text-2xl sm:text-3xl lg:text-4xl">Our Valuable Clients</h2>
        <p className="mb-7 max-w-xl text-sm leading-relaxed text-steel-500 sm:text-[0.95rem]">
          Trusted by 18+ leading names across coal, power, cement and food-grain industries.
        </p>

        <ClientRow />
      </div>

      <div className="container-x relative mt-9 sm:mt-12">
        <div className="grid grid-cols-1 gap-6 rounded-2xl bg-surface px-6 py-6 shadow-card sm:grid-cols-3 sm:gap-4 sm:px-10 sm:py-7">
          {STATS.map((s) => (
            <StatCounter key={s.label} target={s.target} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}