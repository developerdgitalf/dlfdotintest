import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Footer from "../../../components/Footer/Footer";

import DigitalFabricConstructHero from "../../../components/WhyDigitalFabric/DigitalFabricConstruct/DigitalFabricConstructIntro";
import DigitalFabricConstruct from "../../../components/WhyDigitalFabric/DigitalFabricConstruct/DigitalFabricConstruct";

export default function WorkDesignElementsPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="DIGITALFABRIC® LOGO CONSTRUCT"
        backgroundImage="/images/why-digital-fabric-bg.png"
      />

   

      <DigitalFabricConstruct />

      <Footer />
    </main>
  );
}