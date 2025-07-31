"use client";
import React, { useState, useEffect } from "react";

// Helper function for icon IDs
function getIconId(item) {
  const icons = {
    Home: "1iF9PyJ2Thzo",
    Experience: "M1HUQOE9lLoG",
    Education: "79387",
    Contact: "6H65NWsqha0Z",
  };
  return icons[item];
}

const HeaderNav = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Toggle dark class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "50px",
          padding: isMobile ? "10px 15px" : "10px 20px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? (menuOpen ? "15px" : "0") : "20px",
          transition: "all 0.3s ease",
          zIndex: 1000,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
          width: isMobile ? (menuOpen ? "calc(100% - 40px)" : "auto") : "auto",
          maxWidth: "90%",
          alignItems: "center",
        }}
      >
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {menuOpen ? "✕" : "☰"}
            {!menuOpen && <span>Menu</span>}
          </button>
        )}

        {(menuOpen || !isMobile) && (
          <>
            {["Home", "Experience", "Education", "Contact"].map((item) => (
              <div
                key={item}
                style={{
                  position: "relative",
                  padding: isMobile ? "8px 0" : "10px 0",
                  cursor: "pointer",
                  color:
                    activeItem === item
                      ? "white"
                      : "rgba(255, 255, 255, 0.7)",
                  transition: "color 0.3s ease",
                  width: isMobile ? "100%" : "auto",
                  textAlign: isMobile ? "center" : "left",
                }}
                onClick={() => {
                  setActiveItem(item);
                  if (isMobile) setMenuOpen(false);
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "0 10px",
                    justifyContent: isMobile ? "center" : "flex-start",
                  }}
                >
                  <img
                    src={`https://img.icons8.com/?size=${
                      isMobile ? "20" : "24"
                    }&id=${getIconId(item)}&format=png&color=${
                      activeItem === item ? "FFFFFF" : "AAAAAA"
                    }`}
                    alt={item}
                    style={{
                      transition: "all 0.3s ease",
                      filter: activeItem === item ? "none" : "opacity(0.7)",
                      width: isMobile ? "20px" : "24px",
                      height: isMobile ? "20px" : "24px",
                    }}
                  />
                  <span
                    style={{
                      fontWeight: activeItem === item ? "600" : "400",
                      transition: "all 0.3s ease",
                      fontSize: isMobile ? "14px" : "16px",
                    }}
                  >
                    {item}
                  </span>
                </div>
                {activeItem === item && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: isMobile ? "50%" : "10px",
                      transform: isMobile ? "translateX(-50%)" : "none",
                      width: isMobile ? "80%" : "calc(100% - 20px)",
                      height: "2px",
                      background: "white",
                      borderRadius: "2px",
                      animation: "underline 0.3s ease-out",
                    }}
                  />
                )}
              </div>
            ))}

            {/* 🌗 Toggle Switch */}
            <div style={{ marginLeft: isMobile ? 0 : "10px" }}>
              <input
                type="checkbox"
                id="checkbox"
                className="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                style={{ display: "none" }}
              />
              <label
                htmlFor="checkbox"
                className="checkbox-label"
                style={{
                  backgroundColor: "#111",
                  width: "50px",
                  height: "26px",
                  borderRadius: "50px",
                  position: "relative",
                  padding: "5px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <i className="fas fa-moon" style={{ color: "#f1c40f" }} />
                <i className="fas fa-sun" style={{ color: "#f39c12" }} />
                <span
                  className="ball"
                  style={{
                    backgroundColor: "#fff",
                    width: "22px",
                    height: "22px",
                    position: "absolute",
                    left: darkMode ? "26px" : "2px",
                    top: "2px",
                    borderRadius: "50%",
                    transition: "transform 0.2s linear, left 0.2s",
                  }}
                />
              </label>
            </div>
          </>
        )}
      </nav>

      {/* Global style */}
      <style jsx global>{`
        body.dark {
          background-color: #292c35;
          color: white;
        }

        @media (max-width: 768px) {
          body {
            padding-top: ${menuOpen ? "200px" : "80px"};
            transition: padding-top 0.3s ease;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderNav;
