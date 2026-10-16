import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Footer from "../../../components/Footer/Footer";

import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";


import TransformationProcess from "../../../components/KnowledgeShareHero/Transformation/TransformationProcess";


import ITGovernanceIntro from "../../../components/KnowledgeShareHero/ITGovernance/ITGovernanceIntro";

import ITServiceEvolution from "../../../components/KnowledgeShareHero/ITGovernance/ITServiceEvolution";

import ITSMEcosystem from "../../../components/KnowledgeShareHero/ITGovernance/ITSMEcosystem";

import AIAndAutomationIntro from "../../../components/KnowledgeShareHero/AIAndAutomation/AIAndAutomationIntro";

import InformationTechnology from "../../../components/KnowledgeShareHero/AIAndAutomation/InformationTechnology";
import ArticlesKnowledge from "../../../components/KnowledgeShareHero/Transformation/ArticlesKnowledge";


export default function TIFrameworkPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="Enterprises Transformation"
       backgroundImage="/images/why-digital-fabric-hero-image-2.jpg"

       description="Transformation is a self-initiating continuous process that redesigns an entire persona of core businesses "
      />

  

      <TransformationProcess />

          <AIAndAutomationIntro/>
      
            <InformationTechnology/>
      

     
   <ITGovernanceIntro />

  <ITServiceEvolution/>

   <ITSMEcosystem />

      <ArticlesKnowledge/>

      <Footer />
    </main>
  );
}