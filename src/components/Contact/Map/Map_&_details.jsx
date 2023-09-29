import React from "react";
import "./Map_&_details.css";
export default () => {
  const Location =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233.19574610002644!2d78.59809276177148!3d20.74544579569693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677829198811!5m2!1sen!2sin";
  return (
    <>
      <div className="con">
        <div class="row row-cols-1 w-100 row-cols-md-2 g-4">
          <div className="left">
            <iframe className="" src={Location}></iframe>
          </div>
          <div className="right">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className="box">
              <h4>ADDRESS:</h4>
              <div className="address">
                Dolphin Logic Systems Private Limited,<br/>Gond Plot, R. T.
                Road,<br/>Wardha - 442001
              </div>
              <div className="email">
                <h4>Email Id:-</h4>
                <a className="nohover" href="mailto:www.orangetree.guru">
                  www.orangetree.guru
                </a>
              </div>
              <div className="phone">
                <h4>Phone Number:-</h4>
                <a className="nohover" href="tel:+91 9766698067">
                  +91 9766698067
                </a>
                <a className="nohover" href="tel:+91 8378002707">
                  +91 8378002707
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
