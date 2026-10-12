"use client";

import ImageZoom from "../../ImageZoom/ImageZoom";
import styles from "./MethodologicalApproach.module.css";

export default function MethodologicalApproach() {
  return (
    <section
      className={styles.methodologySection}
      aria-label="Approach Methodology"
    >
      <div className={styles.container}>

        {/* =================================================
            LEFT — APPROACH METHODOLOGY
            40%
        ================================================= */}

        <div className={styles.approachPanel}>
          <div
            className={styles.approachOverlay}
            aria-hidden="true"
          />

          <div className={styles.approachContent}>
            <h1>
              APPROACH
              <br />
              <span>METHODOLOGY</span>
            </h1>

            <div className={styles.approachText}>
              <p>
                The intention will drive the methodology and articulation,
                while the platform will drive the style and type of content
                promotion.
              </p>

              <p>
                When we get these two things right   There is assured
                visibility.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT — BUILDING CREDIBILITY
            60%
        ================================================= */}

        <div className={styles.credibilityImageSection}>
          <ImageZoom
            src="/images/services/building-credibility.svg"
            alt="Building credibility methodology"
            className={styles.credibilityImage}
            modalClassName="building-credibility-zoom"
          />
        </div>

      </div>
    </section>
  );
}