import React from "react";
import myImage from "../img/myImage.png";

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
                    <div className="skill-mf">
                      <div className="skills-circle-wrap">
                        <div className="skills-circle">
                          {/* 5th Orbit */}
                          <div className="skill-orbit">
                            <div className="skill-planet">
                              <span>
                                <img
                                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                                  alt="mongodb"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                            <div className="skill-planet">
                              <span>
                                <img
                                  id="mysql-logo"
                                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                                  alt="mysql"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                          </div>
                          {/* 4th Orbit */}
                          <div className="skill-orbit">
                            <div className="skill-planet">
                              <span>
                                <img
                                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                                  alt="bootstrap"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                            <div className="skill-planet ">
                              <span>
                                <img
                                  id="figma-logo"
                                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                                  alt="figma"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                            <div className="skill-planet">
                              <span>
                                <img
                                  id="firebase-logo"
                                  src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                                  alt="firebase"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                          </div>
                          {/* 3rd Orbit */}
                          <div className="skill-orbit">
                            <div className="skill-planet">
                              <span>
                                <img
                                  src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
                                  alt="flutter"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                            <div className="skill-planet">
                              <span>
                                <img
                                  id="dart-logo"
                                  src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
                                  alt="dart"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                            <div className="skill-planet">
                              <span>
                                <img
                                  id="android-logo"
                                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
                                  alt="dart"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                          </div>
                          {/* 2nd Orbit */}
                          <div className="skill-orbit">
                            <div className="skill-planet">
                              <span>
                                <img
                                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                                  alt="html5"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                            <div className="skill-planet ">
                              <span>
                                <img
                                  id="css-logo"
                                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                                  alt="css3"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                            <div className="skill-planet">
                              <span>
                                <img
                                  id="javascript-logo"
                                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                  alt="javascript"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                          </div>
                          {/* 1st Orbit */}
                          <div className="skill-orbit">
                            <div className="skill-planet">
                              <span>
                                <img
                                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                                  alt="c"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                            <div className="skill-planet">
                              <span>
                                <img
                                  id="cpp-logo"
                                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                                  alt="cpp"
                                  width="30"
                                  height="30"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Sun */}
                        <div className="skills-top-circle panel">
                          {/* <img
                            src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif"
                            width={20}
                            height={20}
                          /> */}
                        </div>
                      </div>
                    </div>
                    <br />
                    <spacer />
                    <a href="https://leetcode.com/akshit19/">
                      <img
                        id="leetcode-stats"
                        src="https://leetcard.jacoblin.cool/akshit19?theme=light"
                        alt="Akshit's Leetcode Profile"
                      />
                    </a>
                    <spacer />
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
