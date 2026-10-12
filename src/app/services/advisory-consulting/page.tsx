import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import PageHeader from "../../../components/PageHeader/PageHeader";

// Advisory & Consulting sections
// We will import the new components here as we create them.

import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";

import AdvisoryConsultingIntro from "../../../components/Services/AdvisoryConsulting/AdvisoryConsultingIntro";
import AdvisoryServices from "../../../components/Services/AdvisoryConsulting/AdvisoryServices";
import AdvisoryOverview from "../../../components/Services/AdvisoryConsulting/AdvisoryOverview";

import BusinessTransformation from "../../../components/Services/AdvisoryConsulting/BusinessTransformation";

import CTQSuccessSection from "../../../components/Services/AdvisoryConsulting/CTQSuccessSection";
import DigitalBusinessTransformation from "../../../components/Services/AdvisoryConsulting/DigitalBusinessTransformation";



export default function AdvisoryConsultingPage() {
  return (
    <main>
      <Header />

      {/* Page Hero */}
      <PageHeader
        title="ADVISORY & CONSULTING"
        description=""
        backgroundImage="/images/why-digital-fabric-hero-image-4.jpg"
        
      />


<AdvisoryConsultingIntro />





<BusinessTransformation/>

<DigitalBusinessTransformation/>

<CTQSuccessSection/>

      {/* Main Page Content */}
      <section id="services-content">
        {/* Advisory & Consulting sections will be added here */}
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
            link: "/services/business-capability-enablement",
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