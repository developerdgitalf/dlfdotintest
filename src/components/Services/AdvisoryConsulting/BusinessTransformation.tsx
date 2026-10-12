import { FiCpu } from "react-icons/fi";
import "./BusinessTransformation.css";

interface BusinessTransformationProps {
  backgroundImage?: string;
  image?: string;
}

export default function BusinessTransformation({
  backgroundImage,
  image = "/images/services/business-transformation.png",
}: BusinessTransformationProps) {
  return (
    <section className="business-transformation-section">
      {/* Optional Background Image */}
      {backgroundImage && (
        <div
          className="business-transformation-bg-image"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}

      {/* Overlay */}
      <div className="business-transformation-overlay" />

      {/* Main Container */}
      <div className="business-transformation-container">
        <div className="business-transformation-grid">

          {/* LEFT SIDE - CONTENT */}
          <div className="business-transformation-content">
          


            <h2>Business Transformation</h2>

            <div className="business-transformation-title-line" />

            <p className="business-transformation-intro">
              Businesses transform with underlying technology evolution. It is
              about refurbishing the core processes with new options available
              at enhanced value. Even the work{" "}
              <strong>DIGITAL – S.A.S – DIG-IT-ALL</strong>{" "}
              is making changes at the core level that starts with mindsets,
              leading to skills and then finally the toolsets.
            </p>

            {/* Featured Service */}
            <div className="business-transformation-feature">
              <div className="business-transformation-feature-icon">
                <FiCpu />
              </div>

              <div className="business-transformation-feature-content">
                <h3>X-OPS FOR THE EMERGING TECH</h3>

                <p>
                  Every subject is split into two branches – Technical &amp;
                  Functional. Usually, the technical aspect is the highlighted
                  one; however, the success factor relies upon and is driven by
                  the Functional attributes, like Operations and Delivery.
                  Hence, we have an operating experience in almost all
                  technologies and capabilities.
                </p>
              </div>
            </div>

            <p className="business-transformation-highlight">
              We can help you build and refine the foundation for your{" "}
              <strong>DIGITAL OPS – IT OPS – AI OPS</strong>
            </p>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="business-transformation-image-wrapper">
            <img
              src={image}
              alt="Business Transformation"
              className="business-transformation-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}