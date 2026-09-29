import AboutHero from '../components/AboutHero';
import OurJourney from '../components/OurJourney';
import JourneyRecap from '../components/JourneyRecap';
import QualityPolicy from '../components/QualityPolicy';
import CompanyOverview from '../components/CompanyOverview';
import VisionAchievements from '../components/VisionAchievements';
import ClientVoices from '../components/ClientVoices';

export default function About() {
  return (
    <>
      <AboutHero />
      <OurJourney />
      <JourneyRecap />
      <QualityPolicy />
      <CompanyOverview />
      <VisionAchievements />
      <ClientVoices />
    </>
  );
}