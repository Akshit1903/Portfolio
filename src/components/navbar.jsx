import React from "react";
import $ from "jquery";

import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1,
    };
  }
  toggleLogo() {
    if (this.state.logo == logo1) {
      this.setState({ logo: logo2 });
      document.querySelector(".resume-btn").classList.remove("btn-light");
      document.querySelector(".resume-btn").classList.add("btn-primary");
    } else {
      document.querySelector(".resume-btn").classList.add("btn-light");
      document.querySelector(".resume-btn").classList.remove("btn-primary");
      this.setState({ logo: logo1 });
    }
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();
    const mainNav = $("#mainNav");
    $(".navbar-toggler").on("click", () => {
      this.toggleLogo();
      if (!mainNav.hasClass("navbar-reduce")) {
        mainNav.addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight,
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        document.querySelector(".resume-btn").classList.remove("btn-light");
        document.querySelector(".resume-btn").classList.add("btn-primary");
        this.setState({ logo: logo2 });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        document.querySelector(".resume-btn").classList.add("btn-light");
        document.querySelector(".resume-btn").classList.remove("btn-primary");
        this.setState({ logo: logo1 });
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5,
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
            <img
              src={this.state.logo}
              alt="logo"
              style={{ maxWidth: "180px" }}
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="https://github.com/Akshit1903/Akshit1903/raw/main/resume_akshit.pdf"
              target="_blank"
              className="btn btn-light resume-btn"
              role="button"
            >
              RESUME <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
