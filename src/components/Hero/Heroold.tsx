import styles from "../../styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className="site-container">
        <div className={styles.heroInner}>

          {/* Left Content */}
          <div className={styles.content}>
            <h1>
              Enabling enterprises to achieve sustainability,
              resiliency, and agility.
            </h1>

            <p>
              DigitalFabric Consulting helps organizations adopt, adapt, and
              accelerate business-transforming digital initiatives through
              strategy, governance frameworks, and execution guidance.
            </p>

            <a href="#services" className={styles.button}>
              Explore more <span>→</span>
            </a>
          </div>

          {/* Right Image */}
          <div className={styles.visual}>
            <img
              src="/images/hero.png"
              alt="DigitalFabric enterprise transformation"
              className={styles.visualImage}
            />
          </div>

        </div>
      </div>
    </section>
  );
}