import "./index_page.css";
import WebsiteName from "../common/WebsiteName/WebsiteName";
import Navbar from "../common/Navbar/NavBar";
import Main_Sec_0 from "./Main/main_sec_0";
import Main_Sec_1 from "./Main/Main_Sec_1";
import Image_Deco from "../common/Image_Deco/Image_Deco";
import Main_Course_section from "./Main_Course_section/Main_Course_section";
import Footer from "../common/Footer/Footer";
export default function index_page() {
  return (
    <>
      <section className="bgHomeImage">
        <WebsiteName />
        <Navbar />
        <Main_Sec_0 />
        <Main_Sec_1 />
        <Image_Deco />
        <Main_Course_section />
        <Footer />
      </section>
    </>
  );
}
