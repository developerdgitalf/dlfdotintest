import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import PageHeader from "../../../components/PageHeader/PageHeader";
import BlogSection, {
  BlogPost,
} from "../../../components/KnowledgeShareHero/ITGovernance/BlogSection";

interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
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

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&amp;/g, "&")
    .trim();
}

function fixWordPressImageUrl(
  imageUrl?: string
): string {
  if (!imageUrl) {
    return "/images/blog/business-sustenance.jpg";
  }

  return imageUrl.replace(
    "https://digitalfabric.in/new-old/",
    "https://wp.digitalfabric.in/"
  );
}

async function getWordPressPosts(): Promise<BlogPost[]> {
  const apiUrl = process.env.WORDPRESS_API_URL;

  if (!apiUrl) {
    console.error(
      "WORDPRESS_API_URL is not configured"
    );

    return [];
  }

  try {
    const response = await fetch(
      `${apiUrl}/posts?per_page=50&_embed`,
      {
        next: {
          revalidate: 300,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `WordPress API error: ${response.status}`
      );
    }

    const posts: WordPressPost[] =
      await response.json();

    return posts.map((post) => {
      const terms =
        post._embedded?.["wp:term"]?.flat() || [];

      const categories = terms.filter(
        (term) => term.taxonomy === "category"
      );

      const featuredImage =
        post._embedded?.["wp:featuredmedia"]?.[0]
          ?.source_url;

      return {
        id: post.id,

        title: stripHtml(
          post.title.rendered
        ),

        description: stripHtml(
          post.excerpt.rendered
        ),

        image: fixWordPressImageUrl(
          featuredImage
        ),

        category:
          categories[0]?.name ||
          "Business",

        date: new Date(
          post.date
        ).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ),

        author:
          post._embedded?.author?.[0]?.name ||
          "DigitalFabric",

        slug: post.slug,
      };
    });
  } catch (error) {
    console.error(
      "Failed to fetch WordPress posts:",
      error
    );

    return [];
  }
}

export default async function ResearchMarketStudyPage() {
  const posts =
    await getWordPressPosts();

  return (
    <main>
      <Header />

      <PageHeader
        title="ARTICLES AND PAPERS"
        description="IN TECHNOLOGY – All FORCES ARE COMPLEMENTARY."
        backgroundImage="/images/why-digital-fabric-hero-image-3.jpg"
      />

      <section id="services-content">
        <BlogSection posts={posts} />
      </section>

      <Footer />
    </main>
  );
}