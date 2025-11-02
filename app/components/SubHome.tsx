// components/SubHome.tsx
'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Icon imports
import {
  FaMapLocationDot,
  FaLanguage,
  FaLightbulb,
  FaWarehouse,
  FaBoxOpen,
  FaClipboardCheck,
} from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';
import { IoPhonePortrait } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';
import { GiForklift } from 'react-icons/gi';
import { MdInventory, MdComputer } from 'react-icons/md';

// Custom components
import Footer from './Footer';
import { useTheme } from './ThemeContext';
import PermanentMarkerText from './PermanentMarkerText';
import Carousel from './Carousel';
import PersonDate from './PersonDate';

const SubHome = () => {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const iconStyles = {
    gmail: { color: '#D44638' },
    location: { color: '#0077B5' },
    phone: { color: '#1E90FF' },
    language: { color: '#14B8A6' },
    setting: { color: '#2563EB' },
    lightbulb: { color: '#FBBF24' },
    forklift: { color: '#8B4513' },
    inventory: { color: '#4B0082' },
    computer: { color: '#0ea5e9' },
    clipboard: { color: '#22c55e' },
    box: { color: '#9333ea' },
  };

  const skills = [
    {
      skill: 'Warehouse Organization',
      percent: 95,
      icon: <FaBoxOpen style={iconStyles.box} className="inline mr-2" />,
    },
    {
      skill: 'Quality Assurance',
      percent: 90,
      icon: <FaClipboardCheck style={iconStyles.clipboard} className="inline mr-2" />,
    },
    {
      skill: 'Forklift Operation',
      percent: 85,
      icon: <GiForklift style={iconStyles.forklift} className="inline mr-2" />,
    },
    {
      skill: 'Order Picking',
      percent: 90,
      icon: <MdInventory style={iconStyles.inventory} className="inline mr-2" />,
    },
    {
      skill: 'Web Development',
      percent: 75,
      icon: <MdComputer style={iconStyles.computer} className="inline mr-2" />,
    },
  ];

  const languages = [
    { lang: 'German', percent: 100, flag: '🇩🇪' },
    { lang: 'English', percent: 100, flag: '🇬🇧' },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-[60vh]">
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
                      <AiFillSetting style={iconStyles.setting} />
                      <PermanentMarkerText>Skills</PermanentMarkerText>
                    </b>
                  </div>
                </div>

                {skills.map(({ skill, percent, icon }, i) => (
                  <div key={i} className="mb-3">
                    <p>
                      {icon}
                      <PermanentMarkerText>{skill}</PermanentMarkerText>
                    </p>
                    <div className="w3-light-grey w3-round-xlarge w3-small dark:bg-gray-700">
                      <div
                        className="w3-container w3-center w3-round-xlarge w3-teal"
                        style={{ width: `${percent}%` }}
                      >
                        {percent >= 80 && (
                          <span className="w3-text-white">
                            <PermanentMarkerText>{percent}%</PermanentMarkerText>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <p className="w3-large w3-text-theme flex items-center gap-2 mt-4 dark:text-teal-300">
                  <FaLanguage style={iconStyles.language} />
                  <PermanentMarkerText><b>Languages</b></PermanentMarkerText>
                </p>

                {languages.map(({ lang, percent, flag }, i) => (
                  <div key={i} className="mb-3">
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
                  <PermanentMarkerText><b>Competencies</b></PermanentMarkerText>
                </p>
                <ul className="list-disc pl-5 dark:text-gray-200">
                  <li><PermanentMarkerText>Reliability and punctuality</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Experience with modern warehouse systems</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Team-oriented working style</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Valid forklift license</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Basic knowledge of web development</PermanentMarkerText></li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w3-twothird w3-margin-top" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <div className="w3-display-container w3-margin-bottom" style={{ height: '300px', overflow: 'hidden' }}>
              <Carousel />
            </div>

            <div className={`w3-container w3-card w3-white w3-margin-bottom ${theme === 'dark' ? 'dark:bg-gray-800 dark:text-white' : ''}`} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <h2 className="w3-text-grey w3-padding-16 dark:text-gray-300">
                <PermanentMarkerText>Professional Experience</PermanentMarkerText>
              </h2>

              {/* Siemens */}
              <div className="w3-container">
                <h5 className="w3-opacity dark:text-gray-200">
                  <PermanentMarkerText><b>Warehouse Worker - Falkensee SE, Siemens Energy</b></PermanentMarkerText>
                </h5>
                <h6 className="w3-text-teal dark:text-teal-300"><PermanentMarkerText>until 04.2025</PermanentMarkerText></h6>
                <ul className="dark:text-gray-300">
                  <li><PermanentMarkerText>Responsible for warehouse organization and management</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Assisting with quality control and documentation</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Participation in goods receipt and dispatch</PermanentMarkerText></li>
                </ul>
                <hr className="dark:border-gray-700" />
              </div>

              <div className="w3-display-container w3-margin-bottom" style={{ height: '250px', overflow: 'hidden' }}>
                <Carousel />
              </div>

              {/* BSH */}
              <div className="w3-container">
                <h5 className="w3-opacity dark:text-gray-200">
                  <PermanentMarkerText><b>Warehouse Worker - BSH Service Nauen GmbH</b></PermanentMarkerText>
                </h5>
                <h6 className="w3-text-teal dark:text-teal-300"><PermanentMarkerText>11/2022 – 11/2023</PermanentMarkerText></h6>
                <ul className="dark:text-gray-300">
                  <li><PermanentMarkerText>Picking and packing of goods</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Operation of scanning systems for inventory management</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Teamwork in a respectful work environment</PermanentMarkerText></li>
                </ul>
                <hr className="dark:border-gray-700" />
              </div>

              <div className="w3-display-container w3-margin-bottom" style={{ height: '250px', overflow: 'hidden' }}>
                <Carousel />
              </div>

              {/* Farmacol */}
              <div className="w3-container">
                <h5 className="w3-opacity dark:text-gray-200">
                  <PermanentMarkerText><b>Warehouse Worker - Pharmaceutical Products, Farmacol.SA</b></PermanentMarkerText>
                </h5>
                <h6 className="w3-text-teal dark:text-teal-300"><PermanentMarkerText>2019 – 2021</PermanentMarkerText></h6>
                <ul className="dark:text-gray-300">
                  <li><PermanentMarkerText>Management and distribution of medical products</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Inventory and stocktaking</PermanentMarkerText></li>
                  <li><PermanentMarkerText>Compliance with hygiene regulations</PermanentMarkerText></li>
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
