
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";

import PdfSlideClient from "../../components/CaseStudiesHero/PdfSlideClient";
import SuccessStatement from "../../components/CaseStudiesHero/SuccessStatement";
import TIFrameworkBanner from "../../components/CaseStudiesHero/TIFrameworkBanner";
import LivingCaseStudies from "../../components/CaseStudiesHero/LivingCaseStudies";
import KnowledgeArticles from "../../components/CaseStudiesHero/KnowledgeArticles";

export default function CaseStudiesPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="SUCCESS STORIES"
        backgroundImage="/images/why-digital-fabric-hero-image-5.jpg"
      />

      <SuccessStatement />

      <TIFrameworkBanner />

      <LivingCaseStudies />

      <PdfSlideClient />

      <KnowledgeArticles />

      <Footer />
    </main>
  );
}
