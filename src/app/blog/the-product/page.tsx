import BlogArticle3 from "../../../components/BlogArticle/BlogArticle3";
import PageHeader2 from "../../../components/PageHeader2/PageHeader2";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";



export default function BlogPage() {
  return (
    <main>
      <Header />


       <PageHeader2
              title=" Product"
              description=""
              backgroundImage="/images/services-network-bg.png"
             
              buttonLink="#services-content"
            />

      <BlogArticle3 />

      <Footer />
    </main>
  );
}