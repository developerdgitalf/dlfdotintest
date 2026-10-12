import ImageZoom from "../../ImageZoom/ImageZoom";
import styles from "./TIJourneyGrid.module.css";

export default function TIJourneyGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* SECTION TITLE */}
        <div className={styles.headingWrapper}>
          <h2 className={styles.title}>
            Our Approach & Illustration
          </h2>
        </div>

        {/* JOURNEY GRID IMAGE */}
        <ImageZoom
          src="/images/why/business-customer-journey.svg"
          alt="Business Customer Journey Grid"
          className={styles.imageWrapper}
        />
      </div>
    </section>
  );
}