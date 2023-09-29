import React from "react";
import "./Main_Sec_1.css";
function Main_Sec_1() {
  return (
    <>
      <section className="main-sec_2">
        <div className="row row-cols-1 row-cols-md-2" id="container">
          <section className="left col-sm-6" id="about-image"></section>
          <section  id="right" className="col-sm-6">
            <div className="row">
              <div id="rightHeading">
                <h3 id="main-sec_2_h3">LEARN ANYTHING</h3>
                <h1 id="main-sec_2_h1">Benefits About Learning Expertise</h1>
              </div>
              <div className="items">
                <div className="item_flexSB">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                    alt="" className="mainSec1Img"
                  />
                  <div className="text">
                    <h2>Online/Offline Courses</h2>
                    <h6 className="main-sec_2_h2_p">
                      Online or Offline Course available for your comfirtablity.
                    </h6>
                  </div>
                </div>
                <div className="item_flexSB">
                  <img
                    src="https://img.icons8.com/ios/80/000000/athlete.png"
                    alt="" className="mainSec1Img"
                  />
                  <div className="text">
                    <h2>Learn with Expert</h2>
                    <h6 className="main-sec_2_h2_p">
                      Sun and Microsoft certified faculty.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
export default Main_Sec_1;
