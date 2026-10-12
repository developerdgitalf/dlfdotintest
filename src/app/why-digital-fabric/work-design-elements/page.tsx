import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import WorkDesignElements from "../../../components/WhyDigitalFabric/WorkDesignElements/WorkDesignElements";
import Footer from "../../../components/Footer/Footer";

import WorkDesignConstituents from "../../../components/WhyDigitalFabric/WorkDesignElements/WorkDesignConstituents";
import WorkDesignConstituents2 from "../../../components/WhyDigitalFabric/WorkDesignElements/WorkDesignConstituents2";
import DigitalFabricInsight from "../../../components/WhyDigitalFabric/WorkDesignElements/DigitalFabricInsight";
import ClientPotential from "../../../components/WhyDigitalFabric/WorkDesignElements/ClientPotential";



export default function WorkDesignElementsPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title=" WORK DESIGN ELEMENTS"
     description="We have witnessed the evolution of enterprise work design constituents in the past two decades."
        backgroundImage="/images/why-digital-fabric-bg.png" 
    
      />

      <WorkDesignElements />
  <WorkDesignConstituents />
    <WorkDesignConstituents2 />
    <DigitalFabricInsight/>
   <ClientPotential/>


      <Footer />
    </main>
  );
}