import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Footer from "../../../components/Footer/Footer";

import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";


import TransformationProcess from "../../../components/KnowledgeShareHero/Transformation/TransformationProcess";
import ArticlesKnowledge from "../../../components/KnowledgeShareHero/Transformation/ArticlesKnowledge";




export default function TIFrameworkPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="TRANSFORMATION"
       backgroundImage="/images/why-digital-fabric-hero-image-2.jpg"

       description="Transformation is a self-initiating continuous process that redesigns an entire persona of core businesses "
      />

  

      <TransformationProcess />

     


   <CapabilityCards2
        cards={[
          {
            title: "AI and Automation",
            link: "/knowledge-share/ai-automation",
          },
          {
            title: "IT Governanace",
            link: "/knowledge-share/it-governance ",
          },
          {
            title: "New Age Tech",
            link: "/knowledge-share/new-age-tech",
          },
        ]}
      />
      <ArticlesKnowledge/>

      <Footer />
    </main>
  );
}