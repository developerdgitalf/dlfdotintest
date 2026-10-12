import styles from "./TechnologyServices.module.css";

const services = [
  {
    title: "Enterprise AI Services & Readiness",
    items: [
      "GTM & positioning",
      "Solution discovery",
      "Hyperscalers & Workflow platforms",
    ],
  },
  {
    title: "Enterprise Cloud & Platforms",
    items: [
      "GTM & positioning",
      "Solution discovery",
      "Hyperscalers & Workflow platforms",
    ],
  },
  {
    title: "AI Engineering Services",
    items: [
      "Agentic Services & Platforms",
      "Orchestration Platforms",
      "Process/Service Architecture",
    ],
  },
  {
    title: "Forward Deployment Engineering (FDE) Consulting",
    items: [
      "Positioning",
      "Narrative",
      "Capability setup",
      "Delivery model",
    ],
  },
];

export default function TechnologyServices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            SERVICE COLUMNS
        ========================================= */}

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article
              key={service.title}
              className={styles.serviceCard}
            >
              <h3>{service.title}</h3>

              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a
                href="#"
                className={styles.readMore}
              >
                <span>Read More</span>
                <span className={styles.arrow}>→</span>
              </a>
            </article>
          ))}
        </div>

        {/* =========================================
            TECHNOLOGY STRIP
        ========================================= */}

        <div className={styles.technologyBar}>
          <div className={styles.technologyLabel}>
            Technology adoption and related AI Economics
          </div>

          <div className={styles.technologyOptions}>
            <div className={styles.option}>
              GCC
            </div>

            <div className={styles.divider} />

            <div className={styles.option}>
              GSI
            </div>

            <div className={styles.divider} />

            <div className={styles.optionWide}>
              TECHNOLOGY PLATFORM
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}