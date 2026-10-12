import styles from "./TechnologyProductFirm.module.css";
import { FiFileText, FiVolume2 } from "react-icons/fi";

export default function TechnologyProductFirm() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            TECHNOLOGY PRODUCT FIRM (2019)
          </span>

          <h1>
            Personalized Business &amp; Content
         
            Strategy that drives performance.
          

         
            Personalized Business &amp; Content
            <br />
            Strategy that drives performance.
          </h1>

          <div className={styles.line} />

          <div className={styles.descriptionWrap}>
            <p className={styles.description}>
              <strong>Company Profile:</strong> Amid the technology revolution
              and business transformations around 2019, an automation product
              company was formed to address the void in the RPA (Robotic Process
              Automation) company space and evolve as a strong contender in the
              technology space.
            </p>

            <p className={styles.description}>
              The organization builds automation components, functions, and
              capabilities at par with the prevailing competitors. The RPA firm
              was positioning solutions to address business enterprises, aiding
              FSI, Hi-Tech, Telecom, and technology organizations.
            </p>
          </div>

          <a href="/case-studies" className={styles.button}>
            Read Case Study
          </a>
        </div>

        {/* Right Side – Two Symmetrical Cards */}
        <div className={styles.cards}>
          {/* Card 1 */}
          <article className={styles.infoCard}>
            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <FiFileText />
              </div>

              <div className={styles.infoContent}>
                <h4>
                  The problem statement drafted by
                  <br />
                  the executive management —
                </h4>

                <p className={styles.highlightText}>
                  “The product firm was struggling to gain customers, and
                  generate revenue despite having a robust automation platform.”
                </p>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className={styles.infoCard}>
            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <FiVolume2 />
              </div>

              <div className={styles.infoContent}>
                <h4>LATEST NEWS – MARCH 2021:</h4>

                <p>
                  THIS FIRM WAS ACQUIRED BY ONE OF THE LARGEST IT SOFTWARE
                  SOLUTION PROVIDING COMPANIES.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}