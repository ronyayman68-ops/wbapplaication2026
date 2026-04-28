import "./skill.css";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Specializing in full-stack development and creative web
                solutions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <div className="circle-bg">95%</div>
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <div className="circle-bg">90%</div>
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <div className="circle-bg">75%</div>
                  <h5>UI/UX Design</h5>
                </div>
                <div className="item">
                  <div className="circle-bg">80%</div>
                  <h5>Full Stack Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
