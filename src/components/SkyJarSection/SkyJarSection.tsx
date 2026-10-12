"use client";

import { useEffect, useRef, useState } from "react";
import "./SkyJarSection.css";

export default function SkyJarSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Run the animation only once.
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`sky-jar-section ${
        isVisible ? "sky-animation-active" : ""
      }`}
    >
      <div className="sky-jar-container">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="sky-jar-content">
          <div className="sky-line" />

          <h1>
  <span>EVERYONE NEEDS THE</span>
  <br />
  <span>SKY IN A JAR</span>
</h1>

          <h2>
            WE NEVER SAID
            <br />
            IT&apos;S IMPOSSIBLE.
          </h2>
        </div>


        {/* =========================================
            RIGHT VISUAL
        ========================================= */}

        <div className="jar-visual">

          {/* =====================================
              SKY — ONLY THIS ANIMATES
          ===================================== */}

          <div className="jar-sky-window">
            <img
              className="falling-sky-image"
              src="/images/sky.png"
              alt=""
              aria-hidden="true"
            />
          </div>


          {/* =====================================
              STATIC HAND + GLASS JAR
              ONE SINGLE IMAGE
          ===================================== */}

          <img
            className="jar-image"
            src="/images/glass-jar.png"
            alt="Hand holding a glass jar filled with the sky"
          />

        </div>

      </div>
    </section>
  );
}