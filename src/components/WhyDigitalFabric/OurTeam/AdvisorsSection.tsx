import "./AdvisorsSection.css";

type Person = {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
};

const advisors: Person[] = [
  {
    id: "advisor-1",
    name: "Advisor Name",
    role: "Strategic Advisor",
    image: "/images/our-team/advisor-1.png",
    linkedin: "#",
  },
  {
    id: "advisor-2",
    name: "Advisor Name",
    role: "Business Advisor",
    image: "/images/team/advisor-2.png",
    linkedin: "#",
  },
  {
    id: "advisor-3",
    name: "Advisor Name",
    role: "Technology Advisor",
    image: "/images/team/advisor-3.png",
    linkedin: "#",
  },
];

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.36 8.09h4.28V24H.36V8.09zM7.32 8.09h4.1v2.17h.06c.57-1.08 1.97-2.22 4.05-2.22 4.33 0 5.13 2.85 5.13 6.55V24h-4.27v-8.35c0-1.99-.04-4.55-2.77-4.55-2.78 0-3.21 2.17-3.21 4.4V24H7.32V8.09z" />
    </svg>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <article className="advisor-card">
      <div className="advisor-image-wrap">
        <img
          src={person.image}
          alt={person.name}
          className="advisor-image"
        />
      </div>

      <div className="advisor-info">
        <h3>{person.name}</h3>

        <p>{person.role}</p>

        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-linkedin"
            aria-label={`${person.name} LinkedIn profile`}
          >
            <LinkedInIcon />
          </a>
        )}
      </div>
    </article>
  );
}

export default function AdvisorsSection() {
  return (
    <section
      className="advisors-section"
      aria-labelledby="advisors-title"
    >
      <div className="advisors-container">

        {/* Section Heading */}
        <div className="advisors-heading">
          <span>OUR NETWORK</span>

          <h2 id="advisors-title">
            Advisors &amp; Strategic Partners
          </h2>

          <p>
            Bringing together experience, perspective, and expertise to support
            meaningful transformation.
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="advisors-grid">
          {advisors.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
            />
          ))}
        </div>

      </div>
    </section>
  );
}