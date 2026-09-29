import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight, BadgeCheck, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { PRODUCT_LINKS } from '../data/navLinks';
import logo from '../assets/logo.jpg';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

// ---- Edit here ----
const COMPANY_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Software Division', to: '/software-division' },
  { label: 'Download', to: '/download' },

  { label: 'Contact', to: '/contact' },
];

const PHONE = { label: '+91-7752-252097', href: 'tel:+917752252097' };
const EMAILS = ['info@digitalweighingsystems.com', 'dwsbsp@yahoo.com'];

const HEAD_OFFICE = 'Plot No. P1 B & C P2, Industrial Area, Tifra, Bilaspur, Chhattisgarh – 495223';
const REGIONAL_OFFICE = 'New No. 5 (Old No. 75/3), 1st Avenue, Ashok Nagar, Chennai (T.N.) – 600083';

// Opens Google Maps searching for the address. For an exact pin, open the place
// in Google Maps, click Share -> Copy link, and paste that link in place of the
// mapSearch(...) call below.
const mapSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const HEAD_OFFICE_MAP = mapSearch(
  'Digital Weighing Systems (P) Ltd, Plot No. P1 B & C P2, Industrial Area, Tifra, Bilaspur, Chhattisgarh 495223'
);
const REGIONAL_OFFICE_MAP = mapSearch(
  'New No. 5 (Old No. 75/3), 1st Avenue, Ashok Nagar, Chennai, Tamil Nadu 600083'
);

// Social links. An icon only shows when its href is filled in.
// Facebook comes from the old website. The old site's Twitter link was just the
// generic twitter.com homepage, so X stays hidden until you add the real profile,
// e.g. href: 'https://x.com/yourhandle'
const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/dwsbsp/',
    path: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z',
  },
  {
    label: 'X (Twitter)',
    href: '',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
].filter((s) => s.href);

// ---------- animation ----------
const group = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const dropIn = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: EASE } },
};

/* column heading with a short red bar */
function ColHeading({ children }) {
  return (
    <div className="mb-4">
      <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white">{children}</h3>
      <span className="mt-2 block h-[2px] w-8 bg-accent" aria-hidden="true" />
    </div>
  );
}

/* link with a red dash that grows on hover */
function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 py-1 text-sm text-white/65 transition-colors duration-200 hover:text-white"
    >
      <span className="h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-3" aria-hidden="true" />
      {children}
    </Link>
  );
}

/* office address that opens Google Maps in a new tab */
function OfficeLink({ title, address, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      aria-label={`${title}: ${address}. Opens in Google Maps`}
      className="group -mx-2 flex gap-3 rounded-lg p-2 transition-colors duration-200 hover:bg-white/5"
    >
      <MapPin size={17} className="mt-0.5 shrink-0 text-accent" />
      <span>
        <span className="block font-semibold text-white">{title}</span>
        <span className="block text-white/65 transition-colors group-hover:text-white/90">{address}</span>
        <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-accent">
          View on map
          <ExternalLink size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </span>
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="snap-end relative overflow-hidden bg-primary-900 text-white">
      {/* dot texture + soft glow, matching the Hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(55% 60% at 12% 0%, rgba(70,120,190,0.28), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* ---------- call-to-action strip ---------- */}
        <motion.div
          className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-9 sm:flex-row sm:items-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div>
            <h2 className="text-2xl leading-tight text-white sm:text-3xl">
              <span className="font-bold">Need a weighing solution? </span>
              <span className="italic text-white/70" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                Let's talk.
              </span>
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/60">
              Tell us your capacity and site requirements. Our team will get back to you with the right system.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-accent">
              Request a Quote <ArrowUpRight size={16} />
            </Link>
            <a href={PHONE.href}
              className="btn border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-primary"
            >
              <Phone size={16} /> Call Us
            </a>
          </div>
        </motion.div>

        {/* ---------- main columns ---------- */}
        <motion.div
          className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={group}
        >
          {/* brand */}
          <motion.div variants={dropIn} className="lg:col-span-4">
            <Link
              to="/"
              aria-label="Digital Weighing Systems - Home"
              className="inline-block rounded-md bg-white px-4 py-2.5 shadow-card"
            >
              <img src={logo} alt="Digital Weighing Systems (P) Ltd" className="h-12 w-auto" />
            </Link>

            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/90">
              <BadgeCheck size={17} className="text-accent" />
              An ISO 9001:2015 Company
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Manufacturer, exporter and supplier of electronic weighing systems, built on precision and trusted for
              decades.
            </p>

            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:ring-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* company */}
          <motion.div variants={dropIn} className="lg:col-span-2">
            <ColHeading>Company</ColHeading>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <FooterLink to={l.to}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* products */}
          <motion.div variants={dropIn} className="lg:col-span-3">
            <ColHeading>Products</ColHeading>
            <ul>
              {PRODUCT_LINKS.map((l) => (
                <li key={l.to}>
                  <FooterLink to={l.to}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* contact */}
          <motion.div variants={dropIn} className="sm:col-span-2 lg:col-span-3">
            <ColHeading>Contact</ColHeading>
            <ul className="space-y-2 text-sm">
              <li>
                <OfficeLink title="Head Office" address={HEAD_OFFICE} href={HEAD_OFFICE_MAP} />
              </li>
              <li>
                <OfficeLink title="Regional Office" address={REGIONAL_OFFICE} href={REGIONAL_OFFICE_MAP} />
              </li>
              <li className="flex gap-3 pt-2 text-white/65">
                <Phone size={17} className="mt-0.5 shrink-0 text-accent" />
                <a href={PHONE.href} className="transition-colors hover:text-white">
                  {PHONE.label}
                </a>
              </li>
              <li className="flex gap-3 text-white/65">
                <Mail size={17} className="mt-0.5 shrink-0 text-accent" />
                <span className="flex flex-col">
                  {EMAILS.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="break-all transition-colors hover:text-white">
                      {e}
                    </a>
                  ))}
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ---------- bottom bar ---------- */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-5 text-xs text-white/50 sm:flex-row sm:text-sm">
          <p>© {year} Digital Weighing Systems (P) Ltd. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
          >
            Back to top
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white shadow-card transition-transform duration-300 group-hover:-translate-y-1">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}