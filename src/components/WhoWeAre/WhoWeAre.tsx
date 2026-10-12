import Image from "next/image";
import styles from "./WhoWeAre.module.css";

interface WhoWeAreSection {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  reverse: boolean;
}

const sections: WhoWeAreSection[] = [
  {
    id: "who-we-are",
    eyebrow: "",
    title: "Who We Are",
    description:
      "We are a team of business, technology, and strategy professionals driven by curiosity, strategic thinking, and collaborative design. We combine cross disciplinary collaboration and strategic experience across sustainability, transformation, governance, emerging technologies, and business management.",
    image: "/images/why/abstract-1.png",
    alt: "Who We Are",
    reverse: false,
  },
  {
    id: "what-we-do",
    eyebrow: "",
    title: "What we do",
    description:
      "We bring new ideas to life and help institutionalize and operationalize business transformation and partnerships. By leveraging technology and breaking free from conventional limits, we help enterprises build capabilities that influence performance. We manage and drive consulting initiatives across business, technology, and strategy.",
    image: "/images/why/chess.png",
    alt: "What We Do",
    reverse: true,
  },
  {
    id: "how-we-do-it",
    eyebrow: "",
    title: "How we do it",
    description:
      "We assess the present state, identify transformation gaps, and provide practical guidance. Our approach combines best practices, implementation assistance, and proven techniques focused on the internal and external factors shaping business and customer experience transformation.",
    image: "/images/why/arrow.png",
    alt: "How We Do It",
    reverse: false,
  },
];

const WhoWeAre = () => {
  return (
    <section
      className={styles["who-we-are-section"]}
      aria-label="Who We Are"
    >
      <div className={styles["who-we-are-container"]}>
        {sections.map((item) => (
          <article
            key={item.id}
            className={`${styles["who-we-are-row"]} ${
              item.reverse
                ? styles["who-we-are-row-reverse"]
                : ""
            }`}
          >
            {/* =================================================
                IMAGE
            ================================================= */}
            <div className={styles["who-we-are-image"]}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                className={styles["who-we-are-img"]}
              />
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}
            <div className={styles["who-we-are-content"]}>
              

             
              <h2>{item.title}</h2>

              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;