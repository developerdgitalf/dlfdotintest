"use client";

import "./HeroVideo.css";

interface HeroVideoProps {
  videoSrc?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function HeroVideo({
  videoSrc = "/videos/custom-rad-hero-bg-video.mp4",
  title = "Enabling enterprises to achieve sustainability, resilience, and agility.",
  description = "DIGITALFABRIC® Consulting helps organizations adopt, adapt, and accelerate business-transforming digital initiatives through strategic advisory, governance frameworks, and execution guidance.",
  buttonText = "Explore more",
  buttonLink = "#more",
}: HeroVideoProps) {
  return (
    <section className="hero-video-section" aria-label="DigitalFabric introduction">

      {/* =====================================================
          FULL-SCREEN BACKGROUND VIDEO
      ===================================================== */}

      <div className="hero-video-container">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src={videoSrc}
            type="video/mp4"
          />
        </video>


        {/* =================================================
            VIDEO OVERLAY
        ================================================= */}

        <div
          className="hero-video-overlay"
          aria-hidden="true"
        />


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="hero-video-content">

          {/* ===============================================
              LEFT — HEADING
          =============================================== */}

          <div className="hero-video-heading">

            <span
              className="hero-video-eyebrow"
              aria-hidden="true"
            >
              DIGITALFABRIC® CONSULTING
            </span>

            <h1>
              {title}
            </h1>

          </div>


          {/* ===============================================
              RIGHT — DESCRIPTION + CTA
          =============================================== */}

          <div className="hero-video-info">

            <p>
              {description}
            </p>

            <a
              href={buttonLink}
              className="hero-video-button"
            >
              <span>
                {buttonText}
              </span>

              <span
                className="hero-video-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>

          </div>

        </div>


        {/* =================================================
            BLUE ACCENT
        ================================================= */}

        <span
          className="hero-video-accent"
          aria-hidden="true"
        />

      </div>

    </section>
  );
}