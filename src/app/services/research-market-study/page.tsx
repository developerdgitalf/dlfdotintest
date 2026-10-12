import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import PageHeader from "../../../components/PageHeader/PageHeader";
import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";

import ResearchMarketStudyIntro from "../../../components/Services/ResearchMarketStudy/ResearchMarketStudyIntro";
import ResearchStudyCards from "../../../components/Services/ResearchMarketStudy/ResearchStudyCards";

import ResearchGuidance from "../../../components/Services/ResearchMarketStudy/ResearchGuidance";

import ResearchCollaboration from "../../../components/Services/ResearchMarketStudy/ResearchCollaboration"; 

import ResearchInsights from "../../../components/Services/ResearchMarketStudy/ResearchInsights";


export default function ResearchMarketStudyPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="RESEARCH & MARKET STUDY"
        description=""
        backgroundImage="/images/why-digital-fabric-hero-image-4.jpg"
       
       
      />

      {/* Research & Market Study Page Sections */}
      <section id="services-content">
        {/* Research & Market Study sections will be added here */}


        < ResearchMarketStudyIntro / >

        <ResearchStudyCards />

        <ResearchGuidance />

        <ResearchCollaboration/>

        <ResearchInsights />


      </section>

      {/* Reusable Service Navigation Cards */}
      <CapabilityCards2
        cards={[
          {
            title: "Narrative & Positioning Strategy",
            link: "/services/narrative-positioning-strategy",
          },
          {
              title: "Business Capability Enablement",
            link: "/services/business-capability",
          },
          {
             title: "Advisory & Consulting",
            link: "/services/advisory-consulting",
          },
        ]}
      />

      <Footer />
    </main>
  );
}