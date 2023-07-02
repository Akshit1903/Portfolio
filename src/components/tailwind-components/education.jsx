import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-5">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section id="education" className="about-mf sect-pt4 route">
      <div className="container box-shadow-full">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          <strong>Education</strong>
          <hr className="lead text-center" />
        </h2>

        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              type="Bachelor of Technology (B.Tech)"
              time="2020 - 2024"
              place="Netaji Subhas University of Technology"
              info=<span>
                Branch:- <strong>Information Technology</strong>(Network and
                Information Security) | <strong>CGPA:- 8.25</strong>
              </span>
            />

            <Details
              type="AISSCE: Class XII"
              time="2020"
              place="CBSE- Central Board of Secondary Education"
              info=<strong>Percentage:- 96%</strong>
            />
            <Details
              type="AISSE: Class X"
              time="2018"
              place="CBSE- Central Board of Secondary Education"
              info=<strong>Percentage:- 96.6%</strong>
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
