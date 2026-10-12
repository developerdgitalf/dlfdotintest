import styles from "./TeamIntroduction.module.css";

export default function TeamIntroduction() {
  return (
    <section className={styles.introductionSection}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <p>
            Learning and growing along with like-minded individuals is the best
            gift one can ever get.
          </p>

          <p>
            Building an empirical advisory ecosystem with pragmatic and
            diversified experience in various leadership roles, technology
            disciplines, versatile engagements, and industry functions.
          </p>

          <p>
            Comprehensive expertise in designing, defining, developing, and
            delivering Strategic marketing, IT service management,
            Business-Service-process transformation, Dev-ops, and Emerging
            technologies (AI-Automation) solution for effective outcomes.
          </p>
        </div>

        {/* Right Side – Overlapping Images */}
        <div className={styles.artwork}>
          <img
            src="/images/our-team/team-1.png"
            alt=""
            className={`${styles.block} ${styles.blockOne}`}
          />

          <img
            src="/images/our-team/team-2.png"
            alt=""
            className={`${styles.block} ${styles.blockTwo}`}
          />

          <img
            src="/images/our-team/team-3.png"
            alt=""
            className={`${styles.block} ${styles.blockThree}`}
          />
        </div>
      </div>
    </section>
  );
}