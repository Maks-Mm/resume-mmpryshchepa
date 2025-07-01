'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp, FaMapLocationDot, FaComputerMouse, FaLanguage, FaLightbulb } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';
import { IoPhonePortrait } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';
import Footer from './Footer'; // Adjust path if needed
import { useTheme } from './ThemeContext'; // Your theme context hook

const SubHome = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const iconStyles = {
    whatsapp: { color: '#25D366' }, // WhatsApp green
    gmail: { color: '#D44638' }, // Gmail red
    location: { color: '#0077B5' }, // blue-ish for location
    phone: { color: '#1E90FF' }, // Dodger Blue for phone
    mouse: { color: '#6b7280' }, // Gray for neutral mouse icon
    language: { color: '#14B8A6' }, // Teal for language icon
    skillSetting: { color: '#2563EB' }, // Blue for skills/settings
    lightbulb: { color: '#FBBF24' }, // Amber for competence/lightbulb
  };

  const skills = [
    { skill: 'Adobe Photoshop', percent: 90 },
    { skill: 'Photography', percent: 80 },
    { skill: 'Illustrator', percent: 75 },
    { skill: 'Media', percent: 50 },
  ];

  const languages = [
    { lang: 'English', percent: 100, flag: '🇬🇧' },
    { lang: 'German', percent: 80, flag: '🇩🇪' },
    { lang: 'Russian', percent: 100, flag: '🇷🇺' },
    { lang: 'Ukrainian', percent: 100, flag: '🇺🇦' },
    { lang: 'Polish', percent: 85, flag: '🇵🇱' },
  ];

  return (
    <div className="w3-light-grey">
      <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
        <div className="w3-row-padding">

          {/* LEFT COLUMN */}
          <div className="w3-third" data-aos="fade-up" data-aos-duration="3000">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img
                  src="photo-profile-removebg-preview(1).png"
                  alt="Avatar"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block',
                    border: '1px solid black',
                  }}
                />
              </div>
              <div className="w3-container">
                <h2 className="w3-center">Maxim Pryshchepa</h2>
                <p className="flex items-center gap-4">  {/* Increased from gap-3 to gap-4 */}
                  <FaComputerMouse style={iconStyles.mouse} className="inline" />
                  Web Engineer
                </p>
                <p className="flex items-center gap-4">
                  <FaMapLocationDot style={iconStyles.location} className="inline" />
                  Dortmund, Germany
                </p>
                <p className="flex items-center gap-4">
                  <BiLogoGmail style={iconStyles.gmail} className="inline" />
                  mmpryshchepa@gmail.com
                </p>
                <p className="flex items-center gap-4">
                  <IoPhonePortrait style={iconStyles.phone} className="inline" />
                  +49 1523 480 39 26
                </p>
                <hr />

                {/* THEME TOGGLE BUTTON */}
                <div className="text-center mb-6">
                  <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded-md bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
                    aria-label="Toggle Theme"
                  >
                    Toggle Theme (Current: {theme})
                  </button>
                </div>

                <div className="w3-large">
                  <div className="w3-display-container w3-margin-bottom" style={{ height: '300px', overflow: 'hidden' }}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1681412504590-5c23f9a04e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Banner"
                      style={{ width: '100%', objectFit: 'cover', height: '100%' }}
                    />
                  </div>
                  <b className="flex items-center gap-2 text-blue-600">
                    <AiFillSetting style={iconStyles.skillSetting} />
                    Skills
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
                        {percent >= 80 && <span className="w3-text-white">{percent}%</span>}
                      </div>
                    </div>
                  </div>
                ))}

                <p className="w3-large w3-text-theme flex items-center gap-2 mt-4">
                  <FaLanguage style={iconStyles.language} />
                  <b>Languages</b>
                </p>

                {languages.map(({ lang, percent, flag }, i) => (
                  <div key={i}>
                    <p className="flex items-center gap-2">
                      <span className="text-teal-600 text-lg">•</span> {flag} {lang}
                    </p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div
                        className="w3-round-xlarge w3-teal"
                        style={{ height: '24px', width: `${percent}%` }}
                      />
                    </div>
                  </div>
                ))}

                <p className="w3-large w3-text-theme flex items-center gap-2 mt-4">
                  <FaLightbulb style={iconStyles.lightbulb} />
                  <b>Competences</b>
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
            <div className="w3-display-container w3-margin-bottom" style={{ height: '300px', overflow: 'hidden' }}>
              <hr />
              <img
                src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Banner"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </div>

            {/* RIGHT COLUMN CONTENT */}
            <div
              className="w3-container w3-card w3-white w3-margin-bottom"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className="w3-text-grey w3-padding-16">Work Experience</h2>

              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Driver Coordinator – Logistic Company</b>
                </h5>
                <h6 className="w3-text-teal">2016 – 2019</h6>
                <p>
                  Worked with drivers, scheduling, and communication in a
                  fast-paced logistics environment.
                </p>
                <hr />
                <div className="w3-display-container w3-margin-bottom" style={{ height: '300px', overflow: 'hidden' }}>
                  <img
                    src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU1fHxidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Banner"
                    style={{ width: '100%', objectFit: 'cover', height: '100%' }}
                  />
                </div>
              </div>

              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Call Center Consultant – Brand Services</b>
                </h5>
                <h6 className="w3-text-teal">2016 – 2019</h6>
                <p>
                  Handled client inquiries and represented major European corporate
                  clients such as Deutsche Telekom.
                </p>
                <hr />
              </div>

              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Construction Worker</b>
                </h5>
                <h6 className="w3-text-teal">2023 – Present</h6>
                <p>
                  Working as a construction worker with hands-on experience and
                  diligence.
                </p>
                <hr />
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
