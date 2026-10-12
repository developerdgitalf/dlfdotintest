import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import PageHeader from "../../../components/PageHeader/PageHeader";
import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";

;
import SuccessSecret from "../../../components/FeaturedInsights/ThoughtLeadership/SuccessSecret";
import DigitalCards  from "../../../components/FeaturedInsights/ThoughtLeadership/DgitalCards";

import DigitalTransformationRoadmap from "../../../components/FeaturedInsights/ThoughtLeadership/DigitalTransformationRoadmap";

import AnecdotalPerspective from "../../../components/FeaturedInsights/ThoughtLeadership/AnecdotalPerspective";

import RedesignedITApproach from "../../../components/FeaturedInsights/ThoughtLeadership/RedesignedITApproach";
  

export default function ResearchMarketStudyPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="THOUGHT LEADERSHIP"
        description="BIZ TECH"
        backgroundImage="/images/why-digital-fabric-hero-image-3.jpg"
        
      />

      {/* Research & Market Study Page Sections */}
      <section id="services-content">
        {/* Research & Market Study sections will be added here */}



       < AnecdotalPerspective />
    

      <SuccessSecret/>

      <DigitalCards/>



<DigitalTransformationRoadmap />

<RedesignedITApproach/>

      </section>





      {/* Reusable Service Navigation Cards */}
      <CapabilityCards2
        cards={[
          {
            title: "Mindset Matters",
            link: "/featured-insights/mindset-matters",
          },
          {
            title: "Articles & Papers",
            link: "/featured-insights/articles-papers",
          },
          {
            title: "Tech Handouts",
            link: "/featured-insights/tech-handouts",
          },
        ]}
      />

      <Footer />
    </main>
  );
}