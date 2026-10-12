"use client";

import Image from "next/image";
import styles from "../../styles/Possibilities.module.css";


const Impossible = () => {
  return (
    <section className={styles["impossible-section"]}>
      
      {/* LEFT SIDE - FULL BACKGROUND */}
      <div className={styles["impossible-content-side"]}>
        {/* TEXT CONTAINER ONLY */}
        <div className={styles["impossible-content-container"]}>
          <p className={styles["impossible-eyebrow"]}>
            EVERYONE NEEDS THE
            <br />
            SKY IN A JAR
          </p>

          <h2 className={styles["impossible-title"]}>
            WE NEVER SAID
            <br />
            IT&apos;S IMPOSSIBLE
          </h2>
        </div>
      </div>

      {/* RIGHT SIDE - FULL HEIGHT IMAGE */}
      <div className={styles["impossible-image-side"]}>
        <Image
          src="/images/impossible.jpg"
          alt="We Never Said It's Impossible"
          fill
          priority
          className={styles["impossible-image"]}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>

    </section>
  );
};

export default Impossible;