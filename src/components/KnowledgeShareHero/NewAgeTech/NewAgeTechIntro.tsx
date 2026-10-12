import "./NewAgeTechIntro.css";

interface NewAgeTechIntroProps {
  topImage?: string;
  bottomImage?: string;
}

export default function NewAgeTechIntro({
  topImage = "/images/knowledge-share/cloud.png",
  bottomImage = "/images/services/r3.png",
}: NewAgeTechIntroProps) {
  return (
    <section className="new-age-tech-intro-section">
      <div className="new-age-tech-intro-container">

        {/* TOP CONTENT */}

        <div className="new-age-tech-intro-row new-age-tech-row-top">
          <div className="new-age-tech-text new-age-tech-top-text">
            <p>
              It is necessary to study the core nature of how and why<br/>
              technology is called out in a certain way.
            </p>
          </div>
        </div>

        {/* BOTTOM CONTENT — LEFT TEXT / RIGHT IMAGE */}

        <div className="new-age-tech-intro-row2 new-age-tech-row-bottom2">
          <div className="new-age-tech-text new-age-tech-bottom-text">
            <p>
              The nature and characteristics of Infrastructure are
              transforming towards a resilient and sustainable state. A good
              example is the Blue Infrastructure (Cloud) moving into thin air
              amplifying elasticity, performance power, and manageability of
              technology CI’s. Similarly No-code approach to core software
              programs by fast pacing solution delivery and reducing the skill
              dependency. Grouping the available code from all purposed for a
              specific action and Repurposing them in action blocks can
              complete the desired activity. Cloud and No-code sport a great
              synergy and seamless operability.
            </p>
          </div>

          <div className="new-age-tech-image">
            <img
              src={bottomImage}
              alt="Technology infrastructure"
            />
          </div>
        </div>

      </div>
    </section>
  );
}