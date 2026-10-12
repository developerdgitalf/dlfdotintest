import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import PageHeader from "../../../components/PageHeader/PageHeader";
import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";

import ArticlesPapersGrid from "../../../components/FeaturedInsights/TechHandOuts/ArticlesPapersGrid";
export default function ResearchMarketStudyPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="TECH HANDOUTS"
        description=""
        backgroundImage="/images/why-digital-fabric-hero-image-3.jpg"
      
      />

      {/* Research & Market Study Page Sections */}
      <section id="services-content">
        {/* Research & Market Study sections will be added here */}

<ArticlesPapersGrid />
    

      </section>



      {/* Reusable Service Navigation Cards */}
      

      <Footer />
    </main>
  );
}