import React from "react";
import Image from "next/image";
import styles from "./IndustriesEngagements.module.css";

const engagements = [
  {
    title: "Technology Product Company (RPA Platform) ",
    description:
      "Formulated the GTM plan, business strategy, analyst relations, and market positioning to strengthen market presence.  ",
    image: "/images/industries/1-industries.jpg",
  },
  {
    title: "Fast-growing <br/> Fintech Unicorn  ",
    description:
      "Engaged to build an IT governance structure, establish change management practices, and develop ITSM processes in a SaaS environment.  ",
    image: "/images/industries/2-industries.jpg",
  },
  {
    title: "Asia's largest education technology initiative",
    description:
      "Part of the advisory team guiding the transition from operational delivery to a digital platform-led enterprise model.",
    image: "/images/industries/3-industries.png",
  },
  {
    title: "Global MSP: ICT & Customer Services  ",
    description:
      "Supporting the strategic marketing team in developing business and technology narratives and strengthening analyst relations. ",
    image: "/images/industries/4-industries.png",
  },
  {
    title: "Niche Business <br/> Consulting Firm ",
    description:
      "Facilitating digital maturity assessments and supporting consulting teams in building roadmaps to elevate technology standards.",
    image: "/images/industries/5-industries.png",
  },
  {
    title: "Leading Market <br/> Research Company ",
    description:
      "Served as a trusted research partner, contributing to a broad customer ecosystem and multiple research initiatives. ",
    image: "/images/industries/6-industries.png",
  },
];

export default function IndustriesEngagements() {
  return (
    <section id="industries" className={styles.industries}>
      <div className={styles.container}>
        {/* Section Heading */}
        <div className={styles.heading}>
          <h2>Industry Experience </h2>
          <p>
            Formulating GTM strategies and business strategy, analyst relations
            and market positioning to gain market presence.
          </p>
        </div>

        {/* Engagement Cards */}
        <div className={styles.grid}>
          {engagements.map((engagement, index) => (
            <article
              className={styles.card}
              key={`${engagement.title}-${index}`}
              style={{
                backgroundImage: `url(${engagement.image})`,
              }}
            >
              <div className={styles.overlay} />

              <div className={styles.cardContent}>
                <h3>
                  {engagement.title
                    .split(/<br\s*\/?>/i)
                    .map((part, partIndex) => (
                      <React.Fragment key={partIndex}>
                        {partIndex > 0 && <br />}
                        {part.trim()}
                      </React.Fragment>
                    ))}
                </h3>

                <p>{engagement.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}