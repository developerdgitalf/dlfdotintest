import "./AdvisoryOverview.css";

interface AdvisoryOverviewProps {
  image?: string;
}

export default function AdvisoryOverview({
  image,
}: AdvisoryOverviewProps) {
  return (
    <section className="advisory-overview-section">
      <div className="advisory-overview-container">
        {/* Left Content */}
        <div className="advisory-overview-content">
          <h2>Advisory</h2>

          <p>
            Advisory is more at the business side, engaging with leadership and
            executive segment to strategize a transformational roadmap at a
            corporate level. In contrast, consulting is focused on one or two
            domains, and more hands-on implementation experience is expected.
          </p>
        </div>

        {/* Right Visual / Optional Image */}
        <div className="advisory-overview-visual">
          {image ? (
            <img
              src={image}
              alt="Advisory and consulting"
              className="advisory-overview-image"
            />
          ) : (
            <div className="advisory-consulting-visual">
              {/* Decorative connecting lines */}
              <div className="advisory-line advisory-line-one" />
              <div className="advisory-line advisory-line-two" />
              <div className="advisory-line advisory-line-three" />

              {/* Main central element */}
              <div className="advisory-center">
                <span>Strategy</span>
                <strong>&amp;</strong>
                <span>Advisory</span>
              </div>

              {/* Supporting nodes */}
              <div className="advisory-node advisory-node-one">
                <span>Vision</span>
              </div>

              <div className="advisory-node advisory-node-two">
                <span>Insight</span>
              </div>

              <div className="advisory-node advisory-node-three">
                <span>Growth</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}