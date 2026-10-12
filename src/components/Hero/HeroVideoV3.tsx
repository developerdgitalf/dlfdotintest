"use client";

import "./HeroVideoV3.css";

interface HeroVideoV3Props {
  videoSrc?: string;
}

export default function HeroVideoV3({
  videoSrc = "/videos/hero-background-df.mp4",
}: HeroVideoV3Props) {
  return (
    <section className="hero-v3">
      <div className="hero-v3__background">
        <video
          className="hero-v3__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div
          className="hero-v3__overlay"
          aria-hidden="true"
        />
      </div>

      <div className="hero-v3__container">
        <div className="hero-v3__content">
          {/* Left */}
          <div className="hero-v3__left">
            <h1 className="hero-v3__title">
              Enabling enterprises to
              <br />
              achieve sustainability,
              <br />
              resiliency, and agility.
            </h1>

            <span
              className="hero-v3__quote"
              aria-hidden="true"
            >
              &quot;
            </span>
          </div>

          {/* Right */}
          <div className="hero-v3__right">
            <span
              className="hero-v3__line"
              aria-hidden="true"
            />

            <p className="hero-v3__description">
              DIGITALFABRIC® Consulting helps organizations adopt,
              adapt, and accelerate business-transforming digital
              initiatives through strategy, governance frameworks,
              and execution guidance.
            </p>

            <a
              href="#services"
              className="hero-v3__cta"
            >
              <span>See what we do</span>

              <span
                className="hero-v3__arrow"
                aria-hidden="true"
              >
                &gt;
              </span>
            </a>
          </div>
        </div>
      </div>

      <span
        className="hero-v3__accent"
        aria-hidden="true"
      />
    </section>
  );
}