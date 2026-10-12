import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import ServicesIntroduction from "../../components/Services/ServicesIntroduction";
import OurExpertise from "../../components/Services/OurExpertise";
import CoreDimensions from "../../components/Services/CoreDimensions";
import OurExpertiseIntro from "../../components/Services/OurExpertiseIntro";


import CapabilityGrid from "../../components/Services/CapabilityGrid";
import Footer from "../../components/Footer/Footer";



export default function ServicesPage() {
  return (
    <main>
      <Header />


      <PageHeader
        title="SERVICES"
        backgroundImage="/images/why-digital-fabric-hero-image-4.jpg"
        description=" It is an enriching experience to be at the vortex of Digital
            transformation and drive it in real-time."
      />
    
      <ServicesIntroduction />
     <OurExpertise/>
<OurExpertiseIntro/>
<CoreDimensions />


<CapabilityGrid/>



<Footer/>

    </main>
  );
}