"use client";

import "./ResearchMarketStudyIntro.css";

export default function ResearchMarketStudyIntro() {
  return (
    <section
      className="research-market-study-intro"
      aria-labelledby="research-market-study-intro-title"
    >
      <div className="research-market-study-intro__container">

        <div className="research-market-study-intro__featured">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="research-market-study-intro__content">

            <h3 id="research-market-study-intro-title">
              Research and market studies provide meaningful insights into
              changing business environments, customer expectations, market
              opportunities, and emerging trends to support informed
              decision-making.
            </h3>


            <p>
             
            </p>

          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="research-market-study-intro__image">
            <img
              src="/images/services/research-study.jpg"
              alt="Research and market study"
            />
          </div>

        </div>

      </div>
    </section>
  );
}