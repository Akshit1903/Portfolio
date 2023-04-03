import React from "react";
import leetcode_icon from "../img/leetcode_icon.png";
import gfg_icon from "../img/gfg_icon.png";
import SolarSystem from "./solar-system";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content: (
            <div>
              <h4>Skills:</h4>
              <strong>Languages:</strong>
              <p>C/C++, Dart, HTML, CSS, JavaScript</p>
              <strong>Technologies/Frameworks/Libraries:</strong>
              <p>
                Data Structures and Algorithms, Flutter, React, Firebase, Git,
                Figma
              </p>
              <strong>Database:</strong>
              <p>MySQL, MongoDB, FireStore</p>
              <strong>Exploration</strong>
              <p>Node.js, Next.js, Competitive Programming</p>
            </div>
          ),
        },
        {
          id: "second-p-about",
          content: (
            <div>
              <h4>About:</h4>
              <p>
                As a computer science student with a passion for software
                development, I am thrilled at the prospect of gaining hands-on
                experience and contributing to open source and proprietary
                projects. I've learned the basics of computers while studying
                topics like operating systems, computer networks, database
                management systems, etc. I've also finished a number of projects
                that have helped me hone my software design, data structure, and
                algorithmic skills. I also have experience working cooperatively
                with team members to complete projects and am knowledgeable
                about libraries and frameworks like Flutter and React.
              </p>
            </div>
          ),
        },
        {
          id: "third-p-about",
          content:
            "The chance to work on actual projects that have a significant impact on users' lives is what makes software engineering exciting to me. I am eager to learn from experienced developers and gain insights into the software development process at a top-tier company.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <SolarSystem />
                    <br />
                    <a href="https://leetcode.com/akshit19/">
                      <img
                        id="leetcode-stats"
                        src="https://leetcard.jacoblin.cool/akshit19?theme=light"
                        alt="Akshit's Leetcode Profile"
                      />
                    </a>
                    <div className="socials mx-5 text-center">
                      <ul>
                        <li>
                          <a
                            href="https://leetcode.com/akshit19/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <img
                                src={leetcode_icon}
                                alt="leetcode icon"
                                height="25"
                                width="25"
                              />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://auth.geeksforgeeks.org/user/akshitlalit/practice/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <img
                                src={gfg_icon}
                                alt="gfg icon"
                                height="25"
                                width="25"
                              />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <div>
                            <p key={content.id}>
                              {content.content}
                              <hr className="lead" />
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
