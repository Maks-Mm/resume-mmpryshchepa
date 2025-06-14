import React from "react";
import { FaTiktok, FaTwitter, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const styles = {
  fieldset: {
    border: "2px solid white",
    borderRadius: "0.375rem", // approx rounded-md
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "black",
    width: "95%",
    marginTop: "15px",
    marginLeft: "-3px",
  },
  footer: {
    marginTop: "1rem",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    alignItems: "center",
  },
  socialButton: {
    cursor: "pointer",
    display: "inline-block",
  },
};

const Footer = () => {
  const iconSize = 30;

  return (
    <fieldset style={styles.fieldset}>
      <footer style={styles.footer}>
        <div style={styles.iconContainer}>
          <a href="#" style={styles.socialButton} aria-label="TikTok">
            <FaTiktok color="#000000" size={iconSize} />
          </a>
          <a href="#" style={styles.socialButton} aria-label="Twitter">
            <FaTwitter color="#1DA1F2" size={iconSize} />
          </a>
          <a href="#" style={styles.socialButton} aria-label="YouTube">
            <FaYoutube color="#FF0000" size={iconSize} />
          </a>
          <a href="#" style={styles.socialButton} aria-label="Facebook">
            <FaFacebook color="#1877F2" size={iconSize} />
          </a>
          <a href="#" style={styles.socialButton} aria-label="Instagram">
            <FaInstagram color="#E1306C" size={iconSize} />
          </a>
        </div>
      </footer>
    </fieldset>
  );
};

export default Footer;
