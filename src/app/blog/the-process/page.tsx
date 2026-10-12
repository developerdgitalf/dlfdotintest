import BlogArticle1 from "../../../components/BlogArticle/BlogArticle1";

import PageHeader2 from "../../../components/PageHeader2/PageHeader2";

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";





export default function BlogPage() {
  return (
    <main>
      <Header />


       <PageHeader2
              title=" Process"
              description=""
              backgroundImage="/images/services-network-bg.png"
             
              buttonLink="#services-content"
            />

      <BlogArticle1 />

      <Footer />
    </main>
  );
}