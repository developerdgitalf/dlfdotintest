"use client";

import ImageZoom from "../ImageZoom/ImageZoom";

import "./OurExpertise.css";

export default function OurExpertise() {
  return (
    <section
      className="our-expertise"
      aria-label="Our Expertise"
    >
      <div className="our-expertise__container">

        {/* =========================
            TITLE
        ========================= */}

        <h2 className="our-expertise__title">
          Our Expertise
        </h2>

        {/* =========================
            ACCENT LINE
        ========================= */}

        <div className="our-expertise__line" />

        {/* =========================
            IMAGE
        ========================= */}

        <div className="our-expertise__visual">
          <ImageZoom
            src="/images/services/our-expertise.svg"
            alt="Focus on right attributes and offerings"
            className="our-expertise__image"
          />
        </div>

      </div>
    </section>
  );
}