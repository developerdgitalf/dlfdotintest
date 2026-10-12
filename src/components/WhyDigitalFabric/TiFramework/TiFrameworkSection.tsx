import "./TiFrameworkSection.css";

type IconName = "compass" | "target" | "chart" | "bulb" | "rocket";

const outcomes: {
  icon: IconName;
  text: React.ReactNode;
}[] = [
  {
    icon: "compass",
    text: (
      <>
        Discover emerging <strong>ecosystems</strong> and
        <br />
        segments & develop.
      </>
    ),
  },
  {
    icon: "target",
    text: (
      <>
        Define <strong>go to market strategy, positioning,</strong>
        <br />
        and <strong>performance metrics</strong> you can act.
      </>
    ),
  },
  {
    icon: "chart",
    text: (
      <>
        <strong>Assessments and personalized</strong> as a
        <br />
        business-owner ideas you customer
        <br />
        capitalizable & scale.
      </>
    ),
  },
  {
    icon: "bulb",
    text: (
      <>
        Design your <strong>business & technology</strong>
        <br />
        solutions roadmap with tangible outcomes
        <br />
        & milestones.
      </>
    ),
  },
  {
    icon: "rocket",
    text: (
      <>
        Deliver like <strong>skill & capability</strong> development
        <br />
        path to.
      </>
    ),
  },
];

function FrameworkIcon({ name }: { name: IconName }) {
  switch (name) {
    case "compass":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="17" />
          <path d="M30 18l-4.5 11L18 30l4.5-11L30 18z" />
        </svg>
      );

    case "target":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="14" />
          <circle cx="24" cy="24" r="6" />
          <path d="M24 4v8M24 36v8M4 24h8M36 24h8" />
        </svg>
      );

    case "chart":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M10 39V12M10 39h29" />
          <path d="M16 34V25M24 34V20M32 34V14" />
          <path d="M16 20l8-6 8 3 6-8" />
          <path d="M34 9h4v4" />
        </svg>
      );

    case "bulb":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M18 31c-2.5-2.1-4-5.2-4-8.6a10 10 0 0120 0c0 3.4-1.5 6.5-4 8.6-1.6 1.4-2.3 3-2.3 4.7h-7.4c0-1.7-.7-3.3-2.3-4.7z" />
          <path d="M20 40h8M21 36h6" />
          <circle cx="24" cy="22" r="3.5" />
          <path d="M24 10v3M12 22h3M33 22h3M15.5 13.5l2.2 2.2M32.5 13.5l-2.2 2.2" />
        </svg>
      );

    case "rocket":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M27 9c6.5-3.5 11-4 11-4s-.5 4.5-4 11L24 26l-8-2 2-8L27 9z" />
          <path d="M24 26l-5 5M18 24l-7 7M16 31l-4 8 8-4" />
          <circle cx="30" cy="14" r="2.5" />
        </svg>
      );

    default:
      return null;
  }
}

export default function FrameworkSection() {
  return (
    <section className="framework-section">
      <div className="framework-container">
        {/* LEFT SIDE */}
        <div className="framework-content">
          <h2>
            What will DIGITALFABRIC<sup>®</sup> - TI
            <br />
            Framework help you achieve?
          </h2>

          <p>
            <span>DIGITALFABRIC<sup>®</sup></span> doesn’t just fix a
            problem—it creates measurable growth. An end-to-end strategic
            framework that blends human understanding, data intelligence, and
            creative excellence to transform brands, businesses, and content
            systems in an AI-accelerated digital world.
          </p>

          <p>
            The personalized version (built with us, scaled by you) is designed
            to help SMEs, organizations, and entrepreneurs unlock clarity,
            credibility, and continual growth—so they can stay future-ready,
            brand-differentiated, and market-relevant in a fast-changing world.
          </p>
        </div>

        {/* CENTER DIVIDER */}
        <div className="framework-divider" />

        {/* RIGHT SIDE */}
        <div className="framework-outcomes">
          {outcomes.map((item, index) => (
            <div className="framework-item" key={index}>
              <div className="framework-icon">
                <FrameworkIcon name={item.icon} />
              </div>

              <div className="framework-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}