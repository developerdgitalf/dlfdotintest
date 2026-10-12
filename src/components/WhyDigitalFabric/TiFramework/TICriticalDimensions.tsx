import Image from "next/image";
import styles from "./TICriticalDimensions.module.css";

export default function TICriticalDimensions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>

          {/* ================= LEFT – IMAGE ================= */}
          <div className={styles.diagramWrapper}>
            <div className={styles.diagramCard}>
              <Image
                src="/images/why/critical-dimensions.svg"
                alt="Three critical dimensions of business transformation"
                fill
                className={styles.criticalDimensionsImagsse}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* ================= RIGHT – CONTENT ================= */}
          <div className={styles.content}>
            <div className={styles.line} />

            <p className={styles.description}>
              3 CRITICAL DIMENSIONS of business transformation initiatives
              that are covered in
            </p>

            <p className={styles.highlight}>
              DIGITALFABRIC® – TI Framework.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}