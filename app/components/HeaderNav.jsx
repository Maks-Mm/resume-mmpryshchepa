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
      // Close menu if resized to desktop
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Toggle dark class on body
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: darkMode ? "rgba(30, 30, 30, 0.9)" : "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "50px",
          padding: isMobile ? (menuOpen ? "15px" : "10px 15px") : "10px 20px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? (menuOpen ? "15px" : "0") : "20px",
          transition: "all 0.3s ease",
          zIndex: 1000,
          border: `1px solid ${darkMode ? "rgba(100, 100, 100, 0.2)" : "rgba(255, 255, 255, 0.1)"}`,
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
              padding: "8px 12px",
              width: "100%",
              justifyContent: "center",
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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
                  padding: isMobile ? "12px 0" : "10px 0",
                  cursor: "pointer",
                  color:
                    activeItem === item
                      ? "white"
                      : "rgba(255, 255, 255, 0.7)",
                  transition: "all 0.3s ease",
                  width: isMobile ? "100%" : "auto",
                  textAlign: isMobile ? "center" : "left",
                }}
                onClick={() => {
                  setActiveItem(item);
                  if (isMobile) setMenuOpen(false);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveItem(item);
                    if (isMobile) setMenuOpen(false);
                  }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "0 15px",
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
                      fontSize: isMobile ? "16px" : "16px",
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
                      left: isMobile ? "50%" : "15px",
                      transform: isMobile ? "translateX(-50%)" : "none",
                      width: isMobile ? "70%" : "calc(100% - 30px)",
                      height: "2px",
                      background: "white",
                      borderRadius: "2px",
                      animation: "underline 0.3s ease-out",
                    }}
                  />
                )}
              </div>
            ))}

            {/* Dark Mode Toggle */}
            <div 
              style={{ 
                margin: isMobile ? "10px 0 5px" : "0 0 0 10px",
                padding: isMobile ? "10px 0" : "0",
                width: isMobile ? "100%" : "auto",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <input
                type="checkbox"
                id="darkModeToggle"
                className="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                style={{ display: "none" }}
              />
              <label
                htmlFor="darkModeToggle"
                className="checkbox-label"
                style={{
                  backgroundColor: darkMode ? "#555" : "#111",
                  width: "50px",
                  height: "26px",
                  borderRadius: "50px",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 5px",
                }}
              >
                <i className="fas fa-moon" style={{ color: "#f1c40f", fontSize: "14px" }} />
                <i className="fas fa-sun" style={{ color: "#f39c12", fontSize: "14px" }} />
                <span
                  className="ball"
                  style={{
                    backgroundColor: "#fff",
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    left: darkMode ? "26px" : "2px",
                    top: "3px",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
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
          background-color: #121212;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          body {
            padding-top: ${menuOpen ? "180px" : "80px"};
            transition: padding-top 0.3s ease;
          }
        }

        /* Improve accessibility for keyboard navigation */
        [role="button"]:focus-visible {
          outline: 2px solid white;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
};

export default HeaderNav;