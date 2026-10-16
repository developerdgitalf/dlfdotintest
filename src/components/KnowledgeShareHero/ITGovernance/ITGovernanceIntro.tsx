import "./ITGovernanceIntro.css";

export default function ITGovernanceIntro() {
  return (
    <section   id="it-governance" className="it-governance-intro-section ">
      <div className="it-governance-intro-container">

        {/* =========================================
            ROW 1 — FULL WIDTH HEADING
        ========================================= */}

<div className="transformation-overview-header">
          <span className="transformation-overview-eyebrow">
            ENTERPRISES TRANSFORMATION
          </span>

          <h1> AI Governance </h1>

               <div className="transformation-overview-divider">
            <span />
            <i />
            <span />
          </div>
        </div>


        <div className="it-governance-heading">
          <h1>
            The Enterprise 
          
            <span> Transformation</span>
          </h1>
        </div>

        {/* =========================================
            ROW 2 — FULL WIDTH BLUEPRINT IMAGE
        ========================================= */}
        <div className="enterprise-blueprint">
          <img
            src="/images/knowledge-share/enterprise-blueprint.svg"
            alt="Enterprise Blueprint"
            className="enterprise-blueprint-image"
          />
        </div>

        {/* =========================================
            ROW 3 — FULL WIDTH DESCRIPTION
        ========================================= */}
        <div className="it-governance-description">
          <p>
            Abstraction of enterprise service management has changed from a
            technology-centric and workflow-oriented concept to a comprehensive
            value-driven and growth accelerator theme. The rise in innovation,
            solution development, and novel methodologies enabled by the
            emerging technologies is wielding the new skillset, mindset, and
            toolset for the future enterprise. Analytics, Automation and
            Artificial Intelligence have found a befitting role to amplify and
            enhance the experience quotient at every touchpoint aligned with
            the enterprise client's expectation.
          </p>
        </div>

      </div>
    </section>
  );
}