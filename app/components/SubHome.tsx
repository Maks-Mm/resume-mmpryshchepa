"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { FaComputerMouse } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
//import './SubHome.module.css'
import Footer from "./Footer"; // Adjust the import path as necessary

const SubHome = () => {
  useEffect(() => {
    AOS.init({ once: true }); // initialize AOS, animations run once on scroll
  }, []);

  const skills = [
    { skill: "Adobe Photoshop", percent: 90 },
    { skill: "Photography", percent: 80 },
    { skill: "Illustrator", percent: 75 },
    { skill: "Media", percent: 50 },
  ];

  const languages = [
    { lang: "English", percent: 100 },
    { lang: "German", percent: 80 },
    { lang: "Russian", percent: 100 },
    { lang: "Ukrainian", percent: 100 },
    { lang: "Polish", percent: 85 },
  ];

  return (
    <div className="w3-light-grey">
      <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        <div className="w3-row-padding">
          {/* LEFT COLUMN */}
          <div
            className="w3-third"
            data-aos="fade-up"
            data-aos-duration="3000"
            >
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img
                  src="photo-profile-removebg-preview(2).png"
                  alt="Avatar"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                    border: "1px solid black",
                  }}
                  />
              </div>
              <div className="w3-container">
                <h2 className="w3-center">Maxim Pryshchepa</h2>
                <p>
                  <FaComputerMouse /> Web Engineer
                </p>
                <p>
                  <FaMapLocationDot /> Dortmund, Germany
                </p>
                <p>
                  <BiLogoGmail /> mmpryshchepa@gmail.com
                </p>
                <p>
                  <IoPhonePortrait /> +49 1523 480 39 26
                </p>
                <hr />

                {/* Changed from <p> to <div> to fix invalid nesting */}
                <div className="w3-large">
                  <div
                    className="w3-display-container w3-margin-bottom"
                    style={{ height: "300px", overflow: "hidden" }}
                  >
                    <img
                      src="https://plus.unsplash.com/premium_photo-1681412504590-5c23f9a04e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Banner"
                      style={{ width: "100%", objectFit: "cover", height: "100%" }}
                    />
                  </div>
                  <b>
                    <AiFillSetting /> Skills
                  </b>
                </div>

                {skills.map(({ skill, percent }, i) => (
                  <div key={i}>
                    <p>{skill}</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div
                        className="w3-container w3-center w3-round-xlarge w3-teal"
                        style={{ width: `${percent}%` }}
                      >
                        {percent >= 80 && (
                          <span className="w3-text-white">{percent}%</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <p className="w3-large w3-text-theme">
                  <b>
                    <FaLanguage /> Languages
                  </b>
                </p>

                {languages.map(({ lang, percent }, i) => (
                  <div key={i}>
                    <p className="flex items-center gap-2">
                      <span className="text-teal-600 text-lg">•</span> {lang}
                    </p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div
                        className="w3-round-xlarge w3-teal"
                        style={{ height: "24px", width: `${percent}%` }}
                      />
                    </div>
                  </div>
                ))}

                <p className="w3-large w3-text-theme">
                  <b>
                    <FaLightbulb /> Competences
                  </b>
                </p>
                <ul>
                  <li>Computer skills – very good</li>
                  <li>Communication – very good</li>
                  <li>Open and cognitive character</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BANNER IMAGE BETWEEN LEFT AND RIGHT */}
          <div
            className="w3-twothird w3-margin-top"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div
              className="w3-display-container w3-margin-bottom"
              style={{ height: "300px", overflow: "hidden" }}
            > <hr />
              <img
                src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Banner"
                style={{ width: "100%", objectFit: "cover", height: "100%" }}
              />
            </div>

            {/* RIGHT COLUMN CONTENT */}
            <div
              className="w3-container w3-card w3-white w3-margin-bottom"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className="w3-text-grey w3-padding-16">
                Work Experience
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Driver Coordinator – Logistic Company</b>
                </h5>
                <h6 className="w3-text-teal">2023 – 2024</h6>
                <p>
                  Worked with drivers, scheduling, and communication in a fast-paced
                  logistics environment.
                </p>
                <hr />
                <div
                  className="w3-display-container w3-margin-bottom"
                  style={{ height: "300px", overflow: "hidden" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU1fHxidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Banner"
                    style={{ width: "100%", objectFit: "cover", height: "100%" }}
                  />
                </div>
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Call Center Consultant – Brand Services</b>
                </h5>
                <h6 className="w3-text-teal">2022 – 2023</h6>
                <p>
                  Answered client inquiries and represented brand partners in customer
                  support roles.
                </p>
                <hr />
              </div>
              <div
                className="w3-display-container w3-margin-bottom"
                style={{ height: "300px", overflow: "hidden" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Banner"
                  style={{ width: "100%", objectFit: "cover", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubHome;
