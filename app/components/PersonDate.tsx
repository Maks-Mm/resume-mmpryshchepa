// app/components/PersonDate.tsx
'use client';

import { useState, useEffect } from 'react';

const PersonCard = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) setDark(true);
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    localStorage.setItem('theme', dark ? 'light' : 'dark');
  };

  return (
    <div
      className={`font-ponomar relative w-full min-h-[500px] rounded-2xl overflow-hidden p-8 flex flex-col items-center gap-6 select-none transition-all duration-300 font-['Permanent Marker'] ${
        dark
          ? 'bg-gray-800/70 text-gray-100 border-gray-700/50'
          : 'bg-white/10 text-gray-900 border-white/20'
      } backdrop-blur-xl border shadow-2xl`}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Gray Glassmorphism Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-gray-500/10 to-gray-600/10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      
      {/* Glass Reflective Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>

      {/* Theme toggle - Glass button */}
      <button
        className="absolute top-6 right-6 w-12 h-12 rounded-full backdrop-blur-md bg-white/10 dark:bg-gray-800/30 border border-white/20 dark:border-gray-600/50 flex justify-center items-center shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-2xl z-10"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <i className={`fas ${dark ? 'fa-moon text-gray-300' : 'fa-sun text-gray-600'} text-xl`}></i>
      </button>

      {/* Avatar with Gray Glass Border */}
      <div className="relative z-10 w-[160px] h-[160px] rounded-full border-4 border-white/30 shadow-2xl bg-gradient-to-br from-gray-400/30 to-gray-600/30 backdrop-blur-sm flex justify-center items-center mt-4">
        <div
          className="w-[148px] h-[148px] rounded-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-1/294977727_1243258363145235_510610384567564219_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=6hcm8JNt-1UQ7kNvwEuThjs&_nc_oc=AdkCUkFgneaXYQGFUiAVMg329hpm8V7tYevQPzeYBqZBf6MejYvE27ghjjOe--iHkoo&_nc_zt=24&_nc_ht=scontent-waw2-1.xx&_nc_gid=lOMHbtl5AH56Z6EF7Xxpdg&oh=00_AfpskG7K9lYnOVtlZ6MrCCfIiIOOhNjF_2ATurkc-0nxoA&oe=696F656A')",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center w-full px-4">
        {/* Name with Glass Effect */}
        <div className="flex flex-col items-center backdrop-blur-sm bg-white/5 dark:bg-black/10 rounded-2xl p-6 w-full">
          <h1 className="font-bold text-3xl font-ponomar mb-2 text-white">Maxim Pryshchepa</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-full mt-1"></div>
        </div>

        {/* Title Gray Glass Card */}
        <div className="flex items-center gap-3 backdrop-blur-sm bg-white/10 dark:bg-gray-800/20 rounded-xl p-4 w-full justify-center">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex justify-center items-center text-white text-lg shadow-lg">
            <i className="fas fa-briefcase"></i>
          </div>
          <span className="italic text-lg text-white">Logistiker</span>
        </div>

        {/* Location Gray Glass Card */}
        <div className="flex items-center gap-3 backdrop-blur-sm bg-white/10 dark:bg-gray-800/20 rounded-xl p-4 w-full justify-center">
          <i className="fas fa-map-marker-alt text-gray-400 text-xl"></i>
          <span className="text-lg text-white">Berlin, Deutschland</span>
        </div>

        {/* Contact Gray Glass Cards */}
        <div className="flex flex-col gap-4 w-full">
          <div className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center gap-3">
              <i className="fas fa-envelope text-gray-400 text-xl w-8 text-center"></i>
              <a
                href="mailto:mmpryshchepa@gmail.com"
                className="text-lg text-white hover:text-gray-300 transition"
              >
                mmpryshchepa@gmail.com
              </a>
            </div>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center gap-3">
              <i className="fas fa-phone-alt text-gray-400 text-xl w-8 text-center"></i>
              <a
                href="tel:+491637232249"
                className="text-lg text-white hover:text-gray-300 transition"
              >
                +49 163 72 32 249
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;