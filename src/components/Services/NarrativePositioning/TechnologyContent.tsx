import styles from "./TechnologyContent.module.css";

export default function TechnologyContent() {
  return (
    <section className={styles.technologySection}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <h2>Technology &amp; Business – Content Designing</h2>

        <p>
          The PESTEL situations during the last few months have shifted the
          velocity and changed every possible way of doing business. Especially
          with increasing digital medium presence and participation, every
          enterprise is producing content that is overwhelming for customers to
          consume, process, and relate.
        </p>
      </div>
    </section>
  );
}