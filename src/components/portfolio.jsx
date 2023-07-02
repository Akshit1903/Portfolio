import React from "react";

import easymi_tutorial from "../img/easymi/1.gif";
import easymi_1 from "../img/easymi/1.jpg";
import easymi_2 from "../img/easymi/2.jpg";
import easymi_3 from "../img/easymi/3.jpg";
import easymi_4 from "../img/easymi/4.jpg";
import easymi_5 from "../img/easymi/5.jpg";
import mergerman_1 from "../img/mergerman/mm1.gif";
import mergerman_2 from "../img/mergerman/mm2.gif";
import mobibyte_1 from "../img/mobibyte/1.jpg";
import mobibyte_2 from "../img/mobibyte/2.jpg";
import mobibyte_3 from "../img/mobibyte/3.jpg";
import mobibyte_4 from "../img/mobibyte/4.jpg";
import mobibyte_5 from "../img/mobibyte/5.jpg";
import mobibyte_6 from "../img/mobibyte/6.jpg";
import add_tag_demo from "../img/taggy/add_tag_demo.gif";
import search_tags from "../img/taggy/search_tags.gif";
import tictactoe_1 from "../img/tictactoe/1.png";
import tictactoe_2 from "../img/tictactoe/2.png";
import working from "../img/taggy/working.png";
import feetwings_1 from "../img/feetwings/1.jpg";
import feetwings_2 from "../img/feetwings/2.jpg";
import compose from "../img/dailyjournal/compose.gif";
import navigation from "../img/dailyjournal/navigation.gif";
import places from "../img/great-places/places.gif";
import mailchimp from "../img/newsletter/mailchimp.png";
import newsletter_proc from "../img/newsletter/newsletter_proc.gif";
import keeper_demo1 from "../img/keeper/keeper_demo1.gif";
import keeper_demo2 from "../img/keeper/keeper_demo2.gif";

