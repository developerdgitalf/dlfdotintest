import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import PageHeader from "../../../components/PageHeader/PageHeader";
import CapabilityCards2 from "../../../components/CapabilityCards2/CapabilityCards2";
import MindTransformation from "../../../components/FeaturedInsights/MindMatters/MindTransformation";
import FeaturedInsightsIntro from "../../../components/FeaturedInsights/MindMatters/FeaturedInsightsIntro";
import IntroCloudDrivenNewDesign from "../../../components/FeaturedInsights/MindMatters/IntroCloudDrivenNewDesign"; 
import FeaturedInsightsFlow from "../../../components/FeaturedInsights/MindMatters/FeaturedInsightsFlow";



export default function ResearchMarketStudyPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="MINDSETMATTERS®"
        description="IN TECHNOLOGY – All FORCES ARE COMPLEMENTARY."
        backgroundImage="/images/why-digital-fabric-hero-image-3.jpg"
         />

       {/*  buttonText="Explore Our Services" buttonLink="#services-content"  */ }
       
    

      {/* Research & Market Study Page Sections */}
      <section id="services-content">
        {/* Research & Market Study sections will be added here */}

            < IntroCloudDrivenNewDesign /> 

       

        <MindTransformation/>

      

       <FeaturedInsightsFlow />


      </section>





      {/* Reusable Service Navigation Cards */}
      <CapabilityCards2
        cards={[
          {
            title: "Thought Leadership",
            link: "/featured-insights/thought-leadership",
          },
          {
            title: "Articles & Papers",
            link: "/featured-insights/articles-papers",
          },
          {
            title: "Tech Handouts",
            link: "/featured-insights/tech-handouts",
          },
        ]}
      />

      <Footer />
    </main>
  );
}