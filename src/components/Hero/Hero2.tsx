import styles from "./Hero2.module.css";

export default function Hero2() {
  return (
    <section id="home" className={styles.hero}>

      {/* =====================================================
          FULL-SCREEN BACKGROUND VIDEO
      ===================================================== */}

      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="/videos/custom-rad-hero-bg-video.mp4"
          type="video/mp4"
        />
      </video>


      {/* =====================================================
          BACKGROUND DARKENING LAYER
      ===================================================== */}

      <div
        className={styles.backgroundOverlay}
        aria-hidden="true"
      />


      {/* =====================================================
          CONTENT CONTAINER
      ===================================================== */}

      <div className={styles.container}>

        <div className={styles.heroInner}>

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className={styles.content}>

            <h1>
              Enabling enterprises to achieve
              sustainability, resiliency, and agility.
            </h1>

            <p>
              DigitalFabric Consulting helps organizations adopt, adapt,
              and accelerate business-transforming digital initiatives
              through strategy, governance frameworks, and execution
              guidance.
            </p>

            <a
              href="#services"
              className={styles.button}
            >
              <span>Explore more</span>

              <span
                className={styles.buttonArrow}
                aria-hidden="true"
              >
                →
              </span>
            </a>

          </div>


          {/* =================================================
              RIGHT MAIN VIDEO
          ================================================= */}

          <div className={styles.visual}>

            <video
              className={styles.visualVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/hero.png"
              aria-label="DigitalFabric transformation video"
            >
              <source
                src="/videos/hero-video.mp4"
                type="video/mp4"
              />
            </video>

          </div>

        </div>

      </div>

    </section>
  );
}