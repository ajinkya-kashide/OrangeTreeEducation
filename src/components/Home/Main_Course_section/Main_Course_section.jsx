import React from "react";
import "./Main_Course_section.css";
import course from "./Main_Courses.json";
function Course_details_card() {
  return (
    <>
      <section id="COURSE">
        <div id="heading">
          <h3>Notice Board</h3>
          <h1>Upcomming Batches</h1>
        </div>
      </section>
      <section id="card_sec">
        <div id="cardBody" className="row row-cols-2 row-cols-md-3 g-4">
          {course.map((val) => (
            <div id="card_hover" key={val.id} className="col">
              <div id="card_img_title" className="card h-100">
                <span id="img_and_title">
                  <img
                    id="card_img"
                    src={val.cover}
                    className="card-img-top"
                    alt="JAVA"
                  />
                  <h3 id="langName" className="card-title cardColorHover">
                    {val.name}
                    <span
                      id="comming_soon"
                      className="cardColorHover fw-light">
                      {val.post}
                    </span>
                  </h3>
                </span>
                <div className="card-body">
                  <p id="langDisc" className="card-text cardColorHover">{val.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Course_details_card;
