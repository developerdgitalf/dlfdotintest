import Image from "next/image";
import styles from "./TIFrameworkContent.module.css";

export default function TIFrameworkContent() {
  return (
    <section
      className={styles.section}
      aria-label="TI Framework"
    >
      <div className={styles.container}>

        {/* =====================================================
            TOP ROW
        ===================================================== */}

        <div className={styles.introBlock}>

          {/* LEFT — CONTENT */}
          <div className={styles.introContent}>

            <span className={styles.brand}>
              DIGITALFABRIC®
            </span>

            <h2 className={styles.title}>
              TI-Framework
            </h2>

            <p className={styles.introText}>
              simplifies the complexities in business
              transformation initiatives by providing a pragmatic
              process framework &amp; guidance for digital Strategy
              management.
            </p>

          </div>


          {/* RIGHT — IMAGE */}
          <div className={styles.introVisual}>
            <Image
              src="/images/abstract/abstract1.png"
              alt="TI Framework abstract visual"
              fill
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
              className={`${styles.frameworkImage} ${styles.topFrameworkImage}`}
            />
          </div>

        </div>


        {/* =====================================================
            BOTTOM ROW
        ===================================================== */}

        <div className={styles.contentGrid}>

          {/* LEFT — IMAGE */}
          <div className={styles.contentVisual}>
            <Image
              src="/images/abstract/abstract2.png"
              alt="TI Framework abstract illustration"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
              className={`${styles.frameworkImage} ${styles.bottomFrameworkImage}`}
            />
          </div>


          {/* RIGHT — CONTENT */}
          <div className={styles.textContent}>

            <p>
              Enterprise requirements, technology components, and
              business models are changing faster than time, and so
              should the strategic initiatives. This time frame of the
              year (~March 2020) has challenged us to look over and
              above the unreal barriers that acted as a speed-lock to
              attain full-throttle transformation. Companies have
              onboarded numerous capabilities and solutions to address
              growing needs, and gradually has evolved into a new
              entangled technology furball fondly termed Digital
              Transformation.
            </p>

            <p>
              Making the whole situation difficult to manage, and
              complex to quantify effort, track maturity, register
              growth, and consolidate value on investment. Large
              corporations have designed and wielded a practical
              approach to adopt digital transformation. However, the
              anticipated outcomes from these initiatives are still
              under evaluation and realization.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}