import React from "react";

const SubHome = () => {
  const skills = [
    { skill: "Computers", percent: 100 },
    { skill: "Communication Skills", percent: 100 },
    { skill: "Open-minded & Cognitive Thinking", percent: 90 },
  ];

  const languages = [
    { lang: "English", percent: 100 },
    { lang: "German", percent: 90 },
    { lang: "Russian", percent: 100 },
    { lang: "Ukrainian", percent: 100 },
    { lang: "Polish", percent: 80 },
  ];

  return (
    <div className="w3-light-grey">
      {/* Top Banner */}
      <div className="w3-display-container" style={{ height: "300px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner"
          style={{ width: "100%", objectFit: "cover", height: "100%" }}
        />
        <div className="w3-display-middle w3-center">
          <h1 className="w3-xxxlarge w3-text-white bungee-tint-regular">
            Welcome to My Portfolio
          </h1>
        </div>
      </div>

      <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        <div className="w3-row-padding">
          {/* LEFT COLUMN */}
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img
                  src="avatar.jpg"
                  alt="Avatar"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "16px auto",
                    display: "block",
                  }}
                />
                <div className="w3-display-bottomleft w3-container w3-text-black">
                  <h2>Maxim Pryshchepa</h2>
                </div>
              </div>
              <div className="w3-container">
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" /> Web Engineer</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" /> Dortmund, Deutschland</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" /> mmpryshchepa@gmail.com</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" /> 733 152 465</p>
                <hr />

                <p className="w3-large">
                  <b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" /> Skills</b>
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
                  <b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" /> Languages</b>
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
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Work Experience
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Driver Coordinator / Logistics Company</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  2023 - 2024
                </h6>
                <p>Coordinated drivers, managed routes and documentation, ensured timely delivery and communication.</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Call Center Consultant / Brand Services</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  2022 - 2023
                </h6>
                <p>Consulted clients via phone and email, provided information about products and services, handled inquiries.</p>
                <hr />
              </div>
            </div>

            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Education
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Design, Web Engineering & AI Studies</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  2021 - Present
                </h6>
                <p>Ongoing personal development in design, web engineering, and AI for 4 years.</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>College of Industry and Economy, Berdychiv</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  Graduated
                </h6>
                <p>Completed studies in industry and economy.</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
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
