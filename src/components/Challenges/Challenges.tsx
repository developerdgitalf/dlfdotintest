"use client";

import { useState } from "react";
import styles from "./Challenges.module.css";

const challenges = [
  {
    title: "PEOPLE",
    content:
      "Building the right capabilities, mindset, and leadership needed to navigate change and create meaningful business outcomes.",
  },
  {
    title: "PROCESS",
    content:
      "Creating efficient, connected and scalable processes that support business growth and digital transformation.",
  },
  {
    title: "PLATFORM",
    content:
      "Aligning technology platforms and digital infrastructure with the real needs and objectives of the organisation.",
  },
  {
    title: "PRODUCT",
    content:
      "Developing products and solutions that create genuine value for customers, businesses and the wider ecosystem.",
  },
  {
    title: "PARTNERSHIP",
    content:
      "Building strong partnerships and collaborative relationships that help organisations achieve sustainable growth.",
  },
];

const attributes = [
  "Digital lipstick syndrome – Superficial and momentary.",
  "Unable to mark a starting point to begin the transformation.",
  "Digital business transformation – segmented understanding.",
  "Lacking thought, action and task leadership.",
];

const Challenges = () => {
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);

  const toggleChallenge = (index: number) => {
    setOpenChallenge(openChallenge === index ? null : index);
  };

  return (
    <section className={styles.challengesSection}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          {/* LEFT SIDE */}
          <div className={styles.leftSide}>
            <h2 className={styles.mainTitle}>
              BUSINESS INSTITUTIONAL
              <br />
              CHALLENGES & PROBLEMS
              <br />
              WE SOLVE
            </h2>

            <div className={styles.challengeList}>
              {challenges.map((challenge, index) => {
                const isOpen = openChallenge === index;

                return (
                  <div
                    className={`${styles.challengeWrapper} ${
                      isOpen ? styles.active : ""
                    }`}
                    key={challenge.title}
                  >
                    <button
                      type="button"
                      className={styles.challengeItem}
                      onClick={() => toggleChallenge(index)}
                      aria-expanded={isOpen}
                    >
                      <span>{challenge.title}</span>

                      <span className={styles.plus}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* DROPDOWN CONTENT */}
                    <div
                      className={`${styles.challengeContent} ${
                        isOpen ? styles.open : ""
                      }`}
                    >
                      <div className={styles.challengeContentInner}>
                        <p>{challenge.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.rightSide}>
            <h2 className={styles.rightTitle}>
             FOCUS ON THE RIGHT ATTRIBUTES 
              <br />
              FOR DIGITAL TRANSFORMATION 
              <br />
             
            </h2>

            <div className={styles.cardsGrid}>
              {attributes.map((attribute, index) => (
                <div className={styles.attributeCard} key={index}>
                  <p>{attribute}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Challenges;