import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Footer from "../../../components/Footer/Footer";

import TeamQuotes from "../../../components/WhyDigitalFabric/OurTeam/TeamQuotes";

import FounderProfile from "../../../components/WhyDigitalFabric/OurTeam/FounderProfile";


import LearningGrowth from "../../../components/WhyDigitalFabric/OurTeam/LearningGrowth";

import AdvisorsTeam from "../../../components/WhyDigitalFabric/OurTeam/AdvisorsTeam";






export default function TIFrameworkPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="OUR TEAM"
       backgroundImage="/images/why-digital-fabric-bg.png"
      />

  
<TeamQuotes />
    
<FounderProfile/>


<LearningGrowth />
<AdvisorsTeam/>



      <Footer />
    </main>
  );
}