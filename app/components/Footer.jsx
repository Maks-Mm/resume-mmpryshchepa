import React from "react";
import { FaGoogle, FaTwitter, FaYoutube, FaFacebook, FaInstagram, FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const iconSize = 30;
  
  const quickLinks = [
    "Home", "Projects", "Experience", "Education", "Skills", "Contact"
  ];
  
  const contactInfo = [
    { icon: <FaEnvelope />, text: "mmpryshchepa@gmail.com" },
   
    { icon: <FaGithub />, text: "https://github.com/Maks-Mm" },
    { icon: <FaLinkedin />, text: "linkedin.com/in/yourusername" }
  ];

  const technologies = [
    "React", "Node.js", "TypeScript", "Python", "AWS", "Docker"
  ];

  return (
    <div className="footer-container">
      {/* Background Blur Effects */}
      <div className="footer-blur-circle circle-1"></div>
      <div className="footer-blur-circle circle-2"></div>
      
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top-section">
          <div>
            <h1 className="footer-big-text">LET'S CONNECT</h1>
            <p className="footer-description">
              I'm always open to discussing new opportunities, 
              interesting projects, or creative collaborations.
            </p>
          </div>
          
          <div className="footer-grid">
            {/* Quick Links */}
            <div className="footer-links-group">
              <span className="group-title">Quick Links</span>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="footer-links-group">
              <span className="group-title">Contact Info</span>
              <ul>
                {contactInfo.map((info, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#667eea' }}>{info.icon}</span>
                    {info.text}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Technologies */}
            <div className="footer-links-group">
              <span className="group-title">Technologies</span>
              <ul>
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section with Fieldset */}
        <div className="social-section">
          <fieldset className="custom-fieldset">
            <legend style={{ color: '#fff', padding: '0 10px' }}>Connect With Me</legend>
            <footer>
              <div className="social-icon-container">
                <a href="#" className="social-button" aria-label="Google">
                  <FaGoogle color="#DB4437" size={iconSize} />
                </a>
                <a href="#" className="social-button" aria-label="Twitter">
                  <FaTwitter color="#1DA1F2" size={iconSize} />
                </a>
                <a href="#" className="social-button" aria-label="YouTube">
                  <FaYoutube color="#FF0000" size={iconSize} />
                </a>
                <a href="#" className="social-button" aria-label="Facebook">
                  <FaFacebook color="#1877F2" size={iconSize} />
                </a>
                <a href="#" className="social-button" aria-label="Instagram">
                  <FaInstagram color="#E1306C" size={iconSize} />
                </a>
              </div>
            </footer>
          </fieldset>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms of Service</a>
            <span className="separator">|</span>
            <a href="#">Cookie Policy</a>
          </div>
          <div>
            Made with <FaHeart className="heart" /> using React
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;