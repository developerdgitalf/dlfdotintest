import "./FeaturedInsightsIntro.css";

const FeaturedInsightsIntro = () => {
  return (
    <section className="featured-insights-intro">
      <div className="site-container-small">
        {/* Two-column introduction */}
        <div className="featured-insights-intro__grid">
          
          {/* Left content */}
          <div className="featured-insights-intro__content">
            <h2>
              Now we are here with a new approach and changed the way to doing
              things, living and also our thought processes.
            </h2>

        

            <p></p>
          </div>

          {/* Right image */}
          <div className="featured-insights-intro__image">
            <img
              src="/images/how-we-do-it.png"
              alt="New approach and evolving thought processes"
            />
          </div>

        </div>

        {/* Statement banner */}
        
      </div>
    </section>
  );
};

export default FeaturedInsightsIntro;