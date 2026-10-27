import Seo from '../components/Seo';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import MDMessage from '../components/MDMessage';
import SolutionsGrid from '../components/SolutionsGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import IndustriesServed from '../components/IndustriesServed';
import AboutIntro from '../components/AboutIntro';
import Process from '../components/Process';
import ProductShowcase from '../components/ProductShowcase';
import OurClients from '../components/OurClients';
import Testimonials from '../components/Testimonials';
import HomeFooterCTA from '../components/HomeFooterCTA';

export default function Home() {
  return (
    <>
      <Seo
        title="Weighbridge Manufacturer in India | Digital Weighing Systems"
        description="ISO 9001:2015 manufacturer of rail in-motion, road and unmanned weighbridges since 1994. 1000+ systems maintained pan-India. Get a quote."
      />
      <Hero />
      <TrustStrip />
      <MDMessage />
      <SolutionsGrid />
      <WhyChooseUs />
      <IndustriesServed />
      <AboutIntro />
      <Process />
      <ProductShowcase />
      <OurClients />
      <Testimonials />
      <HomeFooterCTA />
    </>
  );
}