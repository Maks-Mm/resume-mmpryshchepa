//app/components/PersonDate.tsx

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import "./resume.css";

// --- ThemeContext ---
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// --- PermanentMarkerText ---
interface PermanentMarkerTextProps {
  children: React.ReactNode;
  className?: string;
}

const PermanentMarkerText: React.FC<PermanentMarkerTextProps> = ({
  children,
  className,
}) => (
  <span className={className} style={{ fontFamily: '"Permanent Marker", cursive' }}>
    {children}
  </span>
);

// --- Person Card ---
function PersonDate() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      className={`person-card relative w-full rounded-[18px] overflow-hidden p-5 text-white select-none
      ${
        theme === "dark"
          ? "bg-[#020617]"
          : "bg-gradient-to-br from-[#1e293b] to-[#020617]"
      }`}
      aria-label="Kontaktkarte für Maxim Pryshchepa"
    >
      {/* Blur background */}
      <div className="person-bg absolute inset-0 bg-[url('/3on4.jpg')] bg-cover opacity-30 blur-2xl pointer-events-none" />

      {/* Content */}
      <div
        className={`relative z-10 ${
          isMobile
            ? "flex flex-col items-center gap-6"
            : "grid grid-cols-[150px_1fr] gap-5 items-center"
        }`}
      >
        {/* Avatar */}
        <div
          className="w-[150px] aspect-square rounded-full shadow-lg bg-[url('/avatar.jpg')] bg-cover bg-center"
          aria-label="Profilbild"
        />

        {/* Info */}
        <div
          className={`flex flex-col gap-3 ${
            isMobile ? "items-center text-center" : ""
          }`}
          style={{ fontFamily: '"Permanent Marker", cursive' }}
        >
          <PermanentMarkerText className="text-2xl font-bold">
            Maxim Pryshchepa
          </PermanentMarkerText>

          <PermanentMarkerText className="text-[#a0c4ff] italic">
            Lagerarbeiter / Logistiker
          </PermanentMarkerText>

          <PermanentMarkerText>Berlin, Deutschland</PermanentMarkerText>

          <PermanentMarkerText>
            <a
              href="mailto:mmpryshchepa@gmail.com"
              className="text-[#a0c4ff] hover:underline"
            >
              mmpryshchepa@gmail.com
            </a>
          </PermanentMarkerText>

          <PermanentMarkerText>
            <a href="tel:+491637232249" className="text-[#a0c4ff] hover:underline">
              +49 163 72 32 249
            </a>
          </PermanentMarkerText>
        </div>
      </div>
    </div>
  );
}

// --- App Wrapper ---
export default function App() {
  return (
    <ThemeProvider>
      <PersonDate />
    </ThemeProvider>
  );
}
