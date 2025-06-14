import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { FaComputerMouse } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";

const SubHome = () => {
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
          <div className="w3-third">
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
                    border: "1px solid black", // <-- updated from #fff to black
                  }}
                />

              </div>
              <div className="w3-container">
                <h2 className="w3-center">Maxim Pryshchepa</h2>
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" /><FaComputerMouse/> Web Engineer</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" /><FaMapLocationDot/> Dortmund, Germany</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" /><BiLogoGmail/> mmpryshchepa@gmail.com</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" /><IoPhonePortrait/> +49 1523 480 39 26</p>
                <hr />

                <p className="w3-large">
                  <div className="w3-display-container w3-margin-bottom" style={{ height: "300px", overflow: "hidden" }}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1681412504590-5c23f9a04e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Banner"
                      style={{ width: "100%", objectFit: "cover", height: "100%" }}
                    />

                  </div>
                  <b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" /><AiFillSetting/> Skills</b>
                </p>
                {skills.map(({ skill, percent }, i) => (
                  <div key={i}>
                    <p>{skill}</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div
                        className="w3-container w3-center w3-round-xlarge w3-teal"
                        style={{ width: `${percent}%` }}
                      >
                        {percent >= 80 && <span className="w3-text-white">{percent}%</span>}
                      </div>
                    </div>
                  </div>
                ))}

                <p className="w3-large w3-text-theme">
                  <b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" /><FaLanguage/> Languages</b>
                </p>
                {languages.map(({ lang, percent }, i) => (
                  <div key={i}>
                    <p>{lang}</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div
                        className="w3-round-xlarge w3-teal"
                        style={{ height: "24px", width: `${percent}%` }}
                      />
                    </div>
                  </div>
                ))}

                <p className="w3-large w3-text-theme">
                  <b><i className="fa fa-user fa-fw w3-margin-right w3-text-teal" /><FcIdea/> Competences</b>
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
          <div className="w3-twothird w3-margin-top">
            <div className="w3-display-container w3-margin-bottom" style={{ height: "300px", overflow: "hidden" }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1661409176914-ea1ef6892a7b?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Banner"
                style={{ width: "100%", objectFit: "cover", height: "100%" }}
              />

            </div>

            {/* RIGHT COLUMN CONTENT */}
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Work Experience
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Driver Coordinator – Logistic Company</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  2023 – 2024
                </h6>
                <p>Worked with drivers, scheduling, and communication in a fast-paced logistics environment.</p>
                <hr />
                <div className="w3-display-container w3-margin-bottom" style={{ height: "300px", overflow: "hidden" }}>
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
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  2022 – 2023
                </h6>
                <p>Answered client inquiries and represented brand partners in customer support roles.</p>
                <hr />
              </div>
              <div className="w3-display-container w3-margin-bottom" style={{ height: "300px", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Banner"
                  style={{ width: "100%", objectFit: "cover", height: "100%" }}
                />

              </div>
            </div>

            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Education
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>College of Industry and Economy – Berdychiv</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  Graduated
                </h6>
                <p>Studied Design, Artificial Intelligence, and Web Engineering over the past 4 years.</p>
                <hr />
              </div>
            </div>
            <div className="w3-display-container w3-margin-bottom" style={{ height: "300px", overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Banner"
                style={{ width: "100%", objectFit: "cover", height: "100%" }}
              />

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <BiLogoGmail/>
        <FaWhatsapp/>
        <i className="fa fa-facebook-official w3-hover-opacity" />
        <i className="fa fa-instagram w3-hover-opacity" />
        <i className="fa fa-snapchat w3-hover-opacity" />
        <i className="fa fa-pinterest-p w3-hover-opacity" />
        <i className="fa fa-twitter w3-hover-opacity" />
        <i className="fa fa-linkedin w3-hover-opacity" />
        <p>
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            w3.css
          </a>
        </p>
      </footer>
    </div>
  );
};

export default SubHome;
