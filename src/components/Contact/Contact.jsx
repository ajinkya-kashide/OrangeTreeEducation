import React from "react";
import "../common/bg.css";
import WebsiteName from "../common/WebsiteName/WebsiteName";
import Navbar from "../common/Navbar/NavBar";
import Location from "../common/Location/Location";
import Map__details from "./Map/Map_&_details";
import Footer from "../common/Footer/Footer";
export default function Contact() {
  return (
    <>
      <section className="bgImageCommon">
        <WebsiteName />
        <Navbar />
        <Location />
        <Map__details />
        <Footer />
      </section>
    </>
  );
}
