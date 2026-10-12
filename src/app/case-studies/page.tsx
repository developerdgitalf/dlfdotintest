import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import PageHeader from "../../components/PageHeader/PageHeader";
import CaseStudiesGrid from "../../components/CaseStudiesHero/CaseStudiesGrid";
import SuccessStatement from "../../components/CaseStudiesHero/SuccessStatement";
import TIFrameworkBanner from "../../components/CaseStudiesHero/TIFrameworkBanner";
import LivingCaseStudies from "../../components/CaseStudiesHero/LivingCaseStudies";  PDFViewerSection
import PDFViewerSection from "../../components/CaseStudiesHero/PDFViewerSection"; 

import KnowledgeArticles from "../../components/CaseStudiesHero/KnowledgeArticles"; 

export default function CaseStudiesPage() {
  return (
    <main>
      
      <Header/>
<PageHeader
        title="SUCCESS STORIES"
       
        backgroundImage="/images/why-digital-fabric-hero-image-5.jpg"
       
      />



     <SuccessStatement />

     <TIFrameworkBanner />
     <LivingCaseStudies/>
<PDFViewerSection/>

<KnowledgeArticles/>

     


         <Footer/>
      
    </main>
  );
}