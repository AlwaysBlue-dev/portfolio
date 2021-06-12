import { Tooltip } from "@material-ui/core";
import React from "react";

const Skills = () => {
  return (
    <>
      {/* <!-- Skills--> */}
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages & Tools</div>
          <ul className="list-inline dev-icons">
            <Tooltip title="HTML5">
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
            </Tooltip>
            <Tooltip title="CSS3">
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
            </Tooltip>
            <Tooltip title="JavaScript">
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
            </Tooltip>
            <Tooltip title="Angular">
              <li className="list-inline-item">
                <i className="fab fa-angular"></i>
              </li>
            </Tooltip>
            <Tooltip title="React.js">
              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
            </Tooltip>
            <Tooltip title="Node.js">
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
            </Tooltip>
            <Tooltip title="SASS">
              <li className="list-inline-item">
                <i className="fab fa-sass"></i>
              </li>
            </Tooltip>
            <Tooltip title="less">
              <li className="list-inline-item">
                <i className="fab fa-less"></i>
              </li>
            </Tooltip>
            <Tooltip title="Wordpress">
              <li className="list-inline-item">
                <i className="fab fa-wordpress"></i>
              </li>
            </Tooltip>
            <Tooltip title="Gulp.js">
              <li className="list-inline-item">
                <i className="fab fa-gulp"></i>
              </li>
            </Tooltip>
            <Tooltip title="Grunt">
              <li className="list-inline-item">
                <i className="fab fa-grunt"></i>
              </li>
            </Tooltip>
            <Tooltip title="npm">
              <li className="list-inline-item">
                <i className="fab fa-npm"></i>
              </li>
            </Tooltip>
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Mobile-First, Responsive Design
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Browser Testing & Debugging
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Functional Teams
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Agile Development & Scrum
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};
export default Skills;
