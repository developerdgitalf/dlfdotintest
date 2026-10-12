import Image from "next/image";
import styles from "./HomePageWhoWeSection.module.css";

export default function TIFrameworkIntro() {
  return (
    <section
      className={styles.section}
      aria-label="Who we are, what we do, and how we do it"
    >
      <div className={styles.container}>

        {/* =====================================================
            2 × 2 CONTENT GRID
        ===================================================== */}

        <div className={styles.grid}>

          {/* ===================================================
              TOP LEFT — IMAGE
          =================================================== */}

          <div className={styles.imageBox}>
            <Image
              src="/images/who-we-are.png"
              alt="TI Framework visual"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>


          {/* ===================================================
              TOP RIGHT — WHO WE ARE
          =================================================== */}

          <div className={styles.textBox}>
            <h2>Who we are</h2>

            <p>
              We are a team of business, technology, and strategy
              professionals driven by curiosity, strategic thinking,
              and collaborative design. We combine cross-disciplinary
              collaboration and strategic experience across sustainability,
              transformation, governance, emerging technologies, and
              business management.
            </p>
          </div>


          {/* ===================================================
              MIDDLE LEFT — WHAT WE DO
          =================================================== */}

          <div className={styles.textBox}>
            <h2>What we do</h2>

            <p>
              We bring new ideas to life and help institutionalize and
              operationalize business transformation and partnerships.
              By leveraging technology and breaking free from conventional
              limits, we help enterprises build capabilities that influence
              performance. We manage and drive consulting initiatives across
              business, technology, and strategy.
            </p>
          </div>


          {/* ===================================================
              MIDDLE RIGHT — IMAGE
          =================================================== */}

          <div className={styles.imageBox}>
            <Image
              src="/images/what-we-do.png"
              alt="Digital transformation visual"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>


          {/* ===================================================
              BOTTOM LEFT — IMAGE
          =================================================== */}

          <div className={styles.imageBox}>
            <Image
              src="/images/rocket.png"
              alt="Who we are visual"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>


          {/* ===================================================
              BOTTOM RIGHT — HOW WE DO IT
          =================================================== */}

          <div className={styles.textBox}>
            <h2>How we do it</h2>

            <p>
              We assess the present state, identify transformation gaps,
              and provide practical guidance. Our approach combines best
              practices, implementation assistance, and proven techniques
              focused on the internal and external factors shaping business
              and customer experience transformation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}