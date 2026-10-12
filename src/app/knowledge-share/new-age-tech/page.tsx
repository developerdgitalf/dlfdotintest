import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Footer from "../../../components/Footer/Footer";

import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";

import NewAgeTechIntro from "../../../components/KnowledgeShareHero/NewAgeTech/NewAgeTechIntro";
import NewAgeTechnologyPerspective from "../../../components/KnowledgeShareHero/NewAgeTech/NewAgeTechnologyPerspective";

import NewAgeTechArticles from "../../../components/KnowledgeShareHero/NewAgeTech/NewAgeTechArticles";




export default function TIFrameworkPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title=" NEW AGE TECHNOLOGIES"
        description="It is important to understand the technology in the right perspective."
       backgroundImage="/images/why-digital-fabric-hero-image-2.jpg"
      />

  

      <NewAgeTechIntro />

    
<NewAgeTechnologyPerspective/>




   <CapabilityCards2
        cards={[
          {
            title: "Transformation",
            link: "/knowledge-share/transformation",
          },
          {
            title: "AI & Automation",
            link: "/knowledge-share/ai-automation",
          },
          {
            title: "IT Governance",
            link: "/knowledge-share/it-governance",
          },
        ]}
      />
     
     <NewAgeTechArticles/>

      <Footer />
    </main>
  );
}