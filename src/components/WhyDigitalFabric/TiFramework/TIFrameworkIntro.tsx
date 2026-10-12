import Image from "next/image";
import styles from "./TIFrameworkIntro.module.css";

export default function TIFrameworkIntro() {
  return (
    <section
      className={styles.section}
      aria-label="TI Framework introduction"
    >
      <div className={styles.container}>

        {/* =====================================================
            LEFT DECORATIVE BAR
        ===================================================== */}
       


        {/* =====================================================
            RIGHT DECORATIVE BAR
        ===================================================== */}
        


        {/* =====================================================
            INTRODUCTION
        ===================================================== */}
        <div className={styles.intro}>
          <p>
            DIGITALFABRIC® – TI FRAMEWORK simplifies the complexities in
            business transformation initiatives by providing a pragmatic
            process framework &amp; guidance for Digital Strategy management.
          </p>
        </div>


        {/* =====================================================
            2 × 2 CONTENT GRID
        ===================================================== */}
        <div className={styles.grid}>

          {/* ===================================================
              TOP LEFT — IMAGE
          =================================================== */}
          <div className={styles.imageBox}>
            <Image
              src="/images/abstract/abstract1.png"
              alt="TI Framework visual"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>


          {/* ===================================================
              TOP RIGHT — TEXT
          =================================================== */}
          <div className={styles.textBox}>
            <p>
              Enterprise requirements, technology components, and business
              models are changing faster than time, and so should the
              strategic initiatives. This time frame of the year (~March
              2020) has challenged us to look over and above the unreal
              barriers that acted as a speed-lock to attain full-throttle
              transformation. Companies have onboarded numerous capabilities
              and solutions to address growing needs, which gradually has
              evolved into a new entangled technology furball fondly termed
              Digital Transformation.
            </p>
          </div>


          {/* ===================================================
              BOTTOM LEFT — TEXT
          =================================================== */}
          <div className={styles.textBox}>
            <p>
              Making the whole situation difficult to manage, and complex
              to quantify effort, track maturity, register growth, and
              consolidate value on investment. Large corporations have
              designed and wielded a practical approach to adopt digital
              transformation. However, the anticipated outcomes from these
              initiatives are still under evaluation and realization.
            </p>
          </div>


          {/* ===================================================
              BOTTOM RIGHT — IMAGE
          =================================================== */}
          <div className={styles.imageBox}>
            <Image
              src="/images/abstract/abstract2.png"
              alt="Digital transformation visual"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>

      </div>
    </section>
  );
}   