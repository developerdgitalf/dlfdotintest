"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./ResearchCards.module.css";

type IndustryCard = {
  title: string;
  shortDescription: string;
  description: string;
  description2?: string;
  image: string;
  link: string;
};

const industries: IndustryCard[] = [
  {
    title: "STRATEGY AS A SERVICE",
    shortDescription:
      "Infusing Digital, smart and intelligent capabilities by process reengineering in every enterprise (Business – Support – Technology).",
    description:
      "Domain to enhance the Topline profit and optimized service delivery adding the new experience quotient.",
    image: "/images/services/strategy-as-service.png",
    link: "#",
  },

  {
    title: "ONBOARDING",
    shortDescription:
      "The starting point is to upgrade the founding technology layer and onboard the respective resources to run it. The mapping and rationalization of the right capabilities, technologies, platforms, and components <br/> is crucial. ",
    description:
      "This will also include the respective competency building of the resources who will manage it. ",
    image: "/images/services/onboarding.png",
    link: "#",
  },

  {
    title: "RESEARCH AS A SERVICE",
    shortDescription:
      " Research is the only tool that can help you list down the new opportunities and shifting trends in every aspect of the market and power your decision-making ability backed by study and evaluation. ",
    description:
      "Our differentiation is all about timely, On-demand, and applicable research. Most of the time, research companies share reports that are few months old and out of date in the times when the world changes overnight.",
    description2: " There are many ways research can help you, and comparative advantage is just one of them. ",
    
      image: "/images/services/research-as-service.png",
    link: "#",
  },

  {
    title: "OPPORTUNITY",
    shortDescription:
      "Every offering changes with time and technology, and there is always a scope to refine and redesign the service – product – solution.",
    description:
      "A good supervised assessment and study can reveal the improvement opportunity to fine-tune the performance. ",

    image: "/images/services/opportunity.png",
    link: "#",
  },
];

export default function ResearchCards() {
  const [activeSlides, setActiveSlides] = useState<number[]>(
    industries.map(() => 0)
  );

  const handleReadMore = (index: number) => {
    setActiveSlides((current) => {
      const updated = [...current];

      const item = industries[index];

      const slides = [
        item.shortDescription,
        item.description,
        ...(item.description2 ? [item.description2] : []),
      ];

      const nextSlide = updated[index] + 1;

      updated[index] =
        nextSlide >= slides.length ? 0 : nextSlide;

      return updated;
    });
  };

  return (
    <section
      className={styles.industryCards}
      aria-label="Digital Business Transformation capabilities"
    >
      <div className={styles.industryCardsContainer}>
        <div className={styles.industryCardsGrid}>
          {industries.map((item, index) => {
            const activeSlide = activeSlides[index];

            const slides = [
              item.shortDescription,
              item.description,
              ...(item.description2 ? [item.description2] : []),
            ];

            return (
              <article
                key={item.title}
                className={styles.industryCard}
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <Link
                  href={item.link}
                  className={styles.industryCardImage}
                  aria-label={`Explore ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 700px) 100vw, 25vw"
                  />
                </Link>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className={styles.industryCardContent}>

                  {/* TITLE */}
                  <Link
                    href={item.link}
                    className={styles.industryCardTitle}
                  >
                    <span>{item.title}</span>

                    
                  </Link>

                  {/* =================================================
                      SAME CONTENT CONTAINER
                  ================================================= */}

                  <div className={styles.cardCarouselViewport}>
                    <div
                      className={styles.cardCarouselTrack}
                      style={{
                        width: `${slides.length * 100}%`,
                        transform: `translateX(-${
                          activeSlide * (100 / slides.length)
                        }%)`,
                      }}
                    >
                      {slides.map((slide, slideIndex) => (
                        <div
                          key={`${item.title}-${slideIndex}`}
                          className={styles.cardSlide}
                          style={{
                            width: `${100 / slides.length}%`,
                            flex: `0 0 ${100 / slides.length}%`,
                          }}
                        >
                          <p>{slide}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      READ MORE
                  ================================================= */}

                  <button
                    type="button"
                    className={styles.industryCardReadMore}
                    onClick={() => handleReadMore(index)}
                    aria-label={`Read more about ${item.title}`}
                  >
                    <span>Read More</span>

                   
                  </button>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}