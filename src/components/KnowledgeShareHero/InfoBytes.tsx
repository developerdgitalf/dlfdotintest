"use client";

import ImageZoom from "../ImageZoom/ImageZoom";

import "./InfoBytes.css";

export default function InfoBytes() {
  return (
    <section
      className="info-bytes-section"
      aria-label="Infobytes knowledge area"
    >
      <div className="info-bytes-container">

        {/* =================================================
            SINGLE WHITE PANEL
        ================================================= */}

        <div className="info-bytes-panel">

          {/* ===============================================
              LEFT — IMAGE
          =============================================== */}

          <div className="info-bytes-image">
            <ImageZoom
              src="/images/knowledge-share/infographics.svg"
              alt="Infobytes knowledge area"
              className="info-bytes-image-zoom"
            />
          </div>


          {/* ===============================================
              RIGHT — TEXT
          =============================================== */}

          <div className="info-bytes-content">
            <p>
              Research papers that I have contributed,
              Mentored, and authored will help extract the
              first-hand information and insights from the
              study conducted and help you navigate through
              the complexity and adopt novel frameworks,
              approaches, and tools with ease.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}