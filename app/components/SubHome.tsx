import React from 'react';

const SubHome = () => {
  const skills = [
    { skill: 'Adobe Photoshop', percent: 90 },
    { skill: 'Photography', percent: 80 },
    { skill: 'Illustrator', percent: 75 },
    { skill: 'Media', percent: 50 }
  ];

  const languages = [
    { lang: 'English', percent: 100 },
    { lang: 'Spanish', percent: 55 },
    { lang: 'German', percent: 25 }
  ];

  return (
    <div className="w3-light-grey">
      <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
        <div className="w3-row-padding">

          {/* LEFT COLUMN */}
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img src="..." alt="Avatar" style={{ width: '100%' }} />
                <div className="w3-display-bottomleft w3-container w3-text-black">
                  <h2>Jane Doe</h2>
                </div>
              </div>
              <div className="w3-container">
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Designer</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />London, UK</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />ex@mail.com</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />1224435534</p>
                <hr />

                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Skills</b></p>
                {skills.map(({ skill, percent }, i) => (
                  <div key={i}>
                    <p>{skill}</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: `${percent}%` }}>
                        {percent >= 80 && <span className="w3-text-white">{percent}%</span>}
                      </div>
                    </div>
                  </div>
                ))}

                <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />Languages</b></p>
                {languages.map(({ lang, percent }, i) => (
                  <div key={i}>
                    <p>{lang}</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div className="w3-round-xlarge w3-teal" style={{ height: '24px', width: `${percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w3-twothird">
            {/* Work Experience */}
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Work Experience
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  Jan 2015 - <span className="w3-tag w3-teal w3-round">Current</span>
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <hr />
              </div>
            </div>

            {/* Education */}
            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Education
              </h2>
              {/* Example education block */}
              <div className="w3-container">
                <h5 className="w3-opacity"><b>University of Life</b></h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  Forever
                </h6>
                <p>Web Development and everything else</p>
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
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">w3.css</a></p>
      </footer>
    </div>
  );
};

export default SubHome;
