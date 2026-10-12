"use client";

import ImageZoom from "../../ImageZoom/ImageZoom";

import "./InformationTechnology.css";

interface InformationTechnologyProps {
  image?: string;
}

export default function InformationTechnology({
  image = "/images/knowledge-share/ai-automation.svg",
}: InformationTechnologyProps) {
  return (
    <section
      className="information-technology-section"
      aria-label="Information Technology"
    >
      <div className="information-technology-container">

        {/* =================================================
            IMAGE — CLICK TO ZOOM
        ================================================= */}

        <div className="information-technology-image-wrap">
          <ImageZoom
            src={image}
            alt="Information Technology"
            className="information-technology-image"
          />
        </div>

      </div>
    </section>
  );
}