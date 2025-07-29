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
    <div className="w3-light-grey">
      <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
        <div className="w3-row-padding">

          {/* LEFT COLUMN */}
          <div className="w3-third" data-aos="fade-up" data-aos-duration="3000">
            <div className="w3-white w3-text-grey w3-card-4">
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
                <h2 className="w3-center">Maksym Pryshchepa</h2>
                <p className="flex items-center gap-4">
                  <FaWarehouse style={iconStyles.mouse} className="inline" />
                  Lagerist Lagermitarbeiter  Logistiker
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
                      src="https://media.istockphoto.com/id/1400361180/de/vektor/gesch%C3%A4ftsleute-springen-die-den-sieg-feiern.webp?s=2048x2048&w=is&k=20&c=WWQX4wj3C1doMeKpYW2pYJQVUg5-HnmqppPV0WCFU-Y="
                      alt="Modern Warehouse"
                      style={{ width: '100%', objectFit: 'cover', height: '100%', objectPosition: 'center 40%' }}

                    />
                  </div>
                  <b className="flex items-center gap-2 text-blue-600">
                    <AiFillSetting style={iconStyles.skillSetting} />
                    Fähigkeiten
                  </b>
                </div>

                {skills.map(({ skill, percent, icon }, i) => (
                  <div key={i}>
                    <p>{icon}{skill}</p>
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
                  <b>Sprachen</b>
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
                  <b>Kompetenzen</b>
                </p>
                <ul>
                  <li>Zuverlässigkeit und Pünktlichkeit</li>
                  <li>Erfahrung mit modernen Lagersystemen</li>
                  <li>Teamorientierte Arbeitsweise</li>
                  <li>Gültiger Staplerschein</li>
                  <li>Grundkenntnisse in Webentwicklung</li>
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
              <img
                src="https://media.istockphoto.com/id/1400353576/de/vektor/lagerarbeitergesch%C3%A4ft-mit-boxen-im-regal.webp?s=2048x2048&w=is&k=20&c=gZJK_OXTL6zsWIzttsoyWiP1tmsn2Be5WqjSMsh2EEI="
                alt="Warehouse Organization"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  height: '100%',
                  objectPosition: 'center 30%'  // This moves the focal point 70% down the image
                }}
              />
            </div>

            <div
              className="w3-container w3-card w3-white w3-margin-bottom"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className="w3-text-grey w3-padding-16">Beruflicher Werdegang</h2>

              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Lagermitarbeiter - Falkensee SE, Siemens Energy</b>
                </h5>
                <h6 className="w3-text-teal">bis 04.2025</h6>
                <ul>
                  <li>Verantwortung für die Lagerorganisation und -verwaltung</li>
                  <li>Unterstützung bei der Qualitätskontrolle und Dokumentation</li>
                  <li>Mitarbeit bei Wareneingängen und -ausgängen</li>
                </ul>
                <hr />
                <div className="w3-display-container w3-margin-bottom" style={{ height: '250px', overflow: 'hidden' }}>
                  <img
                    src="https://media.istockphoto.com/id/1400361273/de/vektor/kontrollk%C3%A4stchen-f%C3%BCr-lagerarbeiter-distributions-und-delivery-storage-konzept.webp?s=2048x2048&w=is&k=20&c=Lpq79t2wG7fNWHRG_0IiEUR3A3BPVYVVhk51UP2iqVo="
                    alt="Warehouse Management"
                    style={{ width: '100%', objectFit: 'cover', height: '100%',objectPosition: 'center 30%'  }}
                  />
                </div>
              </div>

              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Lagermitarbeiter - BSH Service Nauen GmbH</b>
                </h5>
                <h6 className="w3-text-teal">11/2022 – 11/2023</h6>
                <ul>
                  <li>Kommissionierung und Verpackung von Waren</li>
                  <li>Bedienung von Scansystemen zur Erfassung von Lagerbeständen</li>
                  <li>Teamarbeit in einem respektvollen Arbeitsumfeld</li>
                </ul>
                <hr />
                <div className="w3-display-container w3-margin-bottom" style={{ height: '250px', overflow: 'hidden' }}>
                  <img
                    src="https://media.istockphoto.com/id/1400361275/de/vektor/gabelstapler-mit-mann-fahren.webp?s=2048x2048&w=is&k=20&c=DTgaotUmCUZDaGYLzPT32zeU2PH-Uesw4PVMst90So8="
                    alt="Inventory Scanning"
                    style={{ width: '100%', objectFit: 'cover', height: '100%',objectPosition: 'center 40%'  }}
                  />
                </div>
              </div>

              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Lagermitarbeiter - Medizinpräparate Farmacol.SA</b>
                </h5>
                <h6 className="w3-text-teal">2019 – 2021</h6>
                <ul>
                  <li>Lagerverwaltung und Qualitätskontrolle</li>
                  <li>Unterstützung bei der Optimierung von Arbeitsabläufen</li>
                  <li>Verantwortung für Warenbestände</li>
                </ul>
                <hr />
              </div>

              <h2 className="w3-text-grey w3-padding-16">Ausbildung</h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Webentwicklung (in Ausbildung)</b>
                </h5>
                <h6 className="w3-text-teal">2022 – heute</h6>
                <p>Parallele Ausbildung während der Berufstätigkeit</p>
                <div className="w3-display-container w3-margin-bottom" style={{ height: '250px', overflow: 'hidden', marginTop: '20px' }}>
                  <img
                    src="https://media.istockphoto.com/id/1414609317/de/vektor/lieferkonzept-m%C3%A4nnlicher-kurier-liefert-ein-paket-und-stellt-eine-rechnung-aus-trendiger.webp?s=2048x2048&w=is&k=20&c=uMPN5nk6zGuYn8vQSnaK2IIj-UpnvYhgBMJ23FpEpC8="
                    alt="Web Development"
                    style={{ width: '100%', objectFit: 'cover', height: '100%',objectPosition: 'center 30%'  }}
                  />
                </div>
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Berdytschiwer Fachkolleg für Industrie, Wirtschaft und Recht</b>
                </h5>
                <h6 className="w3-text-teal">2012 – 2015</h6>
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