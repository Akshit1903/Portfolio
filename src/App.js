import React, { useEffect } from "react";

//import css in order
import "aos/dist/aos.css";
import "normalize.css";
import "./animate.css";
import "bootstrap/dist/css/bootstrap.css";
import "./img/icons/css/ionicons.css";
import "./img/font-awesome/css/font-awesome.css";
import "lightbox2/dist/css/lightbox.min.css";
import "./style.css";

//import js libraries
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./libs/easing.js";
import "lightbox2/dist/js/lightbox.min.js";

import * as serviceWorker from "./serviceWorker";

//import components
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import About from "./components/about.jsx";
import Portfolio from "./components/portfolio.jsx";
import Contact from "./components/contact.jsx";
import BackToTop from "./components/back-top.jsx";
import AOS from "aos";
import Experience from "./components/tailwind-components/experience";
import Education from "./components/tailwind-components/education";

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
      <BackToTop />
      {/* <Preloader /> */}
    </React.Fragment>
  );
}
setInterval(() => {
  document.querySelectorAll(".project-box,a,button").forEach((item) => {
    item.addEventListener("mouseover", () => {
      cursor.classList.add("hover");
    });
    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });
}, 1000);

serviceWorker.register();
