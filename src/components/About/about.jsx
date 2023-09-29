import React from "react";
import "../common/bg.css";
import WebsiteName from "../common/WebsiteName/WebsiteName";
import Navbar from "../common/Navbar/NavBar";
import Location from "../common/Location/Location";
import Main_Sec from "../Home/Main/Main_Sec_1";
import Deco from "../common/Image_Deco/Image_Deco";
import Footer from "../common/Footer/Footer";
export default function about() {
  return (
    <><section className="bgImageCommon">
      <WebsiteName />
      <Navbar />
      <Location />
      <Main_Sec />
      <Deco/>
      <Footer />
    </section>
    </>
  );
}
