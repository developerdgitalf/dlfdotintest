import styles from "./TeamQuoteStory.module.css";

export default function TeamQuoteStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.storyGrid}>
          
          {/* LEFT — IMAGE */}
          <div className={styles.imageWrapper}>
            <img
              src="/images/abstract/abstract4.png"
              alt="Creative abstract artwork"
              className={styles.image}
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div className={styles.content}>
            <div className={styles.topLine} />

            <p className={styles.description}>
              This quote and the movie <strong>(Ratatouille)</strong> is
              inspiring in many ways. Excellence is the best endeavor when
              pursued with genuine passion and dedication. With a humble
              beginning and relentless perseverance, I have come a long
              successful way. I dedicate my professional success to leaders,
              friends, and mentors who were always there and are with me all
              along.
            </p>

            <button className={styles.readMore} type="button">
              <span>Read More</span>
              <span className={styles.arrow} aria-hidden="true">
                ⟶
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}