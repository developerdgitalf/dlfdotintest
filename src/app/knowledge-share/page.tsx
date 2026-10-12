

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import KnowledgeShareIntro from "../../components/KnowledgeShareHero/KnowledgeShareIntro";

import InfoBytes from "../../components/KnowledgeShareHero/InfoBytes";

import KnowledgeShareCategories from "../../components/KnowledgeShareHero/KnowledgeShareCategories";
import PageHeader from "../../components/PageHeader/PageHeader";


export default function KnowledgeSharePage() {
  return (
    <main>

<Header/>

      <PageHeader
        title="KNOWLEDGE AREA"
       backgroundImage="/images/why-digital-fabric-hero-image-2.jpg"

      />

      <KnowledgeShareIntro/>

<InfoBytes />

   
       <KnowledgeShareCategories/>


<Footer/>

    </main>
  );
}