"use client";

import ImageZoom from "../../ImageZoom/ImageZoom";

import "./ResearchGuidance.css";

export default function ResearchGuidance() {
  return (
    <section
      className="research-guidance-section"
      aria-label="Research Guidance"
    >
      <div className="research-guidance-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="research-guidance-header">
          <h2>Research Guidance</h2>
        </div>

        {/* =================================================
            IMAGE — CLICK TO ZOOM
        ================================================= */}

        <div className="research-guidance-image">
          <ImageZoom
            src="/images/services/research-guidance.svg"
            alt="Research Guidance"
            className="research-guidance-image-zoom"
          />
        </div>

      </div>
    </section>
  );
}