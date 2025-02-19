import Banner from "./banner/banner";

import HeaderOne from "./header/HeaderOne";

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
