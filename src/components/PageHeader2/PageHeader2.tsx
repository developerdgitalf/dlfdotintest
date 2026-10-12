import Link from "next/link";
import styles from "./PageHeader2.module.css";
import { FiArrowRight } from "react-icons/fi";

interface PageHeader2Props {
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function PageHeader2({
  title,
  subtitle,
  description,
  backgroundImage,
  buttonText,
  buttonLink = "#services-content",
}: PageHeader2Props) {
  const isExternalLink =
    buttonLink.startsWith("http://") ||
    buttonLink.startsWith("https://") ||
    buttonLink.startsWith("mailto:");

  return (
    <section
      className={styles.pageHeader2}
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(
              rgba(20, 27, 79, 0.42),
              rgba(168, 168, 168, 0.048)
            ),
            url("${backgroundImage}")`
          : "linear-gradient(180deg, #1d255b, #24376a)",
      }}
    >
      <div className={styles.container}>
        <div className={styles.content}>

          {/* TITLE */}
          <h1 className={styles.title}>
            {title}
          </h1>

          {/* SUBTITLE */}
          {subtitle && (
            <h2 className={styles.subtitle}>
              {subtitle}
            </h2>
          )}

          {/* DESCRIPTION */}
          <p className={styles.description}>
            {description}
          </p>

          {/* BUTTON */}
          {buttonText && buttonLink && (
            isExternalLink ? (
              <a
                href={buttonLink}
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{buttonText}</span>
                <FiArrowRight aria-hidden="true" />
              </a>
            ) : (
              <Link
                href={buttonLink}
                className={styles.button}
              >
                <span>{buttonText}</span>
                <FiArrowRight aria-hidden="true" />
              </Link>
            )
          )}

        </div>
      </div>
    </section>
  );
}