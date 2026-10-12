import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import FeaturedInsightsIntro from "../../components/FeaturedInsights/FeaturedInsightsIntro";
import FeaturedInsightCategories from "../../components/FeaturedInsights/FeaturedInsightCategories";
import CapabilityCards2 from "../../components/CapabilityCards2/CapabilityCards2";

import Footer from "../../components/Footer/Footer";

export default function FeaturedInsightsPage() {
  return (
    <main>
      <Header />

      <PageHeader
        title="FEATURED INSIGHTS"
        description={`Since 2020, we have been given enough time for soul searching and exploring our own approach to things that were deemed perfect so far…..
and now we are here with a new way to doing things.`}
        backgroundImage="/images/why-digital-fabric-hero-image-3.jpg"
       
      />

      <FeaturedInsightsIntro />

      <FeaturedInsightCategories />

      <CapabilityCards2
        cards={[
          {
            title: "Mindset matters™",
            link: "/featured-insights/mindset-matters",
          },
          {
            title: "Thought Leadership",
            link: "/featured-insights/thought-leadership",
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