import React from "react";

function About() {
  return (
    <>
      <div className="container" style={{ color: "white" }}>
        <h1 className="my-3">About NotesSensei</h1>
        <div className="accordion" id="accordionExample">
          <div
            className="accordion-item"
            style={{ backgroundColor: "#292a30", color: "white" }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={{ backgroundColor: "#60666e", color: "white" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Who Am I?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Akshay Ghatiki</strong>
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{ backgroundColor: "#292a30", color: "white" }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{ backgroundColor: "#60666e", color: "white" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What do I do?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Software Developer</strong>
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{ backgroundColor: "#292a30", color: "white" }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{ backgroundColor: "#60666e", color: "white" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Why NotesSensei?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Because you will need it</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
