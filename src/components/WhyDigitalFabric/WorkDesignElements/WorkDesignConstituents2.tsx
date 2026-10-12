import Image from "next/image";
import Link from "next/link";

import { FiChevronRight } from "react-icons/fi";
import "./WorkDesignConstituents2.css";

type Constituent = {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  link: string;
};

const constituents: Constituent[] = [
  {
    title: "PEOPLE",
    description:
      'We are the creators of technology and will always be the shapers of how emerging concepts call to action. We are not working around the constraints of technology, which has pushed the "People" component to its limits and stay relevant over an era.',
    image: "/images/why/people.png",
    imagePosition: "left",
    link: "/blog",
  },
  {
    title: "PROCESS",
    description:
      "Our entire, exclusive, and inclusive business ecosystem is a mesh of actions, decisions, interpretations, and inclusions that operates in a determined sequence.",
    image: "/images/why/process.png",
    imagePosition: "right",
    link: "/blog/the-process",
  },
  {
    title: "PLATFORM",
    description:
      "Technology is the science of combining hardware, processes, and human intelligence to build meaningful systems. Our unique platform approach connects technology, processes, and people to create sustainable business outcomes.",
    image: "/images/why/platform.png",
    imagePosition: "left",
    link: "/blog/the-platform",
  },
  {
    title: "PRODUCT",
    description:
      "Product is a crucial work design constituent that has reshaped the way businesses identify and experience the product or service. It brings meaningful value through the connection between People, Process, and Platform.",
    image: "/images/why/product.png",
    imagePosition: "right",
    link: "/blog/the-product",
  },
  {
    title: "PARTNERSHIP",
    description:
      "Product is a crucial work design constituent that has reshaped the way businesses identify and experience the product or service. It brings meaningful value through the connection between People, Process, and Platform.",
    image: "/images/why/partnership.png",
    imagePosition: "left",
    link: "/blog/the-product",
  },
];

export default function WorkDesignConstituents2() {
  return (
    <section
      className="work-design-constituents"
      aria-label="Work Design Constituents"
    >
      <div className="work-design-constituents__container">
        <div className="constituents-list">

          {constituents.map((item) => (
            <article
              key={item.title}
              className={`constituent-row ${
                item.imagePosition === "right"
                  ? "constituent-row--image-right"
                  : "constituent-row--image-left"
              }`}
            >

              {/* =================================================
                  IMAGE
              ================================================= */}
              <div className="constituent-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="constituent-image__img"
                />
              </div>


              {/* =================================================
                  CONTENT
              ================================================= */}
              <div className="constituent-content">

                <div className="constituent-title">
                  <h3>{item.title}</h3>
                </div>

                <p>
                  {item.description}
                </p>

                <Link
                  href={item.link}
                  className="constituent-read-more"
                >
                  <span>Read More</span>
<span
  className="constituent-read-more-arrow"
  aria-hidden="true"
>
  <FiChevronRight />
</span>
                </Link>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}