import "./TransformationProcess.css";

interface TransformationOverviewProps {
  diagramImage?: string;
}

export default function TransformationOverview({
  diagramImage = "/images/knowledge-share/transformation.svg",
}: TransformationOverviewProps) {
  return (
    <section className="transformation-overview-section">
      <div className="transformation-overview-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="transformation-overview-header">
          <span className="transformation-overview-eyebrow">
            THE TRANSFORMATION
          </span>

          <h1>A Self-Initiating Continuous Process</h1>

          <div className="transformation-overview-divider">
            <span />
            <i />
            <span />
          </div>

          <p>
            Entities transform over time, supported by{" "}
            <strong>
              concepts, frameworks, methodologies, and technology
            </strong>{" "}
            – an inevitable consequence of external and internal factors.
          </p>
        </div>

        {/* =========================================
            CHANGE MANAGEMENT
        ========================================= */}

        <div className="transformation-change-card">
          <div className="transformation-change-icon">
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="7"
                r="3"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <circle
                cx="6"
                cy="17"
                r="3"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <circle
                cx="18"
                cy="17"
                r="3"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <path
                d="M9.8 9.2L7.8 14.2M14.2 9.2L16.2 14.2M9 17H15"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="transformation-change-content">
            <p>
              <strong>Change Management</strong> – as humble as it sounds, is
              the most critical component of the organizational transformation
              initiative. The motive is to operationalize the executive
              strategy at every layer and ensuring that all resources are
              aligned towards achieving the vision –{" "}
              <strong>THE TRANSFORMATION.</strong>
            </p>
          </div>
        </div>

        {/* =========================================
            EXACT TRANSFORMATION DIAGRAM
        ========================================= */}

        <div className="transformation-diagram-image">
          <img
            src={diagramImage}
            alt="The Transformation framework"
          />
        </div>

      </div>
    </section>
  );
}