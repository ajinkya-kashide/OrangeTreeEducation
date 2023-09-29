import React from "react";
import "../common/bg.css";
import WebsiteName from "../common/WebsiteName/WebsiteName";
import Navbar from "../common/Navbar/NavBar";
import Location from "../common/Location/Location";
import TeamCard from "../Team/teamCard/teamCard";
import Deco from "../common/Image_Deco/Image_Deco";
import Footer from "../common/Footer/Footer";
export default function Team() {
  return (
    <>
      <section className="bgImageCommon">
        <WebsiteName />
        <Navbar />
        <Location />
        <TeamCard />
        <Deco />
        <Footer />
      </section>
    </>
  );
}
