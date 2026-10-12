import Image from "next/image";
import Link from "next/link";

import "./DigitalCards.css";

type DigitalThoughtCard = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const digitalThoughtCards: DigitalThoughtCard[] = [
  {
    title: "",
    description:
      "Hardware and on-prem infrastructure is migrating to CLOUD. Virtualizing not only the hardware but the OS layer in the form of HYPERVISORS.",
    image: "/images/why/ti-card-1.png",
    link: "/industries/digital",
  },
  {
    title: "",
    description:
      "The applications are being built on SaaS platforms that are customizable. API & MICROSERVICE are transforming this at pace.",
    image: "/images/why/ti-card-2.png",
    link: "/industries/financial-services",
  },
  {
    title: "",
    description:
      "Support & Services framework is extending hybrid solutions where IT Ops are majorly driven by AI – AUTOMATION and SMART capabilities.",
    image: "/images/why/ti-card-3.png",
    link: "/industries/leap",
  },
  {
    title: "",
    description:
      "Performance & dashboarding is handled by DATA intelligence tools and ANALYTICS. This is driving productivity & cost optimization to a new level.",
    image: "/images/why/ti-card-4.png",
    link: "/industries/sustainability",
  },
];

export default function DigitalCards() {
  return (
    <section
      className="digital-thought-cards"
      aria-labelledby="digital-thought-cards-heading"
    >
      <div className="digital-thought-cards__container">

        <div className="digital-thought-cards__intro">
          <h2 id="digital-thought-cards-heading">
            New <span className="digital-it-gold">IT</span> is{" "} DIG          
            <span className="digital-it-gold">IT</span>AL &amp; we know{" "}
            <span className="digital-it-gold">IT</span>
          </h2>
        </div>

        <div className="digital-thought-cards__grid">
          {digitalThoughtCards.map((item, index) => (
            <article
              key={`digital-thought-card-${index}`}
              className="digital-thought-card"
            >
              <Link
                href={item.link}
                className="digital-thought-card__image"
                aria-label={`Explore digital insight ${index + 1}`}
              >
                <Image
                  src={item.image}
                  alt={`Digital insight ${index + 1}`}
                  fill
                  sizes="(max-width: 700px) 50vw, 25vw"
                />
              </Link>

              {item.title.trim() && (
                <Link
                  href={item.link}
                  className="digital-thought-card__title"
                >
                  <span>{item.title}</span>

                  <span
                    className="digital-thought-card__arrow"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </Link>
              )}

              <p className="digital-thought-card__description">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}