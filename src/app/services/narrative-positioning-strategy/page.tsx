import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import PageHeader from "../../../components/PageHeader/PageHeader";

import NarrativeStrategyContent from "../../../components/Services/NarrativePositioning/NarrativeStrategyContent";
import TechnologyContent from "../../../components/Services/NarrativePositioning/TechnologyContent";
import PositioningContentStrategy from "../../../components/Services/NarrativePositioning/PositioningContentStrategy";


import AnalyticsEngagement from "../../../components/Services/NarrativePositioning/AnalyticsEngagement";

import MethodologicalApproach from "../../../components/Services/NarrativePositioning/MethodologicalApproach";

import TechnologyProductFirm from "../../../components/Services/NarrativePositioning/TechnologyProductFirm";


import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";



export default function NarrativePositioningStrategyPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title=" NARRATIVE & POSITIONING STRATEGY"
        description=" "
        backgroundImage="/images/why-digital-fabric-hero-image-4.jpg"
             


     


      />

      {/* Your page sections */}
      <section id="services-content">
        {/* Content goes here */}
      </section>



<NarrativeStrategyContent />

<TechnologyContent />

<PositioningContentStrategy />




<AnalyticsEngagement />

<MethodologicalApproach / >

<TechnologyProductFirm />


   <CapabilityCards2
        cards={[
          {
            title: "Business Capability Enablement",
            link: "/services/business-capability",
          },
          {
            title: "Advisory Consulting",
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