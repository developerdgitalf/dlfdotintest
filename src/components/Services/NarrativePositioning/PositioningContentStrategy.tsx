"use client";

import ImageZoom from "../../ImageZoom/ImageZoom";
import styles from "./PositioningContentStrategy.module.css";

export default function PositioningContentStrategy() {
  return (
    <section className={styles.strategySection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <ImageZoom
            src="/images/services/positioning-content.svg"
            alt="Positioning and Content Strategy"
            className={styles.strategyImage}
          />
        </div>
      </div>
    </section>
  );
}