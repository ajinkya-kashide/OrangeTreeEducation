import React from "react";
import "./Courses_Details.css";
import all_Course_details from "./Courses-Data.json";
export default function Courses_Details() {
  return (
    <>
      <section className="coursesCardSection">
        <div className="courses_Title">
          <h4>COURSES</h4>
          <h1>Browse Our Courses</h1>
        </div>
        <div id="outer_div">
          {all_Course_details.map((val) => (
            <div
              id="card_body" key={val.id}
              className="row row-cols-2 row-cols-md-5  h-25">
              <div className="card" id="coursesCardDiv">
                <img src={val.cover} className="card-img-top text-dark w-75" alt={val.courseName} />
                <div className="card-body d-flex row" id="c_details">
                  <h6 className="card-title text-center fw-bold">
                    {val.courseName}
                  </h6>
                  <a
                    href=""
                    id="knowMore">
                    {val.course}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
