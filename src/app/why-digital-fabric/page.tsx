import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import WhyDigitalFabric from "../../components/WhyDigitalFabric/WhyDigitalFabric";
import TransformationIdeology from "../../components/WhyDigitalFabric/TransformationIdeology";
import DigitalBusinessTransformation from "../../components/WhyDigitalFabric/DigitalBusinessTransformation";
import TransformationFramework from "../../components/WhyDigitalFabric/TransformationFramework";
import AndHow from "../../components/WhyDigitalFabric/AndHow";
import Footer from "../../components/Footer/Footer";

export default function WhyDigitalFabricPage() {
  return (
    <main>
      <Header />
  <PageHeader
  title="WHY DIGITALFABRIC®"
  description="This segment is related to the derived ideology of DIGITALFABRIC® from various technology and business domains to assist enterprises in scaling the digital business transformation initiative."
  backgroundImage="/images/why-digital-fabric-bg.png"
/>
      <WhyDigitalFabric />
        <TransformationIdeology />
<DigitalBusinessTransformation />

<TransformationFramework/>

<AndHow/>

<Footer/>
      
    </main>
  );
}