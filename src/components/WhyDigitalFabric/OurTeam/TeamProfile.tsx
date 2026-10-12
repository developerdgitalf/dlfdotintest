"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./TeamProfile.module.css";

export default function TeamProfile() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.profileGrid}>
          {/* LEFT PROFILE AREA */}
          <div className={styles.profileColumn}>
            <div className={styles.profileVisual}>
              <div className={styles.profileImageWrap}>
                <Image
                  src="/images/our-team/ashwin-gaidhani.png"
                  alt="Ashwin Gaidhani"
                  fill
                  className={styles.profileImage}
                  priority
                />
              </div>

              <div className={styles.nameCard}>
                <h2>Ashwin Gaidhani</h2>
                <p>
                  Founder & CEO, DIGITALFABRIC® GROUP
                  <br />
                  Distinguished Management Practitioner
                </p>
              </div>

              <div className={styles.forbesBadge}>
                <span>Forbes</span>
                <small>India</small>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className={styles.contentColumn}>
            {/* INTRO CARD */}
            <div className={styles.introCard}>
              <h3>
                Hello All,
                <br />
                I am Ashwin Gaidhani
              </h3>

              <p>AI-automation &amp; services management practitioner</p>
            </div>

            {/* ABOUT ME ACCORDION */}
            <div
              className={`${styles.aboutCard} ${
                isAboutOpen ? styles.aboutCardOpen : ""
              }`}
            >
              <button
                type="button"
                className={styles.aboutHeader}
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                aria-expanded={isAboutOpen}
                aria-controls="about-me-content"
              >
                <span>About me</span>

                <span className={styles.accordionIcon}>
                  {isAboutOpen ? "−" : "+"}
                </span>
              </button>

              <div className={styles.aboutLine} />

              {/* CONTENT SMOOTHLY DROPS DOWN / UP */}
              <div
                id="about-me-content"
                className={`${styles.aboutCollapse} ${
                  isAboutOpen ? styles.aboutCollapseOpen : ""
                }`}
              >
                <div className={styles.aboutContent}>
                  <p>
                    Around 2 decades of versatile experience in IT
                    Infrastructure &amp; Operations, program management,
                    domain consulting, ITES, Artificial Intelligence &amp;
                    Automation Ecosystems.
                  </p>

                  <p>
                    His knowledge encompasses devising and implementing
                    business strategies for large and complex engagements. He
                    has been operational in aligning new &amp; disruptive
                    technology with the organizational roadmap.
                  </p>

                  <p>
                    A proven leader with quick decision-making ability to lead
                    the path of services/business transformation, optimizing
                    support &amp; delivery, integrating processes &amp; tools
                    by incorporating relevant frameworks, standards, and best
                    practices, impacting business needs.
                  </p>

                  <p>
                    He has facilitated program recovery, sales/pre-sales
                    enablement, Business &amp; Management consulting
                    assignments, and experience across the US &amp; UK for IT
                    Service Management, Delivery/Service Assurance, AI &amp;
                    Automation (RPA), and designing transformation roadmaps
                    across business verticals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LOGOS */}
        <div className={styles.logoRow}>
          <div className={styles.logoItem}>
            <Image
              src="/images/team/logos/ssn.png"
              alt="SSN"
              width={170}
              height={80}
              className={styles.logoImage}
            />
          </div>

          <div className={styles.logoItem}>
            <Image
              src="/images/team/logos/isaca.png"
              alt="ISACA"
              width={170}
              height={80}
              className={styles.logoImage}
            />
          </div>

          <div className={styles.logoItem}>
            <Image
              src="/images/team/logos/axelos.png"
              alt="AXELOS"
              width={170}
              height={80}
              className={styles.logoImage}
            />
          </div>

          <div className={styles.logoItem}>
            <Image
              src="/images/team/logos/xlri.png"
              alt="XLRI"
              width={170}
              height={80}
              className={styles.logoImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}