import styles from "../../styles/GlobalExpertise.module.css";

export default function GlobalExpertise() {
  return (
    <section className={styles.globalExpertise} id="global-expertise">
      <div className={styles.container}>

        {/* =========================================
            LEFT SIDE - EXPERTISE CIRCLES
        ========================================= */}

        <div className={styles.circles}>

          {/* CIRCLE 1 - DOMAIN CONSULTANTS */}
          <div className={`${styles.circle} ${styles.circleOne}`}>
            <span>
              Domain
              <br />
              Consultants
              <br />
              With Average
              <br />
              Experience of 20+
              <br />
              Years
            </span>
          </div>

          {/* CIRCLE 2 - BUSINESS LEADERS */}
          <div className={`${styles.circle} ${styles.circleTwo}`}>
            <span>
              Business
              <br />
              Leaders
              <br />
              Technology
              <br />
              Experts
              <br />
              Industry SME
            </span>
          </div>

          {/* CIRCLE 3 - INDUSTRY & TECHNOLOGY ANALYSTS */}
          <div className={`${styles.circle} ${styles.circleThree}`}>
            <span>
              Industry &
              <br />
              Technology
              <br />
              Analysts
            </span>
          </div>

        </div>

        {/* =========================================
            RIGHT SIDE - GLOBAL STATISTICS
        ========================================= */}

        <div className={styles.stats}>

          <p className={styles.leading}>
            Leading
          </p>

          <div className={styles.reportRow}>
            <span className={styles.number}>
              17+
            </span>

            <span className={styles.reportTitle}>
              Technology Reports
            </span>
          </div>

          {/* REGION BADGES */}

          <div className={styles.badges}>
            <div className={styles.badge}>
              APAC
            </div>

            <div className={styles.badge}>
              US
            </div>

            <div className={styles.badge}>
              EU
            </div>

            <div className={styles.badge}>
              GLOBAL
            </div>
          </div>

          {/* MARKET BADGE */}

          <div className={styles.market}>
            LARGE - MID MARKET
          </div>

        </div>

      </div>
    </section>
  );
}