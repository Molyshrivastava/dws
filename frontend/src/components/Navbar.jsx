import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS, PRODUCT_LINKS } from "../data/navLinks";
import logo from "../assets/logo.jpg";

const TRANSPARENT_ROUTES = [
  "/",
  "/about",
  "/software-division",
  "/download",
];

const NAV_HEIGHT = 64;

export default function Navbar() {
  const { pathname } = useLocation();
  const overHero = TRANSPARENT_ROUTES.includes(pathname);

  const [scrolled, setScrolled] = useState(false);
  const [heroSolid, setHeroSolid] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const compute = () => {
      setScrolled(window.scrollY > 24);

      const hero = document.getElementById("page-hero");

      if (hero) {
        const rect = hero.getBoundingClientRect();
        setHeroSolid(rect.bottom <= NAV_HEIGHT);
      } else {
        setHeroSolid(null);
      }
    };

    compute();

    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);

    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileProducts(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const solid =
    mobileOpen || (heroSolid !== null ? heroSolid : scrolled || !overHero);

 
  const menuItems = NAV_LINKS.filter((item) => item.label !== "Awards");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 transition-all duration-300 ${
          solid
            ? "bg-primary-900/90 opacity-100 shadow-lg shadow-black/20 backdrop-blur-md"
            : "opacity-0"
        }`}
      />

      <Link
        to="/"
        aria-label="Digital Weighing Systems - Home"
        className={`logo-tab ${solid ? "" : "logo-tab--tall"}`}
      >
        <span className="logo-tab__edge" aria-hidden="true" />
        <span className="logo-tab__shape" aria-hidden="true" />
        <img
          src={logo}
          alt="Digital Weighing Systems (P) Ltd"
          width="989"
          height="354"
          className="logo-tab__img"
        />
      </Link>

      <div
        className={`container-x relative z-10 flex items-center justify-end transition-all duration-300 ${
          solid ? "h-14" : "h-[72px]"
        }`}
      >
        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {menuItems.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget))
                      setProductsOpen(false);
                  }}
                >
                  <button
                    type="button"
                    className={`nav-link ${
                      pathname.startsWith("/products")
                        ? "nav-link--active"
                        : ""
                    }`}
                    aria-haspopup="true"
                    aria-expanded={productsOpen}
                    onClick={() => setProductsOpen((v) => !v)}
                  >
                    {item.label}

                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        productsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-full w-72 pt-4 transition-all duration-200 ${
                      productsOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-2 opacity-0"
                    }`}
                  >
                    <ul className="overflow-hidden rounded-lg border-t-2 border-accent bg-white p-2 shadow-card-hover">
                      {PRODUCT_LINKS.map((p) => (
                        <li key={p.to}>
                          <Link
                            to={p.to}
                            className="block rounded-md px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface hover:text-primary"
                          >
                            {p.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "nav-link--active" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-0 overflow-y-auto bg-primary-900 px-6 pb-10 pt-24 transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <ul className="divide-y divide-white/10">
          {menuItems.map((item) =>
            item.children ? (
              <li key={item.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-lg font-medium text-white"
                  onClick={() => setMobileProducts((v) => !v)}
                >
                  {item.label}

                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${
                      mobileProducts ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <ul
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileProducts ? "max-h-[30rem] pb-3" : "max-h-0"
                  }`}
                >
                  {PRODUCT_LINKS.map((p) => (
                    <li key={p.to}>
                      <Link
                        to={p.to}
                        className="block py-2.5 pl-4 text-base text-white/75 hover:text-white"
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `block py-4 text-lg font-medium ${
                      isActive ? "text-white" : "text-white/75"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
}