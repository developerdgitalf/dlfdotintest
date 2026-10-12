import styles from "./TeamJourneyCards.module.css";

const journeyCards = [
  {
    title: "The Learner",
    image: "/images/our-team/team-1.png",
    content:
      "At the age of 15, one possesses an exceedingly inquisitive mindset and willing to learn everything that is put forth without any prejudice or reservation and banks on the experiential approach.",
  },
  {
    title: "The Achiever",
    image: "/images/our-team/team-2.png",
    content:
      "When you are 25, you have this towering confidence to accomplish any challenge, very passionate, and willing to perceive your dreams.",
  },
  {
    title: "The Leader",
    image: "/images/our-team/team-3.png",
    content:
      "And when your “biological age” gradually starts leaning towards the heavy 30’s, one has to retain his body in a very efficient state to hold the mind of 15 and a heart of 25-year-old, which makes him aware, wise and thoughtful to make righteous decisions for himself, organizations and associates.",
  },
];

export default function TeamJourneyCards() {
  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          {journeyCards.map((card) => (
            <article className={styles.card} key={card.title}>
              {/* Default card view */}
              <div className={styles.defaultView}>
                <div className={styles.imageWrapper}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className={styles.image}
                  />
                </div>

                <div className={styles.cardFooter}>
                  <h3>{card.title}</h3>

                  <span className={styles.readMore}>
                    Read More <span>→</span>
                  </span>
                </div>
              </div>

              {/* Hover content layer */}
              <div className={styles.hoverView}>
                <div className={styles.hoverContent}>
                  <span className={styles.label}>THE JOURNEY</span>

                  <h3>{card.title}</h3>

                  <p>{card.content}</p>

                  <span className={styles.backText}>
                    Explore <span>↗</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}