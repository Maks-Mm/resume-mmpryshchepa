// components/SubHome.tsx
'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp, FaMapLocationDot, FaComputerMouse, FaLanguage, FaLightbulb } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';
import { IoPhonePortrait } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';
import { FaWarehouse, FaBoxOpen, FaClipboardCheck } from "react-icons/fa";
import { GiForklift, GiDeliveryDrone } from "react-icons/gi";
import { MdInventory, MdComputer } from "react-icons/md";
import Footer from './Footer';
import { useTheme } from './ThemeContext';
import PermanentMarkerText from './PermanentMarkerText';
import Carousel from './Carousel';

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
    <div className={`bg-gray-100 dark:bg-gray-900 text-black dark:text-white`}>
      <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
        <div className="w3-row-padding">

          {/* LEFT COLUMN */}
          <div className="w3-third" data-aos="fade-up" data-aos-duration="3000">
            <div className={`w3-white w3-text-grey w3-card-4 ${theme === 'dark' ? 'dark:bg-gray-800 dark:text-white' : ''}`}>
              <div className="w3-display-container" style={{ paddingTop: '40px' }}>
                <img
                  src="Foto3x4.jpg"
                  alt="Avatar"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'inline-block',
                    border: '1px solid black',
                    marginBottom: '20px'
                  }}
                />
              </div>
              <div className="w3-container">
                <h2 className="w3-center">
                  <PermanentMarkerText>Maksymilian Kuzminski</PermanentMarkerText>
                </h2>
                <p className="flex items-center gap-4">
                  <FaWarehouse style={iconStyles.mouse} className="inline" />
                  <PermanentMarkerText>Lagerist Lagermitarbeiter Logistiker</PermanentMarkerText>
                </p>
                <p className="flex items-center gap-4">
                  <FaMapLocationDot style={iconStyles.location} className="inline" />
                  <PermanentMarkerText>Dortmund, Germany</PermanentMarkerText>
                </p>
                <p className="flex items-center gap-4">
                  <BiLogoGmail style={iconStyles.gmail} className="inline" />
                  <PermanentMarkerText>mmpryshchepa@gmail.com</PermanentMarkerText>
                </p>
                <p className="flex items-center gap-4">
                  <IoPhonePortrait style={iconStyles.phone} className="inline" />
                  <PermanentMarkerText>+49 1523 480 39 26</PermanentMarkerText>
                </p>
                <hr />

                <div className="text-center mb-6">

                  {/* Uncomment the button below to toggle theme */}
                  {/*  <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded-md bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
                    aria-label="Toggle Theme"
                  >
                    <PermanentMarkerText>Toggle Theme (Current: {theme})</PermanentMarkerText>
                  </button> */}
                </div>

                <div className="w3-large">
                  <div className="w3-display-container w3-margin-bottom" style={{ height: '300px', overflow: 'hidden' }}>
                    <img
                      src="https://media.istockphoto.com/id/1400361180/de/vektor/gesch%C3%A4ftsleute-springen-die-den-sieg-feiern.webp?s=2048x2048&w=is&k=20&c=WWQX4wj3C1doMeKpYW2pYJQVUg5-HnmqppPV0WCFU-Y="
                      alt="Modern Warehouse"
                      style={{ width: '100%', objectFit: 'cover', height: '100%', objectPosition: 'center 40%' }}
                    />
                  </div>
                  <b className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <AiFillSetting style={iconStyles.skillSetting} />
                    <PermanentMarkerText>Fähigkeiten</PermanentMarkerText>
                  </b>
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
                  <img
                    src="https://media.istockphoto.com/id/1400361273/de/vektor/kontrollk%C3%A4stchen-f%C3%BCr-lagerarbeiter-distributions-und-delivery-storage-konzept.webp?s=2048x2048&w=is&k=20&c=Lpq79t2wG7fNWHRG_0IiEUR3A3BPVYVVhk51UP2iqVo="
                    alt="Warehouse Management"
                    style={{ width: '100%', objectFit: 'cover', height: '100%', objectPosition: 'center 30%' }}
                  />
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
                  <img
                    src="https://media.istockphoto.com/id/1400361275/de/vektor/gabelstapler-mit-mann-fahren.webp?s=2048x2048&w=is&k=20&c=DTgaotUmCUZDaGYLzPT32zeU2PH-Uesw4PVMst90So8="
                    alt="Inventory Scanning"
                    style={{ width: '100%', objectFit: 'cover', height: '100%', objectPosition: 'center 40%' }}
                  />
                </div>
              </div>

              <div className="w3-container">
                <h5 className="w3-opacity dark:text-gray-200">
                  <PermanentMarkerText><b>Lagermitarbeiter - Medizinpräparate Farmacol.SA</b></PermanentMarkerText>
                </h5>
                <h6 className="w3-text-teal dark:text-teal-300"><PermanentMarkerText>2019 – 2021</PermanentMarkerText></h6>
                <ul className="dark:text-gray-300">
                  <li><PermanentMarkerText>Lagerverwaltung und Qualitätskontrolle</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Unterstützung bei der Optimierung von Arbeitsabläufen</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Verantwortung für Warenbestände</PermanentMarkerText></li>
                </ul>
                <hr className="dark:border-gray-700" />
              </div>

              <h2 className="w3-text-grey w3-padding-16 dark:text-gray-300">
                <PermanentMarkerText>Ausbildung</PermanentMarkerText>
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity dark:text-gray-200">
                  <PermanentMarkerText><b>Webentwicklung (in Ausbildung)</b></PermanentMarkerText>
                </h5>
                <h6 className="w3-text-teal dark:text-teal-300"><PermanentMarkerText>2022 – heute</PermanentMarkerText></h6>
                <p className="dark:text-gray-300"><PermanentMarkerText>Parallele Ausbildung während der Berufstätigkeit</PermanentMarkerText></p>
                <div className="w3-display-container w3-margin-bottom" style={{ height: '250px', overflow: 'hidden', marginTop: '20px' }}>
                  <img
                    src="https://media.istockphoto.com/id/1414609317/de/vektor/lieferkonzept-m%C3%A4nnlicher-kurier-liefert-ein-paket-und-stellt-eine-rechnung-aus-trendiger.webp?s=2048x2048&w=is&k=20&c=uMPN5nk6zGuYn8vQSnaK2IIj-UpnvYhgBMJ23FpEpC8="
                    alt="Web Development"
                    style={{ width: '100%', objectFit: 'cover', height: '100%', objectPosition: 'center 30%' }}
                  />
                </div>
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity dark:text-gray-200">
                  <PermanentMarkerText><b>Berdytschiwer Fachkolleg für Industrie, Wirtschaft und Recht</b></PermanentMarkerText>
                </h5>
                <h6 className="w3-text-teal dark:text-teal-300"><PermanentMarkerText>2012 – 2015</PermanentMarkerText></h6>
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