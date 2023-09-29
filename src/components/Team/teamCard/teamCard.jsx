import React from "react";
import "./teamCard.css";
import instructor from "./team.json";
export default function teamCard() {
  return (
    <>
      <section className="instructor_sec">
        <div className="card " id="oDivCard" key={instructor.id}>
          <img className="imge" src={instructor.cover} alt={instructor.name} />
          <div className="card-body">
            <h4 className="card-title TeacherDetails">{instructor.name}</h4>
            <p className="card-text TeacherDetails">{instructor.work}</p>
          </div>
        </div>
      </section>
    </>
  );
}
