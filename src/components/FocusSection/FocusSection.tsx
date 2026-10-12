import styles from "./FocusSection.module.css";

import {
  FiCpu,
  FiShare2,
  FiCloud,
  FiClipboard,
} from "react-icons/fi";

const services = [
  {
    title: "Enterprise AI Services & Readiness",
    lines: [
      "Agentic Services & Platforms",
      "Orchestration Platforms",
      "Process/Service Architecture",
    ],
    icon: FiCpu,
  },
  {
    title: "AI Engineering Services",
    lines: [
      "AI Foundation",
      "Work Architecture Governance",
      "Solution/Product enhancements",
    ],
    icon: FiShare2,
  },
  {
    title: "Enterprise Cloud & Platforms",
    lines: [
      "GTM & positioning",
      "Solution discovery",
      "Hyperscaler & Workflow platforms",
    ],
    icon: FiCloud,
  },
  {
    title: "Forward Deployment Engineering (FDE) Consulting",
    lines: [
      "Positioning",
      "Narrative",
      "Capability setup",
      "Delivery model",
    ],
    icon: FiClipboard,
  },
];

export default function FocusSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>

        {/* LEFT — FOCUS */}
        <div className={styles.focus}>
          <div className={styles.focusContent}>
            <h2>Focus</h2>

            <div className={styles.focusLine} />

            <h3>
              INTERVENTIONAL
              <br />
              CONSULTING AND
              <br />
              TECH ADVISORY
            </h3>

            <p>
              BUSINESS CHALLENGES & INSTITUTIONAL PROBLEMS WE SOLVE 
            </p>
          </div>
        </div>

        {/* RIGHT — SERVICES */}
        <div className={styles.rightContent}>

          {/* Service Cards */}
          <div className={styles.cards}>
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className={styles.card} key={service.title}>
                  {/* SERVICE ICON */}
                  <div className={styles.serviceIcon}>
                    <Icon aria-hidden="true" />
                  </div>

                  <div className={styles.cardBody}>
                    <h3>{service.title}</h3>

                    <div className={styles.serviceLines}>
                      {service.lines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>

                    <a href="knowledge-share/ai-automation" className={styles.readMore}>
                      Read More <span>→</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Technology Area */}
          <div className={styles.technology}>
            <h3>Technology adoption and related AI Economics</h3>

            <div className={styles.techLinks}>
              <a href="#gcc">GCC</a>
              <a href="#gsi">GSI</a>
              <a href="#platforms">TECHNOLOGY PLATFORMS</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}