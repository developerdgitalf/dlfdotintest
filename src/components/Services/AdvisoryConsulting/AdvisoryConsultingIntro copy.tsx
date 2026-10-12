import "./AdvisoryConsultingIntro.css";

export default function AdvisoryConsultingIntro() {
  return (
    <section className="advisory-intro-section">
      <div className="advisory-intro-container">
        {/* Left Content */}
        <div className="advisory-intro-content">
          <h2>Advisory</h2>

          <p>
            Advisory is more at the business side, engaging with leadership and
            executive segment to strategize a transformational roadmap at a
            corporate level. In contrast, consulting is focused on one or two
            domains, and more hands-on implementation experience is expected.
          </p>
        </div>

        {/* Right Image Area */}
        <div className="advisory-intro-image">
       
            Add your image here later.

            Example:
            <img
              src="/images/services/it-advisory.png"
              alt="Advisory and consulting"
            />
          
        </div>
      </div>
    </section>
  );
}