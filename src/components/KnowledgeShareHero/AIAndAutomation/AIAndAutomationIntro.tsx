import "./AIAndAutomationIntro.css";

export default function AIAndAutomationIntro() {
  return (
    <section className="ai-automation-intro-section">
      <div className="ai-automation-intro-container">



<div className="transformation-overview-header">
          <span className="transformation-overview-eyebrow">
            ENTERPRISES TRANSFORMATION
          </span>

          <h1> Intelligent  Automation </h1>

          <div className="transformation-overview-divider">
            <span />
            <i />
            <span />
          </div>

          <p>
            {" "}
            <strong>
             AI-driven innovation and intelligent automation to streamline operations, enhance efficiency, and accelerate business growth.
            </strong>{" "}
           
          </p>
        </div>




        {/* =========================================
            TOP ROW
        ========================================= */}

        <div className="ai-automation-intro-row ai-automation-row-top">

          {/* Left Content */}
          <div className="ai-automation-intro-content">
            <p>
              Already..........Paradigms have changed – Expectations have
              evolved and technology has progressed. It is on us to map the
              eventualities and permutations of Technology applicability
              without any reservations. It is time to restructure the
              prospects from technology and get to it before itself imposes on
              us.....like BAU.
            </p>
          </div>

          {/* Right Image */}
          <div className="ai-automation-intro-image">
            <img
                           src="/images/knowledge-share/digital-ai-2.jpg"
              alt="AI and technology transformation"
            />
          </div>

        </div>

        {/* =========================================
            BOTTOM ROW
        ========================================= */}

        <div className="ai-automation-intro-row ai-automation-row-bottom">

          {/* Left Image */}
          <div className="ai-automation-intro-image">
            <img
              src="/images/knowledge-share/digital-ai-3.jpg"
              alt="Innovation and automation"
            />
          </div>

          {/* Right Content */}
          <div className="ai-automation-intro-content">
            <p>
              An attempt to demystify the understanding of the innovation by
              simplifying the concept. Those are used as synonyms in place of
              innovation. Transform – Invent – Creativity – Innovate. Before we
              choose our journey, we need to understand the right context,
              position you, and help determine the right strategy and expect
              the desired output.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}