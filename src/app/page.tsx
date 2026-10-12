import Header from "../components/Header/Header";
import HeroVideo from "../components/Hero/HeroVideo";
import Insights from "../components/Insights/Insights";
import Strength from "../components/Strength/Strength";
import HomePageWhoWeSection from "../components/WhoWeAre/HomePageWhoWeSection";
import SkyBottle from "../components/SkyJarSection/SkyBottle";
import OurExpertise from "../components/OurExpertise/OurExpertise";
import IndustriesEngagements from "../components/IndustriesEngagements/IndustriesEngagements";
import GlobalExpertise from "../components/GlobalExpertise/GlobalExpertise";
import TransformationCTA from "../components/TransformationCTA/TransformationCTA";
import HomeVideo from "../components/video/HomeVideo";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
    <main>
      <Header />
      <HeroVideo />
      <Insights />
       <HomePageWhoWeSection />
      
<HomeVideo />

      <Strength />
      <SkyBottle />
      <OurExpertise />
    
      <IndustriesEngagements />
      <GlobalExpertise />
      <TransformationCTA />
      <Footer />
    </main>
  );
}
