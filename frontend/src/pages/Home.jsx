import { useEffect } from "react";
import Hero from "../components/Hero";
import MDMessage from "../components/MDMessage";
import AboutIntro from "../components/AboutIntro";
import Process from "../components/Process";
import ProductShowcase from "../components/ProductShowcase";
import OurClients from "../components/OurClients";
import AwardsShowcase from '../components/AwardsShowcase';
import Testimonials from '../components/Testimonials';
export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("snap-scroll");
    return () =>
      document.documentElement.classList.remove("snap-scroll");
  }, []);

  return (
    <>
      <Hero />
      <MDMessage />
      <AboutIntro />
      <Process />
      <ProductShowcase />
      <OurClients/>
      <AwardsShowcase />
      <Testimonials />
    </>
  );
}