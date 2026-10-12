import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import SocialActionPosts from "../../components/SocialActionBanner/SocialActionPosts";
import SocialPost from "../../components/SocialActionBanner/SocialPost";

export default function SocialActionPage() {
  return (
    <main>
      <Header />

  <PageHeader
          title="SOCIAL ACTION"
         
          backgroundImage="/images/social-action-banner.png"
         
        />
  
      <SocialPost />

      <Footer />
    </main>
  );
}