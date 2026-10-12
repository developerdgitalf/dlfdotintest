import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  description,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section
      className={styles.pageHeader}
      style={{
        backgroundImage: backgroundImage
          ? `url("${backgroundImage}")`
          : "none",
      }}
    >
      <div className={styles.overlay} />

      {/* SAME CONTENT CONTAINER */}
      <div className={styles.container}>
        <h1>{title}</h1>

        {description && (
          <p className={styles.description}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}