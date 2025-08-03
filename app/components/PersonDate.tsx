"use client"

import React, { createContext, useContext, useState } from 'react';

// --- ThemeContext ---
const ThemeContext = createContext({
  theme: 'light', // Default theme
  toggleTheme: () => {}, // No-op function for default
});

// Define the props interface for ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode; // Explicitly type children as React.ReactNode
}

// Explicitly define ThemeProvider as a functional component with its props
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default to 'light' to match original card's gradient

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// --- PersonCard Component ---
function PersonCard() {
  const { theme } = useTheme(); // Using the theme from context

  return (
    <div
      // Card container styling: width, border-radius, overflow, background gradient, shadow, padding, text color
      className={`relative w-[calc(450px+36px)] h-min rounded-[25px] overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-br from-[#453F61] to-[#211E2A]'
      } shadow-[0_10px_20px_rgba(0,0,0,0.25)] p-[18px] text-white/90 select-none`}
      aria-label="Contact Card for Maksymilian Kuzminski"
    >
      {/* Background blur effect (simulating ::before pseudo-element) */}
      <div
        className="absolute top-[-25%] left-1/2 w-[calc(100%-60px)] h-full bg-[url('https://cdn-icons-png.flaticon.com/512/3135/3135715.png')] bg-no-repeat bg-[75%_75%] bg-[125%_125%] rounded-full transform -translate-x-1/2 blur-[30px] brightness-[.8] saturate-[1.5] z-0 pointer-events-none"
      ></div>

      {/* Inner card content: grid layout for avatar and info */}
      <div className="relative grid grid-cols-[150px_1fr] gap-4 items-center z-10">
        {/* Avatar section */}
        <div
          // Avatar styling: size, shape, shadow, cursor, transitions, background image
          className="group w-[150px] aspect-square rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer transition-shadow duration-300 relative bg-[url('https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/294977727_1243258363145235_510610384567564219_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=I-WOEE7xTAUQ7kNvwHlJOuA&_nc_oc=AdnyCq-fYpd--IpSwnG3GvFch6EqTL1j3bty-vblx-A1jnBGH6EA_h2ibyTqhc6wtXxNRkIhdaoJBhlx4PUquLhw&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=3q80QYmjt4VzeylAyyPmsA&oh=00_AfTS7VjCNct1vT3YQClUnEIFneHXZt0-gWexRdcR18gk7w&oe=689566F0')] bg-no-repeat bg-center bg-cover hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)] focus-visible:shadow-[0_8px_20px_rgba(0,0,0,0.6)] focus-visible:outline-none"
          tabIndex={0}
          role="img"
          aria-label="Alien Avatar Image"
        >
         
        </div>

        {/* Info list section */}
        <div className="flex flex-col gap-[0.8rem] text-[#e0e0e0] font-normal text-[1.1rem]">
          {/* Name item */}
          <div className="flex items-center gap-3">
            <svg
              className="flex-shrink-0 w-[24px] h-[24px] stroke-[#1e90ff] stroke-[1.8] fill-none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              stroke="currentColor"
              fill="none"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21a6 6 0 0113 0" />
            </svg>
            <span className="font-bold text-[1.4rem] text-white">Maksymilian Kuzminski</span>
          </div>

          {/* Jobs item */}
          <div className="flex items-center gap-3 italic text-[#a0c4ff]" aria-label="Job Titles">
            <svg
              className="flex-shrink-0 w-[24px] h-[24px] stroke-[#1e90ff] stroke-[1.8] fill-none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              stroke="currentColor"
              fill="none"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 3h-8v4h8V3z" />
            </svg>
            <span>Lagerist Lagermitarbeiter Logistiker</span>
          </div>

          {/* Location item */}
          <div className="flex items-center gap-3">
            <svg
              className="flex-shrink-0 w-[24px] h-[24px] stroke-[#1e90ff] stroke-[1.8] fill-none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              stroke="currentColor"
              fill="none"
            >
              <path d="M12 21c-4-5-8-9-8-12a8 8 0 0116 0c0 3-4 7-8 12z" />
              <circle cx="12" cy="9" r="2" />
            </svg>
            <span>Dortmund, Germany</span>
          </div>

          {/* Email item */}
          <div className="flex items-center gap-3">
            <svg
              className="flex-shrink-0 w-[24px] h-[24px] stroke-[#1e90ff] stroke-[1.8] fill-none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              stroke="currentColor"
              fill="none"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
            </svg>
            <a href="mailto:mmpryshchepa@gmail.com" className="text-[#a0c4ff] hover:underline">
              mmpryshchepa@gmail.com
            </a>
          </div>

          {/* Phone item */}
          <div className="flex items-center gap-3">
            <svg
              className="flex-shrink-0 w-[24px] h-[24px] stroke-[#1e90ff] stroke-[1.8] fill-none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              stroke="currentColor"
              fill="none"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.38 2.39.75 3.5a2 2 0 01-.45 2.11L9.1 10.3a16 16 0 006 6l1.95-1.95a2 2 0 012.11-.45c1.11.37 2.29.62 3.5.75a2 2 0 011.72 2z" />
            </svg>
            <a href="tel:+4915234803926" className="text-[#a0c4ff] hover:underline">
              +49 1523 480 39 26
            </a>
          </div>
        </div>
      </div>

    
    </div>
  );
}

// --- Main App Component (to render PersonCard with ThemeProvider) ---
export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 font-sans">
        <PersonCard />
      </div>
    </ThemeProvider>
  );
}
