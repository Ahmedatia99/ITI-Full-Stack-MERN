import React from "react";
import "../css/Section.css";
import MyCard from "./MyCard";

function Section() {
  return (
    <div className="container">
      <h2 className="text-center mt-5">Our Products</h2>
      <div className="row mt-4 g-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <MyCard />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
