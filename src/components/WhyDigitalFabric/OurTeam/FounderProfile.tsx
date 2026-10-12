"use client";

import "./FounderProfile.css";

const associations = [
  {
    name: "SSON",
    image: "/images/our-team/SSON-logo.png",
    alt: "SSON",
  },
  {
    name: "ISACA",  
    image: "/images/our-team/ISACA-logo.png",
    alt: "ISACA",
  },
  {
    name: "AXELOS",
    image: "/images/our-team/axelos-logo.png",
    alt: "AXELOS",
  },
  {
    name: "XLRI",
    image: "/images/our-team/XLRI-logo.png",
    alt: "XLRI",
  },
];

const journeyCards = [
  {
    type: "learner",
    title: "The Learner",
    text: `At the age of 15, one possesses an exceedingly inquisitive mindset and willing to learn everything that is put forth without any prejudice or reservation and banks on the experiential approach.`,
  },
  {
    type: "achiever",
    title: "The Achiever",
    text: `When you are 25, you have this towering confidence to accomplish any challenge, very passionate, and willing to perceive your dreams.`,
  },
  {
    type: "leader",
    title: "The Leader",
    text: `And when your biological age gradually starts leaning towards the heavy 30's, one has to retain his body in a very efficient state to hold the mind of 15 and a heart of 25-year-old, which makes him aware, wise and thoughtful to make righteous decisions for himself, organizations and associates.`,
  },
];

function JourneyIcon({
  type,
}: {
  type: "learner" | "achiever" | "leader";
}) {
  if (type === "learner") {
    return (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="founder-profile__icon"
      >
        <path
          d="M24 8 7 17l17 9 13-7v10h4V17L24 8Z"
          fill="currentColor"
        />
        <path
          d="M14 24v7c0 4 5 7 10 7s10-3 10-7v-7l-10 5-10-5Z"
          fill="currentColor"
        />
        <path d="M8 34h8v7H8z" fill="currentColor" />
      </svg>
    );
  }

  if (type === "achiever") {
    return (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="founder-profile__icon"
      >
        <path
          d="m9 25 8 8 22-22 4 4-26 26L5 29l4-4Z"
          fill="currentColor"
        />
        <path
          d="m16 14 5 5 7-7 4 4-11 11-9-9 4-4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="founder-profile__icon"
    >
      <path
        d="M24 8 29 18 40 20 32 28 34 40 24 34 14 40 16 28 8 20 19 18 24 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FounderProfile() {
  return (
    <section className="founder-profile">
      <div className="founder-profile__container">

        {/* =========================================
            FOUNDER PROFILE
        ========================================= */}

        <div className="founder-profile__intro">

          {/* PORTRAIT */}
          <div className="founder-profile__portrait-wrap">
            <img
              src="/images/our-team/ashwin-gaidhani-profile.jpg"
              alt="Ashwin Gaidhani"
              className="founder-profile__portrait"
            />
          </div>

          {/* ABOUT PANEL */}
          <div className="founder-profile__about">

            <div className="founder-profile__hello">
              <span>Hello All,</span>
              <span>I am Ashwin Gaidhani</span>
            </div>

            <p className="founder-profile__role">
              AI-automation &amp; services management practitioner
            </p>

            <h2>About me</h2>

            <div className="founder-profile__description">

              {/* PARAGRAPH 1 */}
              <p>
                Around 2 decades of versatile experience in IT
                Infrastructure &amp; Operations, program mgmt., domain
                consulting, for ITIS, ITES, Artificial Intelligence &amp;
                Automation Ecosystem. His knowledge encompasses devising
                and implementing Business strategies for large and
                complex engagements. He has been operational in aligning
                new &amp; disruptive technology with the organizational
                roadmap.
              </p>

              {/* PARAGRAPH 2 */}
              <p>
                A Proven Leader with quick decision-making ability to lead
                the path of service/business transformation, optimizing
                support &amp; delivery, integrating processes &amp; tools
                by incorporating relevant frameworks, standards, and best
                practices, impacting business outcomes. He has facilitated
                program recovery, sales/pre-sales enablement, Business &amp;
                Management consulting assignments, and perception
                management initiatives for high value and flagship
                accounts across the US &amp; UK on IT Service Management,
                Delivery/Service Assurance, AI &amp; Automation (RPA), and
                designing transformation roadmap across business
                verticals.
              </p>

            </div>
          </div>
        </div>

        {/* =========================================
            ASSOCIATIONS
        ========================================= */}

        <div className="founder-profile__associations">
          {associations.map((association) => (
            <div
              className="founder-profile__association"
              key={association.name}
            >
              <img
                src={association.image}
                alt={association.alt}
              />
            </div>
          ))}
        </div>

        {/* =========================================
            JOURNEY
        ========================================= */}

        <div className="founder-profile__journey">
          {journeyCards.map((card) => (
            <article
              key={card.title}
              className="founder-profile__journey-card"
            >
              <div className="founder-profile__icon-wrap">
                <JourneyIcon
                  type={
                    card.type as
                      | "learner"
                      | "achiever"
                      | "leader"
                  }
                />
              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}