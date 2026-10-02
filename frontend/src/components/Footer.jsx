import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PRODUCT_LINKS } from '../data/navLinks';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

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
const mapSearch = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const HEAD_OFFICE_MAP = mapSearch('Digital Weighing Systems (P) Ltd, Plot No. P1 B & C P2, Industrial Area, Tifra, Bilaspur, Chhattisgarh 495223');
const REGIONAL_OFFICE_MAP = mapSearch('New No. 5 (Old No. 75/3), 1st Avenue, Ashok Nagar, Chennai, Tamil Nadu 600083');

const group = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const dropIn = { hidden: { y: -16, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } } };

function ColHeading({ children }) {
  return (
    <div className="mb-4">
      <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white">{children}</h3>
      <span className="mt-2 block h-[2px] w-8 bg-accent" aria-hidden="true" />
    </div>
  );
}
function FooterLink({ to, children }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-2 py-1 text-sm text-white/65 transition-colors duration-200 hover:text-white">
      <span className="h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-3" aria-hidden="true" />
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary-900 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden="true"
      />

      <motion.div
        className="container-x relative grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:gap-10 sm:py-12 lg:grid-cols-12 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={group}
      >
        <motion.div variants={dropIn} className="lg:col-span-4">
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Manufacturer, exporter and supplier of electronic weighing systems, built on precision and trusted for decades.
          </p>
        </motion.div>

        <motion.div variants={dropIn} className="lg:col-span-2">
          <ColHeading>Company</ColHeading>
          <ul>{COMPANY_LINKS.map((l) => <li key={l.label}><FooterLink to={l.to}>{l.label}</FooterLink></li>)}</ul>
        </motion.div>

        <motion.div variants={dropIn} className="lg:col-span-3">
          <ColHeading>Products</ColHeading>
          <ul>{PRODUCT_LINKS.map((l) => <li key={l.to}><FooterLink to={l.to}>{l.label}</FooterLink></li>)}</ul>
        </motion.div>

        <motion.div variants={dropIn} className="sm:col-span-2 lg:col-span-3">
          <ColHeading>Contact</ColHeading>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3 text-white/65">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <a href={HEAD_OFFICE_MAP} target="_blank" rel="noreferrer" className="hover:text-white">{HEAD_OFFICE}</a>
            </li>
            <li className="flex gap-3 text-white/65">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <a href={REGIONAL_OFFICE_MAP} target="_blank" rel="noreferrer" className="hover:text-white">{REGIONAL_OFFICE}</a>
            </li>
            <li className="flex gap-3 pt-1 text-white/65">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
              <a href={PHONE.href} className="hover:text-white">{PHONE.label}</a>
            </li>
            <li className="flex gap-3 text-white/65">
              <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
              <span className="flex flex-col">
                {EMAILS.map((e) => <a key={e} href={`mailto:${e}`} className="break-all hover:text-white">{e}</a>)}
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50 sm:text-sm">
        © {year} Digital Weighing Systems (P) Ltd. All rights reserved.
      </div>
    </footer>
  );
}