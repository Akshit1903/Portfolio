import React from "react";

import easymi_tutorial from "../img/easymi/tutorial2.gif";
import easymi_home from "../img/easymi/home.jpg";
import easymi_about from "../img/easymi/about.png";
import add_tag_demo from "../img/taggy/add_tag_demo.gif";
import search_tags from "../img/taggy/search_tags.gif";
import use_cases from "../img/taggy/use_cases.png";
import working from "../img/taggy/working.png";
import compose from "../img/dailyjournal/compose.gif";
import navigation from "../img/dailyjournal/navigation.gif";
import places from "../img/great-places/places.gif";
import mailchimp from "../img/newsletter/mailchimp.png";
import newsletter_proc from "../img/newsletter/newsletter_proc.gif";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a"></p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="work-box" data-aos="zoom-in-up">
                <a href={easymi_tutorial} data-lightbox="gallery-easymi">
                  <div className="work-img">
                    <img
                      src={easymi_tutorial}
                      alt="easymi_tutorial"
                      className="img-fluid"
                    />
                    <p className="project-desc">
                      A Xiaomi Store that enables user to access store features
                      in a fast and efficient manner.NFC tags mapped to specific
                      products. Very simple to use UI with no banners and new
                      launches. Item count shown on cart in the form of batch.A
                      holistic billing application that does all the tasks,
                      right from viewing and managing products to placing
                      orders. Reduces the effort of both the customer and the
                      seller by using an NFC tag that enables the customer to
                      see all the information of a product and order it just by
                      a tap.
                    </p>
                  </div>
                </a>
                <a
                  href={easymi_home}
                  data-lightbox="gallery-easymi"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={easymi_about}
                  data-lightbox="gallery-easymi"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">EasyMi</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Flutter/Dart, Firebase
                        </span>
                      </div>
                      <a
                        href="https://www.youtube.com/watch?v=T9C2cRTlgTI"
                        className="btn btn-outline-primary btn-sm m-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        YouTube
                      </a>
                      <a
                        href="https://github.com/Akshit1903/EasyMi"
                        className="btn btn-outline-primary btn-sm m-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box" data-aos="zoom-in-up">
                <a href={add_tag_demo} data-lightbox="gallery-taggy">
                  <div className="work-img">
                    <img src={add_tag_demo} alt="" className="img-fluid" />
                    <img src={search_tags} alt="" className="img-fluid" />
                    <p className="project-desc">
                      A holistic file tagging software that helps you tag files
                      and locate them with those tags hassle-free.
                      <br />
                      Advantages:
                      <br />
                      <ul>
                        <li>Performance and efficiency</li>
                        <li>User-friendly UI</li>
                        <li>Robustness</li>
                        <li>Can handle powerful queries</li>
                      </ul>
                      Click to View Example:
                      <ul>
                        <li>Consider two files file1.txt and file2.txt.</li>
                        <li>
                          We add the tags academics and maths to file1.txt and
                          maths to file2.txt.
                        </li>
                      </ul>
                    </p>
                  </div>
                </a>
                <a
                  href={search_tags}
                  data-lightbox="gallery-taggy"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={use_cases}
                  data-lightbox="gallery-taggy"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={working}
                  data-lightbox="gallery-taggy"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Taggy</h2>
                      <div className="w-more">
                        <span className="w-ctegory">C++, QT Creator</span>
                      </div>

                      <a
                        href="https://github.com/Akshit1903/Taggy"
                        className="btn btn-outline-primary btn-sm m-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box" data-aos="zoom-in-up">
                <a href={compose} data-lightbox="gallery-daily">
                  <div className="work-img">
                    <img src={compose} alt="" className="img-fluid" />
                    <img src={navigation} alt="" className="img-fluid" />
                    <div className="project-desc">
                      <ul>
                        <li>
                          A web-based application that allows users to keep
                          track of their daily thoughts, feelings, and
                          experiences.
                        </li>
                        <li>
                          The app is designed to be user-friendly, with a clean
                          and intuitive interface that makes it easy for users
                          to create new journal entries and browse through their
                          previous entries.
                        </li>
                      </ul>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </a>
                <a
                  href={navigation}
                  data-lightbox="gallery-daily"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Daily Journal</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Node.js, EJS, Express.js, HTML, CSS
                        </span>
                      </div>
                      <a
                        href="https://daily-journal-kohl.vercel.app/"
                        className="btn btn-outline-primary btn-sm m-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/Akshit1903/Daily-Journal"
                        className="btn btn-outline-primary btn-sm m-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box" data-aos="zoom-in-up">
                <a href={places} data-lightbox="gallery-places">
                  <div className="work-img">
                    <img src={places} alt="" className="img-fluid" />
                    <p className="project-desc">
                      <ul>
                        <li>
                          An app which can store user's place of choice with its
                          name, image and location, with the help of Google Maps
                          API.
                        </li>
                        <li>
                          It also provides a preview of chosen location after
                          the coordinates are selected.
                        </li>
                      </ul>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Great Places</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Flutter/Dart, Google Maps API
                        </span>
                      </div>

                      <a
                        href="https://github.com/Akshit1903/Great-Places"
                        className="btn btn-outline-primary btn-sm m-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box" data-aos="zoom-in-up">
                <a href={newsletter_proc} data-lightbox="gallery-newsletter">
                  <div className="work-img">
                    <img src={newsletter_proc} alt="" className="img-fluid" />
                    <img src={mailchimp} alt="" className="img-fluid" />

                    <p className="project-desc">
                      <ul>
                        <li>
                          An app which helps us organise and manage our
                          audiences as subscribers using MailChimp API.
                        </li>
                        <li>
                          User can subscribe to the hypothetical newsletter and
                          the admin can details of the corresponding user on the
                          portal.
                        </li>
                      </ul>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </a>
                <a
                  href={mailchimp}
                  data-lightbox="gallery-newsletter"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Newsletter Signup</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML CSS JavaScript Bootstrap
                        </span>
                      </div>
                      <a
                        href="https://newsletter-signup-2-eight.vercel.app/"
                        className="btn btn-outline-primary btn-sm m-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/Akshit1903/Newsletter-Signup"
                        className="btn btn-outline-primary btn-sm m-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </a>
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

export default Portfolio;

// Stock Project
// {
/* <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap MERN
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div> */
// }
