"use client";

import ImageZoom from "../../ImageZoom/ImageZoom";
import styles from "./CapabilityAlignment.module.css";

const CapabilityAlignment = () => {
  return (
    <section
      className={styles.capabilitySection}
      aria-label="Capability Alignment"
    >
      <div className={styles.container}>

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <div className={styles.heading}>
          <h2>Modernizing the Processes &amp; Abilities</h2>

          <h3>Working on the Right Strategy</h3>
        </div>

        {/* =================================================
            CAPABILITY ALIGNMENT DIAGRAM
            CLICK TO OPEN FULLSCREEN
        ================================================= */}

        <div className={styles.diagramWrapper}>
          <ImageZoom
            src="/images/services/capability-alignment.png"
            alt="Capability alignment and business strategy diagram"
            className={styles.diagram}
          />
        </div>

      </div>
    </section>
  );
};

export default CapabilityAlignment;