import Image from "next/image";
import Link from "next/link";

import "./IndustryCards.css";

type IndustryCard = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const industries: IndustryCard[] = [
  {
    title: "BX (Business Transformation) Dimensions ",
    description:
      "3 fundamental areas defining the success factors .",
    image: "/images/why/ti-card-1.png",
    link: "",
  },
  {
    title: "Work Design Constituents ",
    description:
      "5 primary elements of the Framework.",
    image: "/images/why/ti-card-2.png",
    link: "",
  },
  {
    title: "Work Design Attributes ",
    description:
      "10 aspects of the work design constituents. ",
    image: "/images/why/ti-card-3.png",
    link: "",
  },
  {
    title: "Attribute processes & Checklists ",
    description:
      "10 processes – 25 prospective checklists/Controls. ",
    image: "/images/why/ti-card-4.png",
    link: "",
  },
];

export default function IndustryCards() {
  return (
    <section
      className="industry-cards"
      aria-label="Digital Business Transformation capabilities"
    >
      <div className="industry-cards__container">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="industry-cards__intro">
          <h2>
            Organizations are aspiring to start working on the{" "}
            <strong>
              DBX (Digital Business Transformation)
            </strong>{" "}
            Theme, and the ones who are already amid this business
            transformation are yearning for a methodology to swiftly{" "}
            <strong>
              ADOPT – ADAPT – &amp; ACCELERATE.
            </strong>
          </h2>
        </div>


        {/* =====================================================
            INDUSTRY CARDS
        ===================================================== */}

        <div className="industry-cards__grid">

          {industries.map((item) => (
            <article
              key={item.title}
              className="industry-card"
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <Link
                href={item.link}
                className="industry-card__image"
                aria-label={`Explore ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 700px) 50vw, 25vw"
                />
              </Link>


              {/* =================================================
                  TITLE
              ================================================= */}

              <Link
                href={item.link}
                className="industry-card__title"
              >
                <span>
                  {item.title}
                </span>

                
              </Link>


              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p className="industry-card__description">
                {item.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}