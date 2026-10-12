import styles from "./BusinessCapabilityIntro.module.css";

export default function BusinessCapabilityIntro() {
  return (
    <section
      className={styles.introSection}
      aria-label="Business capability introduction"
    >
      <div className={styles.container}>

        {/* =====================================================
            INTRO TEXT
        ===================================================== */}

        <p className={styles.introText}>
          With the change in the core business characteristic, technology has
          a critical part to play.
        </p>


        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div
          className={styles.divider}
          aria-hidden="true"
        >
          <span />
        </div>


        {/* =====================================================
            MAIN STATEMENT
        ===================================================== */}

        <h2 className={styles.statement}>
        The technology and all related components are put together  <br/>to improvise these 3 facets of 
          <br className={styles.desktopBreak} />

          <span className={styles.highlight}>
            SERVICE – PRODUCT – SOLUTION OFFERING.
          </span>
        </h2>

      </div>
    </section>
  );
}