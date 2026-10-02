import { lazy, Suspense, useLayoutEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Stop the browser from restoring a previous scroll position on reload —
// this is what was causing a refresh to land on the footer.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

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

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTopButton />
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