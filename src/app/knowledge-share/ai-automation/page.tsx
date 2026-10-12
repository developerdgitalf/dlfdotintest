import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Footer from "../../../components/Footer/Footer";

import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";

import AIAndAutomationIntro from "../../../components/KnowledgeShareHero/AIAndAutomation/AIAndAutomationIntro";

import InformationTechnology from "../../../components/KnowledgeShareHero/AIAndAutomation/InformationTechnology";

import AIAutomationArticles from "../../../components/KnowledgeShareHero/AIAndAutomation/AIAutomationArticles";






export default function TIFrameworkPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title=" AI & AUTOMATION"
       backgroundImage="/images/why-digital-fabric-hero-image-2.jpg"
      
      />

  
      <AIAndAutomationIntro/>

      <InformationTechnology/>

    


   <CapabilityCards2
        cards={[
          {
            title: "Transformation",
            link: "/knowledge-share/transformation",
          },
          {
            title: "IT Governance",
            link: "/knowledge-share/it-governance",
          },
          {
            title: "New Age Tech",
            link: "/knowledge-share/new-age-tech",
          },
        ]}
      />
       <AIAutomationArticles/>

      <Footer />
    </main>
  );
}