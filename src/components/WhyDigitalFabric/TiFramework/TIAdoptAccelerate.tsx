import Image from "next/image";
import styles from "./TIAdoptAccelerate.module.css";

const cards = [
  {
    image: "/images/why/ti-card-1.png",
    title: "BX (Business Transformation) Dimensions ",
  },
  {
    image: "/images/why/ti-card-2.png",
    title: "Work Design Constituents ",
  },
  {
    image: "/images/why/ti-card-3.png",
    title: "Work Design Attributes ",
  },
  {
    image: "/images/why/ti-card-4.png",
    title: "Attribute processes & Checklists ",
  },
];

export default function TIAdoptAccelerate() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <p className={styles.description}>
            Organizations are aspiring to start working on the DBX (Digital
            Business Transformation) Theme, and the ones who are already amid
            this business transformation are yearning for a methodology to
            swiftly
          </p>

          <h2 className={styles.heading}>
            ADOPT – ADAPT – &amp; ACCELERATE.
          </h2>
        </div>

        {/* Right Cards */}
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <article className={styles.card} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.cardContent}>
                <h3>{card.title}</h3>

              {/*  <button type="button" className={styles.more}>
                  View More <span>⟶</span>
                </button> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}