class Portfolio extends React.Component {
  Project({
    first,
    previews,
    lightboxName,
    desciption,
    detailPics,
    title,
    techStack,
    youtubeLink,
    githubLink,
    deployedLink,
  }) {
    return (
      <div className=" col-md-4">
        <div className="work-box " data-aos="zoom-in-up">
          <a href={first} data-lightbox={lightboxName}>
            <div className="work-img ">
              {previews.map((preview) => {
                return <img src={preview} className="img-fluid" />;
              })}
              <div className="d-flex ">
                <p className="project-desc">{desciption}</p>
              </div>
            </div>
          </a>
          {detailPics.map((detailPic) => {
            return (
              <a
                href={detailPic}
                data-lightbox={lightboxName}
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            );
          })}
        </div>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="w-title">{title}</h2>
              <div className="w-more">
                <span className="w-ctegory">{techStack}</span>
              </div>
              <div className="mt-2">
                {youtubeLink === undefined ? (
                  <div></div>
                ) : (
                  <a
                    href={youtubeLink}
                    className="btn btn-outline-primary btn-sm m-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                )}
                {githubLink === undefined ? (
                  <div></div>
                ) : (
                  <a
                    href={githubLink}
                    className="btn btn-outline-primary btn-sm m-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {deployedLink === undefined ? (
                  <div></div>
                ) : (
                  <a
                    href={deployedLink}
                    className="btn btn-outline-primary btn-sm m-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deployed
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            <this.Project
              first={easymi_tutorial}
              previews={[easymi_tutorial]}
              lightboxName="gallery-easymi"
              desciption=<ul>
                <li>
                  This shopping app integrates NFC (Near Field Communication)
                  technology to enable users to scan products and make purchases
                  seamlessly.
                </li>
                <li>
                  The app provides a convenient and interactive shopping
                  experience, allowing users to browse products, view details,
                  add items to the cart, and open products using NFC technology.
                </li>
                <li>
                  Firebase is utilized for secure user authentication and
                  real-time data synchronization.
                </li>
              </ul>
              detailPics={[easymi_1, easymi_2, easymi_3, easymi_4, easymi_5]}
              title="EasyMi: Shop App with NFC Support"
              techStack="Flutter/Dart, Firebase"
              youtubeLink="https://youtu.be/8rK-K-Eq_qg"
              githubLink="https://github.com/Akshit1903/EasyMi"
              deployedLink="https://github.com/Akshit1903/EasyMi/raw/main/app-release.apk"
            />
            <this.Project
              first={mergerman_1}
              previews={[mergerman_1, mergerman_2]}
              lightboxName="gallery-mergerman"
              desciption=<ul>
                <li>
                  MergerMan is a simple, minimal yet robust and efficient PDF
                  merger application that merges two or more PDF file into one
                  PDF file;
                </li>
                <li>
                  Session management which enables the server to process
                  multiple users concurrently.
                </li>
              </ul>
              detailPics={[mergerman_1, mergerman_2]}
              title="MergerMan: PDF file merging tool"
              techStack="EJS Express Node.js MongoDB HTML CSS Bootstrap"
              youtubeLink="https://youtu.be/A-LjRjullyg"
              githubLink="https://github.com/Akshit1903/MergerMan"
              deployedLink="https://merger-man.vercel.app/"
            />

            <this.Project
              first={mobibyte_1}
              previews={[mobibyte_1]}
              lightboxName="gallery-mobibyte"
              desciption=<ul>
                <li>
                  The MobiByte (MOBY) Crypto Mining App is a frontend
                  application developed using Flutter and Firebase.
                </li>
                <li>
                  It allows users to mine the hypothetical MobiByte
                  cryptocurrency (MOBY) using their mobile devices.
                </li>
              </ul>
              detailPics={[
                mobibyte_2,
                mobibyte_3,
                mobibyte_4,
                mobibyte_5,
                mobibyte_6,
              ]}
              title="MobiByte: Cryptocurrency mining"
              techStack="Flutter/Dart Firebase"
              youtubeLink="https://youtu.be/Vq0BWUgAImA"
              githubLink="https://github.com/Akshit1903/MobiByte"
              deployedLink="https://github.com/Akshit1903/MobiByte/raw/main/app-release.apk"
            />

            <this.Project
              first={add_tag_demo}
              previews={[add_tag_demo, search_tags]}
              lightboxName="gallery-taggy"
              desciption=<span>
                <ul>
                  <li>
                    Taggy is a file tagging system developed using C++ and QT
                    Creator.
                  </li>
                  <li>
                    It provides a convenient way to tag files with custom labels
                    or categories, making it easier to organize and search for
                    files based on their tags.
                  </li>
                </ul>
                Click to View Example:
                <ul>
                  <li>Consider two files file1.txt and file2.txt.</li>
                  <li>
                    We add the tags academics and maths to file1.txt and maths
                    to file2.txt.
                  </li>
                </ul>
              </span>
              detailPics={[search_tags, working]}
              title="Taggy: Desktop files tagging"
              techStack="C++, QT Creator"
              youtubeLink="https://youtu.be/maRVWniys08"
              githubLink="https://github.com/Akshit1903/Taggy"
              deployedLink="https://github.com/Akshit1903/TaggyDeployment"
            />
            <this.Project
              first={tictactoe_1}
              previews={[tictactoe_1, tictactoe_2]}
              lightboxName="gallery-tictactoe"
              desciption="TicTacToe is a fun and interactive way to play the classic Tic Tac Toe game against AI opponent."
              detailPics={[tictactoe_1, tictactoe_2]}
              title="TicTacToe"
              techStack="ReactJS HTML CSS"
              youtubeLink="https://youtu.be/5LpbJYqvHrg"
              githubLink="https://github.com/Akshit1903/TicTacToe"
              deployedLink="https://akshit1903.github.io/TicTacToe/"
            />
            <this.Project
              first={feetwings_1}
              previews={[feetwings_1, feetwings_2]}
              lightboxName="gallery_feetwings"
              desciption=<ul>
                <li>
                  The FeetWings App Authentication is a frontend application
                  developed using Flutter and Firebase.
                </li>
                <li>
                  It provides a seamless and secure user authentication
                  experience for the FeetWings app, ensuring that users can
                  safely access the app's features and services using OTP.
                </li>
              </ul>
              detailPics={[feetwings_2]}
              title="FeetWings: OTP Login"
              techStack="Flutter/Dart Firebase"
              youtubeLink="https://github.com/Akshit1903/FeetWings/blob/main"
              githubLink="https://github.com/Akshit1903/FeetWings"
              deployedLink="https://github.com/Akshit1903/FeetWings/blob/main"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
