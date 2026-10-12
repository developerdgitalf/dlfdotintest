"use client";

import ImageZoom from "../../ImageZoom/ImageZoom";

import "./AgileStrategy.css";

export default function AgileStrategy() {
  return (
    <section
      className="agileStrategy"
      aria-label="Agile Strategy"
    >
      <div className="site-container">

        <div className="agileStrategyGrid">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="agileStrategyContent">

            <h2>
              AGILE
              <br />
              STRATEGY
            </h2>

            <span
              className="agileStrategyLine"
              aria-hidden="true"
            />

            <div className="agileStrategyCopy">

              <p>
                A quick insight to steer, navigate and course-correct the
                initiatives’ direction with a BITE SIZE STRATEGY approach
                offering quick guidance.

                Every strategy should have a shelf life and a review point to
                move to the next set. We provide a documented summary to
                review, revisit and anchor the initiative.

                So everything is documented and aligned at every level of
                strategy, building a MINIMUM VIABLE STRATEGY approach at every
                action point to increase agility and evade approach
                restructuring at every point.
              </p>

            </div>

          </div>

          {/* =====================================================
              RIGHT — BUSINESS & TECHNOLOGY VISUAL
              CLICK TO ZOOM
          ===================================================== */}

          <div className="agileStrategyImageWrap">

            <ImageZoom
              src="/images/why/business-technology.svg"
              alt="Business and Technology Enablement Framework"
              className="agileStrategyImage"
            />

          </div>

        </div>

      </div>
    </section>
  );
}