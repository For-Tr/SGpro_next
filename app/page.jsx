import Accommodations from "./accommodations/accommodations";
import Banner from "./banner/banner";
import Blog from "./blog/blog";
import Deluxe from "./deluxe/deluxe";
import Feature from "./feature/feature";
import Footer from "./footer/footer";
import HeaderOne from "./header/HeaderOne";
import ScrollToTopButton from "./scroll-to-top/scrollToTop";
import Services from "./services/services";
import Testimonial from "./testimonial/testimonial";
import Videoarea from "./videoarea/videoarea";
import SEO from "@/components/seo";
import Roomlistblogs from "./room-list/room-list-blogs";


export default function Home() {
  return (
    <>
      <SEO pageTitle="Home Default" />
        <HeaderOne />
        <Banner />
        <Roomlistblogs />

    </>
  );
}
