import styles from "./BusinessSuccessSection.module.css";

export default function BusinessSuccessSection() {
  return (
    <section className={styles.businessSuccessSection}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          {/* Left Content */}
          <div className={styles.textContent}>
            <p>
              For business success, CTQ (Critical to Quality) and CTP
              (Critical to Process) attributes should be covered
              comprehensively, preventing effort loss, risk scenarios, and
              safeguarding brand equity to scale and grow.
            </p>
          </div>

          {/* Right Image */}
          <div className={styles.imageWrapper}>
            <img
              src="/images/services/ctq.png"
              alt="Business Success Strategy"
              className={styles.image}
            />
          </div>

        </div>
      </div>
    </section>
  );
}