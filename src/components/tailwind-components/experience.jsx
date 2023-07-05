import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
// import "./styles/globals.css";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-5">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const [showAllExperience, setShowAllExperience] = useState(false);
  return (
    <section id="experience" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="box-shadow-full">
          <div className="text-center">
            <h2 className="font-bold text-8xl mb-32 w-full  md:text-6xl xs:text-4xl md:mb-16">
              <strong>
                Experience
                <hr className="lead text-center" />
              </strong>
            </h2>
          </div>

          <div
            ref={ref}
            className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
          >
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light 
            md:w-[2px] md:left-[30px] xs:left-[20px]
            "
            />

            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
              <Details
                position="SDE Intern"
                company="Tally Solutions Pvt. Ltd."
                companyLink="https://tallysolutions.com/"
                time="May 2023 - August 2023"
                address="Bengaluru, Karnataka, India"
                work=<ul>
                  <li>
                    Development of a{" "}
                    <strong>payment gateway application</strong> using{" "}
                    <strong>React.js </strong>
                    to cater to the needs of{" "}
                    <strong>
                      partially and fully visually impaired users.
                    </strong>
                  </li>
                  <li>
                    Following <strong>software development lifecycle</strong> of
                    wireframing, prototyping and code reviewing.
                  </li>
                </ul>
              />
              <Details
                position="Flutter Developer"
                company="HearUs"
                companyLink="https://hearus.me/"
                time="Dec 2021 – March 2022"
                address=" New Delhi, India"
                work=<ul>
                  <li>
                    Development of a cross-platform app that gained over{" "}
                    <strong>1000+ downloads, 4.4 stars, and 96+ reviews</strong>
                    ; focused on{" "}
                    <strong>
                      providing mental health and psychological support
                    </strong>{" "}
                    to users.
                  </li>
                  <li>
                    Increased{" "}
                    <strong>
                      messaging efficiency by 53% ( 962ms to 447ms)
                    </strong>{" "}
                    by reducing the number of reads and writes concerning the
                    Firestore database by caching and limiting queries.
                  </li>
                  <li>
                    Optimised average frame render time by{" "}
                    <strong>18% ( 27ms to 22ms)</strong> by reusing stateful
                    widgets.
                  </li>
                  <li>
                    Integrated <strong>Agora API</strong> with the app to
                    implement calling functionality till 10,000 minutes/month
                    (free plan)
                  </li>
                  <li>
                    Collaborated with designers and other developers to create
                    custom <strong>user interfaces</strong> involving the design
                    tool Figma.
                  </li>
                  <li>
                    Redesigned <strong>authentication system</strong> and its
                    integration with Firebase services such as OAuth2, email,
                    phone(OTP) etc
                  </li>
                </ul>
              />
              {showAllExperience ? (
                <div>
                  <Details
                    position="Technical Lead"
                    company="MobiByte"
                    companyLink="https://www.linkedin.com/company/mobibyte/about/"
                    time="October 2021 – Jan 2022"
                    address="New Delhi, India"
                    work=<ul>
                      <li>
                        {" "}
                        This project enabled users to mine MOBY (registered on
                        blockchain) and compensate in SHIB(Shiba).
                      </li>
                      <li>
                        Achievements/Tasks- Implementation of UI Business logic
                        using Flutter and Firebase.
                      </li>
                    </ul>
                  />
                  <Details
                    position="Flutter Developer"
                    company="FeetWings Pvt Ltd"
                    companyLink="https://www.linkedin.com/company/feetwings-pvt-ltd/about/"
                    time="June 2021 – July 2021"
                    address="New Delhi, India"
                    work=<ul>
                      <li>
                        Built around smart wearables to provide a solution to
                        diabetes and related complications at an affordable
                        rate.
                      </li>
                      <li>
                        Achievements/Tasks-Implementation of OTP system (One
                        Time Password), user verification through browser. OTP
                        authentication logic.
                      </li>
                    </ul>
                  />
                </div>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setShowAllExperience(true)}
                >
                  Load More
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
