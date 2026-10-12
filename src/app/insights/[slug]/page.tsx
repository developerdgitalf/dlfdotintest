import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";

interface WordPressPost {
  id: number;
  date: string;
  slug: string;

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
  };

  _embedded?: {
    author?: {
      name: string;
    }[];

    "wp:featuredmedia"?: {
      source_url: string;
    }[];

    "wp:term"?: {
      name: string;
      taxonomy: string;
    }[][];
  };
}


/* =========================================================
   HTML ENTITY DECODER
========================================================= */

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#038;/gi, "&")
    .replace(/&#38;/gi, "&")
    .replace(/&amp;/gi, "&")
    .replace(/&nbsp;/gi, " ")
    .replace(/&hellip;/gi, "…")
    .replace(/&#8230;/gi, "…")
    .replace(/&ldquo;/gi, '"')
    .replace(/&rdquo;/gi, '"')
    .replace(/&lsquo;/gi, "'")
    .replace(/&rsquo;/gi, "'")
    .replace(/&#8220;/gi, '"')
    .replace(/&#8221;/gi, '"')
    .replace(/&#8216;/gi, "'")
    .replace(/&#8217;/gi, "'")
    .replace(/&#8211;/gi, "–")
    .replace(/&#8212;/gi, "—")
    .trim();
}


/* =========================================================
   WORDPRESS URL FIXER
========================================================= */

function fixWordPressUrls(html: string): string {
  if (!html) {
    return html;
  }

  return html

    /* localhost HTTP */
    .replace(
      /http:\/\/localhost:8888\/dfabric\//gi,
      "https://wp.digitalfabric.in/"
    )

    .replace(
      /http:\/\/localhost:8888\/dfabric/gi,
      "https://wp.digitalfabric.in"
    )

    /* localhost HTTPS */
    .replace(
      /https:\/\/localhost:8888\/dfabric\//gi,
      "https://wp.digitalfabric.in/"
    )

    .replace(
      /https:\/\/localhost:8888\/dfabric/gi,
      "https://wp.digitalfabric.in"
    )

    /* Old production WordPress path */
    .replace(
      /https:\/\/digitalfabric\.in\/new-old\//gi,
      "https://wp.digitalfabric.in/"
    )

    .replace(
      /https:\/\/digitalfabric\.in\/new-old/gi,
      "https://wp.digitalfabric.in"
    )

    /* Old HTTP production path */
    .replace(
      /http:\/\/digitalfabric\.in\/new-old\//gi,
      "https://wp.digitalfabric.in/"
    )

    .replace(
      /http:\/\/digitalfabric\.in\/new-old/gi,
      "https://wp.digitalfabric.in"
    );
}


/* =========================================================
   GET WORDPRESS POST
========================================================= */

async function getPost(
  slug: string
): Promise<WordPressPost | null> {

  const apiUrl =
    process.env.WORDPRESS_API_URL;

  if (!apiUrl) {
    console.error(
      "WORDPRESS_API_URL is not configured"
    );

    return null;
  }

  try {
    /*
     * The direct:
     *
     * /posts?slug=...
     *
     * request was returning 403.
     *
     * The working WordPress endpoint is:
     *
     * /posts?per_page=50&_embed
     *
     * So we use that first.
     */

    let response = await fetch(
      `${apiUrl}/posts?per_page=50&_embed`,
      {
        next: {
          revalidate: 300,
        },
      }
    );

    if (!response.ok) {
      console.error(
        `WordPress API error: ${response.status}`
      );

      return null;
    }

    let posts: WordPressPost[] =
      await response.json();


    /* =====================================================
       FIND ARTICLE IN FIRST 50 POSTS
    ===================================================== */

    let post = posts.find(
      (item) => item.slug === slug
    );

    if (post) {
      return post;
    }


    /* =====================================================
       IF NOT FOUND, TRY ADDITIONAL PAGES
    ===================================================== */

    for (let page = 2; page <= 5; page++) {

      response = await fetch(
        `${apiUrl}/posts?per_page=50&page=${page}&_embed`,
        {
          next: {
            revalidate: 300,
          },
        }
      );


      /*
       * WordPress returns 400 when the requested
       * page does not exist.
       *
       * In that case, simply stop searching.
       */

      if (!response.ok) {
        break;
      }

      posts =
        await response.json();

      post = posts.find(
        (item) => item.slug === slug
      );

      if (post) {
        return post;
      }


      /*
       * Less than 50 means this was the final page.
       */

      if (posts.length < 50) {
        break;
      }
    }


    console.error(
      `WordPress article not found: ${slug}`
    );

    return null;

  } catch (error) {

    console.error(
      "Failed to fetch WordPress article:",
      error
    );

    return null;
  }
}


/* =========================================================
   CREATE EXCERPT
========================================================= */

function createExcerpt(html: string): string {
  if (!html) {
    return "";
  }

  const plainText = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!plainText) {
    return "";
  }

  return plainText.length > 240
    ? `${plainText.slice(0, 240).trim()}...`
    : plainText;
}


/* =========================================================
   CALCULATE READ TIME
========================================================= */

function calculateReadTime(html: string): string {
  const plainText = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = plainText
    ? plainText.split(" ").length
    : 0;

  const minutes = Math.max(
    1,
    Math.ceil(words / 200)
  );

  return `${minutes} MIN READ`;
}


/* =========================================================
   ARTICLE PAGE
========================================================= */

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const post = await getPost(slug);


  /* =======================================================
     ARTICLE NOT FOUND
  ======================================================= */

  if (!post) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#ffffff",
        }}
      >
        <Header />

        <section
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "120px 24px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                color: "#06233d",
                marginBottom: "16px",
              }}
            >
              Article not found
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#26384a",
              }}
            >
              The requested article could
              not be found.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    );
  }


  /* =======================================================
     ARTICLE INFORMATION
  ======================================================= */

  const title =
    decodeHtmlEntities(
      post.title.rendered
    );


  const author =
    decodeHtmlEntities(
      post._embedded
        ?.author?.[0]?.name ||
        "DigitalFabric"
    );


  const terms =
    post._embedded
      ?.["wp:term"]
      ?.flat() || [];


  const category =
    terms.find(
      (term) =>
        term.taxonomy === "category"
    )?.name ||
    "Articles";


  /* =======================================================
     FEATURED IMAGE
  ======================================================= */

  const featuredImage =
    post._embedded
      ?.["wp:featuredmedia"]?.[0]
      ?.source_url;


  const image =
    featuredImage
      ? fixWordPressUrls(
          featuredImage
        )
      : null;


  /* =======================================================
     ARTICLE CONTENT
  ======================================================= */

  const articleContent =
    fixWordPressUrls(
      post.content.rendered
    );


  /* =======================================================
     DATE
  ======================================================= */

  const date =
    new Date(
      post.date
    ).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );


  /* =======================================================
     EXCERPT
  ======================================================= */

  const excerpt =
    createExcerpt(
      articleContent
    );


  /* =======================================================
     READ TIME
  ======================================================= */

  const readTime =
    calculateReadTime(
      articleContent
    );


  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <main
      style={{
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >

      {/* =========================================
          HEADER
      ========================================= */}

      <Header />


      {/* =========================================
          ARTICLE DETAIL
      ========================================= */}

      <ArticleDetail
        article={{
          title,
          date,
          author,
          category,
          featuredImage: image || undefined,
          content: articleContent,
          excerpt,
          readTime,
        }}
      />


      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />

    </main>
  );
}