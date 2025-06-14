// HeaderNav.jsx
import React from "react";

const HeaderNav = () => {
  return (
    <nav
      style={{
        top: 0,
        left: 0,
        right: 0,
        height: "60px", // or whatever height you want
        backgroundColor: "#333",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999, // on top of other elements
        padding: " 20px ",
        boxSizing: "border-box",
        marginBottom: "100px",
        
      }}
    >
      {/* Navbar content */}
      Fixed HeaderNav
    </nav>
  );
};

export default HeaderNav;
