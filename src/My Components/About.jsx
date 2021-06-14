import { Tooltip } from "@material-ui/core";

import React from "react";

const About = () => {
  return (
    <>
      {/* <!-- Page Content--> */}
      <div className="container-fluid p-0">
        {/* <!-- About--> */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Mirza Abdullah
              <span className="text-primary">Baig</span>
            </h1>
            <div className="subheading mb-5">
              Karachi, Pakistan
              <p style={{ textTransform: "lowercase" }}>
                abdullahbaig3637@gmail.com
              </p>
            </div>
            <p className="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <div className="social-icons">
              <Tooltip title="Mirza Abdullah Baig">
                <a
                  href="https://www.linkedin.com/in/mirza-abdullah-baig-467246212/?originalSubdomain=pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </Tooltip>
              <Tooltip title="AlwaysBlue-dev">
                <a
                  href="https://github.com/AlwaysBlue-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-github"></i>
                </a>
              </Tooltip>
              <Tooltip title="abd.baig">
                <a
                  href="https://www.instagram.com/abd.baig/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </Tooltip>
              <Tooltip title="Abdullah Baig">
                <a
                  href="https://www.facebook.com/a4abdullah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </Tooltip>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
