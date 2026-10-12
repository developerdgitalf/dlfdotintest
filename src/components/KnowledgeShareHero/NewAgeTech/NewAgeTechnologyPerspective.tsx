import "./NewAgeTechnologyPerspective.css";

interface NewAgeTechnologyPerspectiveProps {
  diagramImage?: string;
}

export default function NewAgeTechnologyPerspective({
  diagramImage = "/images/knowledge-share/new-age-technology-flow.svg",
}: NewAgeTechnologyPerspectiveProps) {
  return (




    <section className="new-age-perspective-section">
      {/* =========================================
          LEFT 50%
      ========================================= */}

      <div className="new-age-perspective-left">
        <div className="new-age-perspective-left-content">
          <p>
            We come across transformative, emerging, and futuristic, or
            new-age technologies in our business-technology conversations.
            All sound synonymous and are used interchangeably in various
            contexts.
          </p>

          <p>
            Every technology is transformative (changing the way we do
            things), and continuously emerging (New advancements &amp;
            improved capabilities) and at some point, these might have
            sounded futuristic technology or ahead of time.
          </p>
        </div>
      </div>

      {/* =========================================
          RIGHT 50%
      ========================================= */}

      <div className="new-age-perspective-right">
        <div className="new-age-perspective-right-content">

          <div className="new-age-perspective-heading">
            <h2>
              
            
            </h2>

            
          </div>

          {/* =====================================
              DIAGRAM IMAGE
          ===================================== */}

          <div className="new-age-perspective-image">
            {diagramImage && (
              <img
                src={diagramImage}
                alt="Technology forces and transformation flow"
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}