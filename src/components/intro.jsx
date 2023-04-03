import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  constructor() {
    super();
    const curHour = new Date().getHours();
    if (curHour < 12) {
      this.greeting = "morning!";
    } else if (curHour < 17) {
      this.greeting = "afternoon!";
    } else {
      this.greeting = "evening!";
    }
  }
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-subtitle mb-4">
                Good {this.greeting}{" "}
                <p className="intro-title mb-4">I'm Akshit Lalit</p>
              </h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <span>I build apps for </span>
                  <Typed
                    strings={["web", "android", "iOS"]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-dark btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
