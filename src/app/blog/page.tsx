
import BlogArticle from "../../components/BlogArticle/BlogArticle";

import PageHeader2 from "../../components/PageHeader2/PageHeader2";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";





export default function BlogPage() {
  return (
    <main>
      <Header />


       <PageHeader2
              title=" PEOPLE"
              description=""
              backgroundImage="/images/services-network-bg.png"
        
              buttonLink="#services-content"
            />

      <BlogArticle />

      <Footer />
    </main>
  );
}