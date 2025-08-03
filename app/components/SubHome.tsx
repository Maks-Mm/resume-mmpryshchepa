// components/SubHome.tsx
'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapLocationDot, FaLanguage, FaLightbulb } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';
import { IoPhonePortrait } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';
import { FaWarehouse, FaBoxOpen, FaClipboardCheck } from "react-icons/fa";
import { GiForklift } from "react-icons/gi";
import { MdInventory, MdComputer } from "react-icons/md";
import Footer from './Footer';
import { useTheme } from './ThemeContext';
import PermanentMarkerText from './PermanentMarkerText';
import Carousel from './Carousel';
import PersonDate from './PersonDate';

const SubHome = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const iconStyles = {
    whatsapp: { color: '#25D366' },
    gmail: { color: '#D44638' },
    location: { color: '#0077B5' },
    phone: { color: '#1E90FF' },
    mouse: { color: '#6b7280' },
    language: { color: '#14B8A6' },
    skillSetting: { color: '#2563EB' },
    lightbulb: { color: '#FBBF24' },
    forklift: { color: '#8B4513' },
    inventory: { color: '#4B0082' },
  };

  const skills = [
    { skill: 'Lagerorganisation', percent: 95, icon: <FaBoxOpen style={iconStyles.inventory} className="inline mr-2" /> },
    { skill: 'Qualitätssicherung', percent: 90, icon: <FaClipboardCheck style={iconStyles.skillSetting} className="inline mr-2" /> },
    { skill: 'Staplerfahrzeug', percent: 85, icon: <GiForklift style={iconStyles.forklift} className="inline mr-2" /> },
    { skill: 'Warenkommissionierung', percent: 90, icon: <MdInventory style={iconStyles.inventory} className="inline mr-2" /> },
    { skill: 'Webentwicklung', percent: 75, icon: <MdComputer style={iconStyles.skillSetting} className="inline mr-2" /> },
  ];

  const languages = [
    { lang: 'Deutsch', percent: 100, flag: '🇩🇪' },
    { lang: 'Englisch', percent: 100, flag: '🇬🇧' },
  ];

  return (
    <div className={`bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-[60vh]`}>
      <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
        <div className="w3-row-padding">

          {/* LEFT COLUMN */}
          <div className="w3-third" data-aos="fade-up" data-aos-duration="3000">
            <div className={`w3-white w3-text-grey w3-card-4 ${theme === 'dark' ? 'dark:bg-gray-800 dark:text-white' : ''}`}>
              <div className="w3-container">
                <div className="w-full flex flex-col items-center gap-6">
                  <PersonDate />
                  <div className="w-full">
                    <b className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <AiFillSetting style={iconStyles.skillSetting} />
                      <PermanentMarkerText>Fähigkeiten</PermanentMarkerText>
                    </b>
                  </div>
                </div>

                {skills.map(({ skill, percent, icon }, i) => (
                  <div key={i}>
                    <p>
                      {icon}
                      <PermanentMarkerText>{skill}</PermanentMarkerText>
                    </p>
                    <div className="w3-light-grey w3-round-xlarge w3-small dark:bg-gray-700">
                      <div
                        className="w3-container w3-center w3-round-xlarge w3-teal"
                        style={{ width: `${percent}%` }}
                      >
                        {percent >= 80 && <span className="w3-text-white"><PermanentMarkerText>{percent}%</PermanentMarkerText></span>}
                      </div>
                    </div>
                  </div>
                ))}

                <p className="w3-large w3-text-theme flex items-center gap-2 mt-4 dark:text-teal-300">
                  <FaLanguage style={iconStyles.language} />
                  <PermanentMarkerText><b>Sprachen</b></PermanentMarkerText>
                </p>

                {languages.map(({ lang, percent, flag }, i) => (
                  <div key={i}>
                    <p className="flex items-center gap-2">
                      <span className="text-teal-600 text-lg dark:text-teal-300">•</span>
                      <PermanentMarkerText>{flag} {lang}</PermanentMarkerText>
                    </p>
                    <div className="w3-light-grey w3-round-xlarge dark:bg-gray-700">
                      <div
                        className="w3-round-xlarge w3-teal"
                        style={{ height: '24px', width: `${percent}%` }}
                      />
                    </div>
                  </div>
                ))}

                <p className="w3-large w3-text-theme flex items-center gap-2 mt-4 dark:text-yellow-300">
                  <FaLightbulb style={iconStyles.lightbulb} />
                  <PermanentMarkerText><b>Kompetenzen</b></PermanentMarkerText>
                </p>
                <ul className="dark:text-gray-200">
                  <li><PermanentMarkerText>Zuverlässigkeit und Pünktlichkeit</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Erfahrung mit modernen Lagersystemen</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Teamorientierte Arbeitsweise</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Gültiger Staplerschein</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Grundkenntnisse in Webentwicklung</PermanentMarkerText></li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="w3-twothird w3-margin-top"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="w3-display-container w3-margin-bottom" style={{ height: '300px', overflow: 'hidden' }}>
              <Carousel />
            </div>

            <div
              className={`w3-container w3-card w3-white w3-margin-bottom ${theme === 'dark' ? 'dark:bg-gray-800 dark:text-white' : ''}`}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className="w3-text-grey w3-padding-16 dark:text-gray-300">
                <PermanentMarkerText>Beruflicher Werdegang</PermanentMarkerText>
              </h2>

              <div className="w3-container">
                <h5 className="w3-opacity dark:text-gray-200">
                  <PermanentMarkerText><b>Lagermitarbeiter - Falkensee SE, Siemens Energy</b></PermanentMarkerText>
                </h5>
                <h6 className="w3-text-teal dark:text-teal-300"><PermanentMarkerText>bis 04.2025</PermanentMarkerText></h6>
                <ul className="dark:text-gray-300">
                  <li><PermanentMarkerText>Verantwortung für die Lagerorganisation und -verwaltung</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Unterstützung bei der Qualitätskontrolle und Dokumentation</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Mitarbeit bei Wareneingängen und -ausgängen</PermanentMarkerText></li>
                </ul>
                <hr className="dark:border-gray-700" />
                <div className="w3-display-container w3-margin-bottom" style={{ height: '250px', overflow: 'hidden' }}>
                  <Carousel />
                </div>
              </div>

              <div className="w3-container">
                <h5 className="w3-opacity dark:text-gray-200">
                  <PermanentMarkerText><b>Lagermitarbeiter - BSH Service Nauen GmbH</b></PermanentMarkerText>
                </h5>
                <h6 className="w3-text-teal dark:text-teal-300"><PermanentMarkerText>11/2022 – 11/2023</PermanentMarkerText></h6>
                <ul className="dark:text-gray-300">
                  <li><PermanentMarkerText>Kommissionierung und Verpackung von Waren</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Bedienung von Scansystemen zur Erfassung von Lagerbeständen</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Teamarbeit in einem respektvollen Arbeitsumfeld</PermanentMarkerText></li>
                </ul>
                <hr className="dark:border-gray-700" />
                <div className="w3-display-container w3-margin-bottom" style={{ height: '250px', overflow: 'hidden' }}>
                  <Carousel />
                </div>
              </div>

              <div className="w3-container">
                <h5 className="w3-opacity dark:text-gray-200">
                  <PermanentMarkerText><b>Lagermitarbeiter - Medizinpräparate Farmacol.SA</b></PermanentMarkerText>
                </h5>
                <h6 className="w3-text-teal dark:text-teal-300"><PermanentMarkerText>2019 – 2021</PermanentMarkerText></h6>
                <ul className="dark:text-gray-300">
                  <li><PermanentMarkerText>Verwaltung und Ausgabe von medizinischen Produkten</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Inventur und Bestandsaufnahme</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Einhaltung von Hygienevorschriften</PermanentMarkerText></li>
                </ul>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHome;
