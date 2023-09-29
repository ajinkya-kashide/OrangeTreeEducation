import React from "react";
import "./Location.css";
import { useLocation } from "react-router-dom";
const Location = ({ title }) => {
  const location = useLocation();
  const loc = location.pathname.split("/")[1];
  return (
    <>
      <div id="space">
        <h2>Home / {loc}</h2>
        <h1>{loc}</h1>
      </div>
    </>
  );
};
export default Location;
