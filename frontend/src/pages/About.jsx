import Seo from '../components/Seo';
import AboutHero from '../components/AboutHero';
import OurJourney from '../components/OurJourney';
import JourneyRecap from '../components/JourneyRecap';
import QualityPolicy from '../components/QualityPolicy';
import CompanyOverview from '../components/CompanyOverview';
import VisionAchievements from '../components/VisionAchievements';
import AwardsRecognition from '../components/AwardsRecognition';
import ClientVoices from '../components/ClientVoices';

export default function About() {
  return (
    <>
      <Seo
        title="About Digital Weighing Systems | Weighbridge Experts Since 1994"
        description="ISO 9001:2015 weighbridge manufacturer from Bilaspur, Chhattisgarh. 30+ years, 200+ engineers, 30+ locations and national awards for quality."
      />
      <AboutHero />
      <OurJourney />
      <JourneyRecap />
      <QualityPolicy />
      <CompanyOverview />
      <VisionAchievements />
      <AwardsRecognition />
      <ClientVoices />
    </>
  );
}