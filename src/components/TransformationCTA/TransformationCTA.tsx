import styles from "../../styles/TransformationCTA.module.css";

export default function TransformationCTA() {
  return (
    <section className={styles.cta} id="contact">
      {/* Full-width decorative background layer */}
      <div className={styles.backgroundImage} aria-hidden="true" />

      {/* Website content container */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>
            Let's build transformation
            <br />
            with clarity.
          </h2>

          <p>
            DIGITALFABRIC® Consulting helps organizations institutionalize and
            operationalize business transformation attributes across people,
            process, platform, product, and partnership.
          </p>

          <a href="/documents/DF_Brand-Brochure-1.pdf " className={styles.button}>
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}