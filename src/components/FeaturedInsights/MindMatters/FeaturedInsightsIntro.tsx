import "./FeaturedInsightsIntro.css";

interface FeaturedInsightsIntroProps {
  image?: string;
}

export default function FeaturedInsightsIntro({
  image = "/images/abstract/abstract8.jpg",
}: FeaturedInsightsIntroProps) {
  return (
    <section className="featured-insights-intro-section">
      <div className="featured-insights-intro-container">

        {/* LEFT CONTENT */}
        <div className="featured-insights-intro-content">
          <p>
            <strong>
              Cloud driving digitization, automation driving work optimization,
              analytics driving insights, and AI driving decision making – are
              illustrations of transformation.
            </strong>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="featured-insights-intro-image">
          <img
            src={image}
            alt="Featured Insights"
          />
        </div>

      </div>
    </section>
  );
}