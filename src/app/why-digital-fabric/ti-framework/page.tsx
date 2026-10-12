import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Footer from "../../../components/Footer/Footer";


import TIFrameworkIntro from "../../../components/WhyDigitalFabric/TiFramework/TIFrameworkIntro";

import IndustryCards from "../../../components/WhyDigitalFabric/TiFramework/IndustryCards";
import DigitalEdgeSection from "../../../components/WhyDigitalFabric/TiFramework/DigitalEdgeSection";
import TIFrameworkDiagram from "../../../components/WhyDigitalFabric/TiFramework/TIFrameworkDiagram";
import TIAdoptAccelerate from "../../../components/WhyDigitalFabric/TiFramework/TIAdoptAccelerate";
import TIJourneyGrid from "../../../components/WhyDigitalFabric/TiFramework/TIJourneyGrid";
import  TIAchievements from "../../../components/WhyDigitalFabric/TiFramework/TIAchievements";
import TiFrameworkSection from "../../../components/WhyDigitalFabric/TiFramework/TiFrameworkSection";



export default function TIFrameworkPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="The TI FRAMEWORK"
       backgroundImage="/images/why-digital-fabric-bg.png"
      />

  <TIFrameworkIntro/>
     <DigitalEdgeSection/>

    <TIFrameworkDiagram />

    <IndustryCards/>

<TIJourneyGrid />

  <TIAchievements/>

      <Footer />
    </main>
  );
}