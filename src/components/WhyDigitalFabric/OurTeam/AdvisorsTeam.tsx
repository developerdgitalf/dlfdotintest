"use client";

import "./AdvisorsTeam.css";


/* =========================================
   MAIN HEAD TEAM
========================================= */

const mainHeadTeam = [
  

  {
    name: "Ashwin Gaidhani",
    role: "Research Partner",
    image: "/images/our-team/ashwin-gaidhani.png",
    linkedin: "#",
  },
{
    name: "DR. TAPATI BANDOPADHYAY",
    role: "Research Partner",
    image: "/images/our-team/Tapati-Bandhopadhyay.png",
    linkedin: "#",
    email: "#",
    website: "#",
  },
  {
    name: "Mark Purdy",
    role: "Research Partner",
    image: "/images/our-team/Mark-Purdy.png",
    linkedin: "#",
  },

   {
    name: "LALITHA",
    role: " LEAD ANALYST",
    image: "/images/our-team/Lalitha-Yanamandra.jpg",
    linkedin: "#",
  },

 
];


/* =========================================
   SUPPORT TEAM
========================================= */

const supportTeam = [
  {
    name: "Shreya Gir",
    role: "Project Manager",
    image: "/images/our-team/Shreya_Gir.png",
    linkedin: "#",
  },


  {
    name: "APOORVA RAO",
    role: "RESEARCH ANALYSTS",
    image: "/images/our-team/Apoorva-Rao.png",
    linkedin: "#",
  },

   {
    name: "Saraswathi Patra",
    role: "Research Partner",
    image: "/images/our-team/Saraswathi_Patra.jpg",
    linkedin: "#",
  },



];


/* =========================================
   LINKEDIN ICON
========================================= */

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="advisors-team__icon"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M7 10v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="7"
        cy="7"
        r="1"
        fill="currentColor"
      />

      <path
        d="M11 17v-4a3 3 0 0 1 6 0v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M11 10v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* =========================================
   EMAIL ICON
========================================= */

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="advisors-team__icon"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="m4 7 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* =========================================
   LINK / WEBSITE ICON
========================================= */

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="advisors-team__icon"
    >
      <path
        d="M10 13a4 4 0 0 0 5.66.24l2-2a4 4 0 0 0-5.66-5.66l-1.15 1.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M14 11a4 4 0 0 0-5.66-.24l-2 2A4 4 0 0 0 8 18.42l1.15-1.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* =========================================
   MEMBER CARD
========================================= */

function MemberCard({
  name,
  role,
  image,
  linkedin,
  email,
  website,
  division = false,
}: {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
  website?: string;
  division?: boolean;
}) {
  return (
    <article
      className={`advisors-team__card ${
        division
          ? "advisors-team__card--division"
          : ""
      }`}
    >

      {/* =========================================
          IMAGE
      ========================================= */}

      <div className="advisors-team__image-wrap">

        <img
          src={image}
          alt={name}
          className="advisors-team__image"
        />

      </div>


      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="advisors-team__card-content">

        <h3>
          {name}
        </h3>

        <p>
          {role}
        </p>


        {/* =========================================
            SOCIAL LINKS
        ========================================= */}

        <div className="advisors-team__socials">

          {linkedin && (
            <a
              href={linkedin}
              className="
                advisors-team__social
                advisors-team__social--linkedin
              "
              aria-label={`LinkedIn - ${name}`}
            >
              <LinkedInIcon />
            </a>
          )}


          {email && (
            <a
              href={email}
              className="
                advisors-team__social
                advisors-team__social--email
              "
              aria-label={`Email - ${name}`}
            >
              <EmailIcon />
            </a>
          )}


          {website && (
            <a
              href={website}
              className="
                advisors-team__social
                advisors-team__social--link
              "
              aria-label={`Website - ${name}`}
            >
              <LinkIcon />
            </a>
          )}

        </div>

      </div>

    </article>
  );
}


/* =========================================
   MAIN COMPONENT
========================================= */

export default function AdvisorsTeam() {
  return (
    <section
      className="advisors-team"
      aria-label="Advisors and support team"
    >

      {/* =====================================================
          MAIN HEAD TEAM
      ===================================================== */}

      <div className="advisors-team__container">

        <div className="advisors-team__heading">

          <h2>
            INDUSTRY ANALYSTS
            <br />
            &amp; DISTINGUISHED ADVISORS
          </h2>

          <div className="advisors-team__heading-line" />

        </div>


        <div className="advisors-team__analyst-grid">

          {mainHeadTeam.map((person) => (
            <MemberCard
              key={person.name}
              name={person.name}
              role={person.role}
              image={person.image}
              linkedin={person.linkedin}
              email={person.email}
              website={person.website}
            />
          ))}

        </div>

      </div>


      {/* =====================================================
          SUPPORT TEAM
      ===================================================== */}

      <div className="advisors-team__container advisors-team__container--second">

        <div
          className="
            advisors-team__division
            advisors-team__division--support
          "
        >

          <div className="advisors-team__division-title">

            <h2>
              SUPPORT TEAM
            </h2>

          </div>


          <div
            className="
              advisors-team__division-cards
              advisors-team__division-cards--support
            "
          >

            {supportTeam.map((person) => (
              <MemberCard
                key={person.name}
                name={person.name}
                role={person.role}
                image={person.image}
                linkedin={person.linkedin}
                division
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}