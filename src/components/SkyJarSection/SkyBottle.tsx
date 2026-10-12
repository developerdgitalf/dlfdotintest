"use client";

import styles from "./SkyBottle.module.css";

export default function BottlePerspective() {
  return (
    <section
      className={styles["bottle-perspective"]}
      aria-label="Sky in a Jar"
    >
      <div className={styles["bottle-perspective__container"]}>
        <div className={styles["bottle-perspective__content"]}>

          {/* =======================================
              INTRO
          ======================================= */}

          <div className={styles["bottle-perspective__intro"]}>
            <h1>
              EVERYONE
              <br />
              NEEDS THE
              <br />
              <span>SKY IN A JAR</span>
            </h1>

            <p>
              WE NEVER SAID IT&apos;S IMPOSSIBLE,
              <br />
              JUST NEED A PERSPECTIVE
            </p>
          </div>


          {/* =======================================
              RESPONSIVE BOTTLE IMAGE
              MOBILE ONLY
          ======================================= */}

          <picture className={styles["bottle-perspective__bottle"]}>

            <source
              media="(max-width: 700px)"
              srcSet="/images/sky-bottle-mobile.png"
            />

            <img
              src="/images/sky-bottle-desktop.jpg"
              alt="Sky in a jar"
              className={styles["bottle-perspective__bottle-image"]}
            />

          </picture>


          {/* =======================================
              BUSINESS CHALLENGES
          ======================================= */}

          <div className={styles["bottle-perspective__details"]}>
            <div className={styles["bottle-perspective__block"]}>

              <h2>
                BUSINESS CHALLENGES &amp;
                <br />
                PROBLEMS WE SOLVE
              </h2>

              <ul>
                <li>
                  AI LIPSTICK SYNDROME – SUPERFICIAL AND MOMENTARY.
                </li>

                <li>
                  UNABLE TO MARK A STARTING POINT TO BEGIN THE AI ADOPTION.
                </li>

                <li>
                  AI BUSINESS TRANSFORMATION – SEGMENTED UNDERSTANDING.
                </li>

                <li>
                  LACKING THOUGHT, ACTION AND TASK LEADERSHIP.
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>


      {/* =========================================
          BLUE ACCENT
      ========================================= */}

      <span
        className={styles["bottle-perspective__accent"]}
        aria-hidden="true"
      />
    </section>
  );
}