import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Footer from "../../../components/Footer/Footer";

import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";



import ITGovernanceIntro from "../../../components/KnowledgeShareHero/ITGovernance/ITGovernanceIntro";

import ITServiceEvolution from "../../../components/KnowledgeShareHero/ITGovernance/ITServiceEvolution";

import ITSMEcosystem from "../../../components/KnowledgeShareHero/ITGovernance/ITSMEcosystem";

import ITGovernanceArticles from "../../../components/KnowledgeShareHero/ITGovernance/ITGovernanceArticles";




export default function TIFrameworkPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="DIGITAL GOVERNANCE "
   description="Enterprise Service Management"

       backgroundImage="/images/why-digital-fabric-hero-image-2.jpg"
      />

  

      <ITGovernanceIntro />

  <ITServiceEvolution/>

   <ITSMEcosystem />




   <CapabilityCards2
        cards={[
          {
            title: "Transformation",
            link: "/knowledge-share/transformation",
          },
          {
            title: " AI & Automation",
            link: "/knowledge-share/ai-automation",
          },
          {
            title: "New Age Tech",
            link: "/knowledge-share/new-age-tech",
          },
        ]}
      />
     
<ITGovernanceArticles />
      <Footer />
    </main>
  );
}