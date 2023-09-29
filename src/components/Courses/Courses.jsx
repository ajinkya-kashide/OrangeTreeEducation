import React from "react";
import "../common/bg.css";
import WebsiteName from "../common/WebsiteName/WebsiteName";
import Navbar from "../common/Navbar/NavBar";
import Location from "../common/Location/Location";
import Courses_Details from "./Courses_Card/Courses_Details";
import Footer from "../common/Footer/Footer";
export default function Courses() {
  return (
    <>
      <section className="bgImageCommon">
        <WebsiteName />
        <Navbar />
        <Location />
        <Courses_Details />
        <Footer />
      </section>
    </>
  );
}
