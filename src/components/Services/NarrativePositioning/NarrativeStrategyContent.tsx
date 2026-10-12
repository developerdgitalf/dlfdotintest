"use client";

import ImageZoom from "../../ImageZoom/ImageZoom";

import "./NarrativeStrategyContent.css";

export default function NarrativeStrategyContent() {
  return (
    <section
      className="narrative-strategy-content"
      aria-labelledby="narrative-strategy-content-title"
    >
      <div className="narrative-strategy-content__container">

        <div className="narrative-strategy-content__featured">

          {/* =================================================
              LEFT CONTENT — 60%
          ================================================= */}

          <div className="narrative-strategy-content__content">
            <h3 id="narrative-strategy-content-title">
              Relevant messaging creates connection and connection wins
              customers.
              <br />
              <strong>
                CONTEXT - CONTENT - CONSTRUCT
              </strong>
            </h3>

            {/*
            <div className="narrative-strategy-content__line" />

            <p>
              Creating a clear and meaningful narrative that connects business
              strategy, brand purpose, and content to build relevance,
              consistency, and stronger engagement.
            </p>
            */}
          </div>

          {/* =================================================
              RIGHT IMAGE — 40%
          ================================================= */}

          <div className="narrative-strategy-content__image">
            <ImageZoom
              src="/images/services/narrative-positioning.jpg"
              alt="Narrative strategy and content"
              className="narrative-strategy-content__image-zoom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}