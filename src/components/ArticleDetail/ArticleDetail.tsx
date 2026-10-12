"use client";

import styles from "./ArticleDetail.module.css";

interface ArticleDetailProps {
  article: {
    title: string;
    date?: string;
    author?: string;
    category?: string;
    featuredImage?: string;
    content?: string;
    excerpt?: string;
    readTime?: string;
  };
}

export default function ArticleDetail({
  article,
}: ArticleDetailProps) {
  return (
    <article className={styles.articleDetail}>

      <div className={styles.container}>

        <div className={styles.mainGrid}>

          {/* =========================================
              MAIN ARTICLE
          ========================================= */}

          <main className={styles.articleMain}>

            <div className={styles.meta}>
              {article.date && <span>{article.date}</span>}
              {article.author && <span>BY {article.author}</span>}
              {article.category && <span>{article.category}</span>}
            </div>

            <h1 className={styles.title}>
              {article.title}
            </h1>

            {article.featuredImage && (
              <div className={styles.heroImage}>
                <img
                  src={article.featuredImage}
                  alt={article.title}
                />
              </div>
            )}

            {article.excerpt && (
              <p className={styles.excerpt}>
                {article.excerpt}
              </p>
            )}

            {article.content && (
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: article.content,
                }}
              />
            )}

          </main>


          {/* =========================================
              SIDEBAR
          ========================================= */}

          <aside className={styles.sidebar}>

            <div className={styles.sidebarCard}>

              {article.author && (
                <>
                  <h3>AUTHOR</h3>

                  <p className={styles.authorName}>
                    {article.author}
                  </p>
                </>
              )}

              <div className={styles.divider} />

              <h3>SHARE THIS ARTICLE</h3>

              <div className={styles.shareLinks}>
                <button type="button">in</button>
                <button type="button">X</button>
                <button type="button">f</button>
                <button type="button">↗</button>
              </div>

              <div className={styles.divider} />

              <h3>RELATED TOPICS</h3>

              <div className={styles.tags}>
                {article.category && (
                  <span>{article.category}</span>
                )}
              </div>

              <div className={styles.divider} />

              <div className={styles.readTime}>
                <span>◷</span>
                <span>
                  {article.readTime || "1 MIN READ"}
                </span>
              </div>

            </div>

          </aside>

        </div>

      </div>

    </article>
  );
}