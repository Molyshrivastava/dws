import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, Phone } from 'lucide-react';
import logo from '../assets/logo.webp';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.15 };

// Real: Facebook, from the old site's footer.
// Twitter/X, LinkedIn, Instagram: no genuine company profile found for any
// of these — the old site's "Twitter" link was just twitter.com's homepage,
// not a real profile. Their icons appear only once you paste a real URL
// into the matching href below.
const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/dwsbsp/',
    path: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z',
  },
  { label: 'X (Twitter)', href: '', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'Instagram', href: '', path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.1 4.1 0 0 1-.98 1.51 4.1 4.1 0 0 1-1.51.98c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.1 4.1 0 0 1-1.51-.98 4.1 4.1 0 0 1-.98-1.51c-.16-.46-.35-1.26-.4-2.43C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.46-.16 1.26-.35 2.43-.4C8.42 2.17 8.8 2.16 12 2.16zm0 3.6a6.24 6.24 0 1 0 0 12.48 6.24 6.24 0 0 0 0-12.48zm0 10.3a4.06 4.06 0 1 1 0-8.12 4.06 4.06 0 0 1 0 8.12zm6.5-10.55a1.46 1.46 0 1 1-2.92 0 1.46 1.46 0 0 1 2.92 0z' },
  { label: 'LinkedIn', href: '', path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z' },
].filter((s) => s.href);

export default function HomeFooterCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-10 sm:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{ background: 'radial-gradient(55% 60% at 12% 0%, rgba(70,120,190,0.28), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <motion.div
          className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div>
            <h2 className="text-xl leading-tight text-white sm:text-2xl lg:text-3xl">
              <span className="font-bold">Need a weighing solution? </span>
              <span className="italic text-white/70" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Let's talk.</span>
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/60">
              Tell us your capacity and site requirements. Our team will get back to you with the right system.
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-3 sm:w-auto">
            <Link to="/contact" className="btn-accent flex-1 justify-center sm:flex-none">
              Request a Quote <ArrowUpRight size={16} />
            </Link>
            <a href="tel:+917752252097" className="btn flex-1 justify-center border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-primary sm:flex-none">
              <Phone size={16} /> Call Us
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <Link to="/" className="inline-block rounded-md bg-white px-4 py-2.5 shadow-card">
            <img src={logo} alt="Digital Weighing Systems (P) Ltd" className="h-10 w-auto sm:h-12" />
          </Link>
          <div className="flex flex-col gap-3 sm:items-end">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
              <BadgeCheck size={17} className="text-accent" /> An ISO 9001:2015 Company
            </p>
            {SOCIALS.length > 0 && (
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:ring-accent"
                  >
                    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}