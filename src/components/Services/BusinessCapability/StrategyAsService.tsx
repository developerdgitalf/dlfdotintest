import {
  FiLayers,
  FiBarChart2,
  FiArrowRight,
  FiBriefcase,
  FiUsers,
  FiGlobe,
  FiMonitor,
} from "react-icons/fi";
import styles from "./StrategyAsService.module.css";

const enablementPoints = [
  "Business process re-engineering",
  "Technology Onboarding",
  "Market Research & Evaluation",
  "Service/Product: Opportunity & refinement",
  "Maturity assessment & evaluation",
  "Entity journey mapping & design experience",
  "Transition & competency building",
  "Service & Program Mgmt. & governance",
];

const impactAreas = [
  {
    icon: <FiBriefcase />,
    title: "Technology - Product - Solution companies",
  },
  {
    icon: <FiUsers />,
    title: "Enterprise across all business verticals & sectors",
  },
  {
    icon: <FiGlobe />,
    title: "GCC - Global Capability centers",
  },
  {
    icon: <FiMonitor />,
    title: "ITSP - IT Service Provider",
  },
];

export default function StrategyAsService() {
  return (
    <section className={styles.strategySection}>
      <div className={styles.container}>
        {/* =====================================
            HEADER
        ===================================== */}
        <header className={styles.heading}>
          <span className={styles.eyebrow}>Strategy as a Service</span>

          <div className={styles.smallLine} />

          <h2>Agile Strategy</h2>

          <div className={styles.titleDivider} aria-hidden="true">
            <span />
          </div>

          <p>
            A quick insight to steer, navigate and course-correct the
            initiatives&apos; direction with a{" "}
            <strong>Bite Size Strategy</strong> approach offering quick
            guidance. Every strategy should have a shelf life and a review point
            to move to the next set. We provide a documented summary to review,
            revisit and anchor the initiative. So everything is documented and
            aligned at every level of strategy, building a{" "}
            <strong>Minimum Viable Strategy</strong> approach at every action
            point to increase agility and evade approach restructuring at every
            point.
          </p>

          <span className={styles.strategyLabel}>(Strategy As A Service).</span>
        </header>

        {/* =====================================
            BUSINESS & TECHNOLOGY ENABLEMENT
        ===================================== */}
        <div className={styles.enablementCard}>
          {/* Left dark panel */}
          <div className={styles.enablementVisual}>
            <div className={styles.visualIcon}>
              <FiLayers />
            </div>

            <h3>
              Business &amp;
              <br />
              Technology Enablement
            </h3>

            <div className={styles.visualDivider} aria-hidden="true">
              <span />
            </div>
          </div>

          {/* Right points */}
          <div className={styles.enablementContent}>
            <div className={styles.pointsGrid}>
              {enablementPoints.map((point) => (
                <div className={styles.point} key={point}>
                  <span className={styles.bullet} />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================
            TWO FEATURE ROWS
        ===================================== */}
        <div className={styles.featureRows}>
          <article className={styles.featureRow}>
            <div className={styles.featureIcon}>
              <FiLayers />
            </div>

            <div className={styles.featureContent}>
              <h3>Technologies &amp; Capabilities Integration</h3>
              <h4>(Capability Building – Roadmap – Scale)</h4>
              <p>
                Building strong technology foundations and scalable capabilities
                to activate growth and drive long-term impact.
              </p>
            </div>

            <FiArrowRight className={styles.featureArrow} />
          </article>

          <article className={`${styles.featureRow} ${styles.featureRowBlue}`}>
            <div className={styles.featureIcon}>
              <FiBarChart2 />
            </div>

            <div className={styles.featureContent}>
              <h3>Business Transformation</h3>
              <h4>(Digital Strategy – Resiliency – Experience)</h4>
              <p>
                Driving transformation through digital strategy, operational
                resiliency and experience-led change.
              </p>
            </div>

            <FiArrowRight className={styles.featureArrow} />
          </article>
        </div>

        {/* =====================================
            DELIVERING IMPACT
        ===================================== */}
        <div className={styles.impactSection}>
          <div className={styles.impactHeading}>
            <span>Delivering Impact Across</span>
            <div className={styles.impactLine} />
          </div>

          <div className={styles.impactGrid}>
            {impactAreas.map((area) => (
              <article className={styles.impactCard} key={area.title}>
                <div className={styles.impactIcon}>{area.icon}</div>

                <h4>{area.title}</h4>

                <div className={styles.cardLine} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}