import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import PageHeader from "../../../components/PageHeader/PageHeader";

import BusinessCapabilityIntro from "../../../components/Services/BusinessCapability/BusinessCapabilityIntro";


import ResearchCards from "../../../components/Services/BusinessCapability/ResearchCards";
import CapabilityAlignment from "../../../components/Services/BusinessCapability/CapabilityAlignment";


import BusinessSuccessSection from "../../../components/Services/BusinessCapability/BusinessSuccessSection";

import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";
import AgileStrategy from "../../../components/Services/BusinessCapability/AgileStrategy";



export default function NarrativePositioningStrategyPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="BUSINESS & CAPABILITY ENABLEMENT "
        description="Aligning the organizational capabilities to secure market recognition, business resilience, and future relevance."
        backgroundImage="/images/why-digital-fabric-hero-image-4.jpg"
            
      />

      {/* Your page sections */}
      <section id="services-content">
        {/* Content goes here */}
      </section>



<BusinessCapabilityIntro />
<AgileStrategy />
  

   
<CapabilityAlignment />


<ResearchCards />

<BusinessSuccessSection  />


<CapabilityCards2
          cards={[
            {
              title: "Narrative & Positioning Strategy  ",
              
              link: "/services/narrative-positioning-strategy",
            },
            {
              title: "Advisory & Consulting",
             
              link: "/services/advisory-consulting",
            },
            {
              title: "Research & Market Study",
             
              link: "/services/research-market-study",
            },
          ]}
        />



      <Footer />
    </main>
  );
}