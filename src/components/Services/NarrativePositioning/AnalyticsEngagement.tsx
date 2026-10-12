import styles from "./AnalyticsEngagement.module.css";

export default function AnalyticsEngagement() {
  return (
    <section className={styles.analyticsSection}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.intro}>
          <h1>
            Competitive differentiation
         
            
          </h1>

          <h4>
            is a very niche area that needs experience in working closely with
            the analysts and, at the same time, a technologist mindset to
            calibrate the response.
          </h4>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.visualContent}>
          {/* TOP BLOCK */}
           <div className={styles.robotCard}>
            <img
              src="/images/services/analytics-engagement.jpg"
              alt="Technology and analyst engagement"
            />

            <div className={styles.robotOverlay}>
              <h4>
                Position your organization as per capability, and strategy in
                 comparison with the relative competitors.
              </h4>
            </div>
          </div>

          {/* BOTTOM IMAGE BLOCK */}
          <div className={styles.robotCard}>
            <img
              src="/images/services/analytics-engagement2.jpg"
              alt="Technology and analyst engagement"
            />

            <div className={styles.robotOverlay}>
              <h4>
                Recognition and citation for the providers strengths and
                opening the doors for opportunities.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}