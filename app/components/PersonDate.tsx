"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// --- ThemeContext ---
const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
});

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('light');

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

// --- PermanentMarkerText Component ---
interface PermanentMarkerTextProps {
    children: React.ReactNode;
    className?: string;
}

const PermanentMarkerText: React.FC<PermanentMarkerTextProps> = ({ children, className }) => {
    return (
        <span
            className={className}
            style={{ fontFamily: '"Permanent Marker", cursive' }}
        >
            {children}
        </span>
    );
};

// --- PersonCard Component ---
function PersonDate() {
    const { theme } = useTheme();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div
            className={`relative ${isMobile ? 'w-[90%]' : 'w-[calc(450px+36px)]'} h-min rounded-[25px] overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-br from-[#453F61] to-[#211E2A]'
                } shadow-[0_10px_20px_rgba(0,0,0,0.25)] p-[18px] text-white/90 select-none`}
            aria-label="Contact Card for Maksymilian Kuzminski"
            style={!isMobile ? { margin: "0 -100vh -40vh 0" } : {}}
        >
            {/* Background blur effect - Modified to move right */}
            <div className="absolute top-[-25%] left-[55%] w-[calc(100%-60px)] h-full bg-[url('/3on4.jpg')] bg-no-repeat bg-[65%_75%] bg-[125%_125%] rounded-full transform -translate-x-1/2 blur-[30px] brightness-[.8] saturate-[1.5] z-0 pointer-events-none"></div>

            {/* Inner content */}
            <div className={`relative z-10 ${isMobile ? 'flex flex-col items-center gap-6' : 'grid grid-cols-[150px_1fr] gap-4 items-center'}`}>
                {/* Avatar */}
                <div
                    className="group w-[155px] aspect-square rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer transition-shadow duration-300 relative bg-[url('/avatar.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=alqzHfBqgLwQ7kNvwFrca7R&_nc_oc=AdkOn0SYnELKyL5B--HFX90fcIWmTvI4lqt6awiwCJ6OuxeGP9viLrO8zld8t6V7vvteVdsizkdoNFvHPb4P_TL1&_nc_zt=24&_nc_ht=scontent-dus1-1.xx&_nc_gid=BJHyUzv59IgLZh4iackhLw&oh=00_AfW7hxI12j4qzz--Lo8vW1LSNr8_JomZfnxCU5YAvu_B_A&oe=6896BEEA')] bg-no-repeat bg-[60%_center] bg-cover hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)] focus-visible:shadow-[0_8px_20px_rgba(0,0,0,0.6)] focus-visible:outline-none"
                    tabIndex={0}
                    role="img"
                    aria-label="Avatar Image"
                    style={{ marginLeft: '-10px' }}
                />





                {/* Info section */}
                <div className={`flex flex-col gap-[0.8rem] font-normal ${isMobile ? 'w-full text-center items-center' : 'text-[1.1rem]'}`} style={{ fontFamily: '"Permanent Marker", cursive' }}>
                    <div className="flex items-center gap-3">
                        {!isMobile && <UserIcon />}
                        <PermanentMarkerText className="font-bold text-[1.4rem] text-white">
                            Maxim Pryshchepa
                        </PermanentMarkerText>
                    </div>
                    <div className="flex items-center gap-3 italic text-[#a0c4ff]">
                        {!isMobile && <JobIcon />}
                        <PermanentMarkerText>Lagerist Lagermitarbeiter Logistiker</PermanentMarkerText>
                    </div>
                    <div className="flex items-center gap-3">
                        {!isMobile && <LocationIcon />}
                        <PermanentMarkerText>Dortmund, Germany</PermanentMarkerText>
                    </div>
                    <div className="flex items-center gap-3">
                        {!isMobile && <MailIcon />}
                        <PermanentMarkerText>
                            <a href="mailto:mmpryshchepa@gmail.com" className="text-[#a0c4ff] hover:underline">
                                mmpryshchepa@gmail.com
                            </a>
                        </PermanentMarkerText>
                    </div>
                    <div className="flex items-center gap-3">
                        {!isMobile && <PhoneIcon />}
                        <PermanentMarkerText>
                            <a href="tel:+4915234803926" className="text-[#a0c4ff] hover:underline">
                                +49 1523 480 39 26
                            </a>
                        </PermanentMarkerText>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Icons ---
const UserIcon = () => (
    <svg className="flex-shrink-0 w-[24px] h-[24px] stroke-[#1e90ff] stroke-[1.8] fill-none" viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6 6 0 0113 0" />
    </svg>
);

const JobIcon = () => (
    <svg className="flex-shrink-0 w-[24px] h-[24px] stroke-[#1e90ff] stroke-[1.8] fill-none" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 3h-8v4h8V3z" />
    </svg>
);

const LocationIcon = () => (
    <svg className="flex-shrink-0 w-[24px] h-[24px] stroke-[#1e90ff] stroke-[1.8] fill-none" viewBox="0 0 24 24">
        <path d="M12 21c-4-5-8-9-8-12a8 8 0 0116 0c0 3-4 7-8 12z" />
        <circle cx="12" cy="9" r="2" />
    </svg>
);

const MailIcon = () => (
    <svg className="flex-shrink-0 w-[24px] h-[24px] stroke-[#1e90ff] stroke-[1.8] fill-none" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="flex-shrink-0 w-[24px] h-[24px] stroke-[#1e90ff] stroke-[1.8] fill-none" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.38 2.39.75 3.5a2 2 0 01-.45 2.11L9.1 10.3a16 16 0 006 6l1.95-1.95a2 2 0 012.11-.45c1.11.37 2.29.62 3.5.75a2 2 0 011.72 2z" />
    </svg>
);

// --- Main App Component ---
export default function App() {
    return (
        <ThemeProvider>
            <div className="min-h-[60vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4" style={{ fontFamily: '"Permanent Marker", cursive' }}>
                <PersonDate />
            </div>
        </ThemeProvider>
    );
}