import { lazy, Suspense, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const SoftwareDivision = lazy(() => import('./pages/SoftwareDivision'));
const Download = lazy(() => import('./pages/Download'));

const Contact = lazy(() => import('./pages/Contact'));

const RailWeighBridges = lazy(() => import('./pages/products/RailWeighBridges'));
const RoadWeighBridges = lazy(() => import('./pages/products/RoadWeighBridges'));
const UnmannedWeighBridge = lazy(() => import('./pages/products/UnmannedWeighBridge'));
const SpareParts = lazy(() => import('./pages/products/SpareParts'));
const OnBoardWeighing = lazy(() => import('./pages/products/OnBoardWeighing'));
const BeltWeighing = lazy(() => import('./pages/products/BeltWeighing'));
const BinTankWeighing = lazy(() => import('./pages/products/BinTankWeighing'));

// Only these routes use full-page snap scrolling. Controlled from one place,
// synced to <html> before paint, so it can never be left on by mistake on a
// page (like About) that has no snap sections — that mismatch is what was
// causing the jump straight to the footer.
const SNAP_ROUTES = ['/'];

function ScrollAndSnapManager() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const shouldSnap = SNAP_ROUTES.includes(pathname);
    document.documentElement.classList.toggle('snap-scroll', shouldSnap);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window.HTMLElement.prototype ? 'instant' : 'auto' });
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <>
      <ScrollAndSnapManager />
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/software-division" element={<SoftwareDivision />} />
        <Route path="/download" element={<Download />} />
     
        <Route path="/contact" element={<Contact />} />

        <Route path="/products/rail-weigh-bridges" element={<RailWeighBridges />} />
        <Route path="/products/road-weigh-bridges" element={<RoadWeighBridges />} />
        <Route path="/products/unmanned-weigh-bridge" element={<UnmannedWeighBridge />} />
        <Route path="/products/spare-parts" element={<SpareParts />} />
        <Route path="/products/on-board-weighing" element={<OnBoardWeighing />} />
        <Route path="/products/belt-weighing" element={<BeltWeighing />} />
        <Route path="/products/bin-tank-weighing" element={<BinTankWeighing />} />
      </Route>
    </Routes>
  );
}