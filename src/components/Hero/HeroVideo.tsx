"use client";

import "./HeroVideo.css";

interface HeroVideoProps {
  videoSrc?: string;
}

export default function HeroVideo({
  videoSrc = "/videos/hero-background-df.mp4",
}: HeroVideoProps) {
  return (
    <section
      className="hero-video-section"
      aria-label="DIGITALFABRIC® Consulting hero"
    >
      <div className="hero-video-container">
        {/* Background video */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div
          className="hero-video-overlay"
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="hero-video-content">
          <span className="hero-video-eyebrow">
            DIGITALFABRIC® CONSULTING
          </span>

          <h1 className="hero-video-heading">
            From AI Enterprise to Frontier Enterprise with confidence,
            control, and continuous value.
          </h1>

          <div className="hero-video-info">
            <p>
              DIGITALFABRIC® Consulting helps organizations drive business
              transformation through execution guidance, using Strategic FDC
              (Forward Deployment Consulting), AI governance, and proprietary
              frameworks.
            </p>

            <a
              href="/why-digital-fabric"
              className="hero-video-button"
            >
              <span>Explore more</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
       
      </div>
    </section>
  );
}