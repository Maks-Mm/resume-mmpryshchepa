'use client';

import { useState, useEffect } from 'react';

export default function PersonCard() {
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
      className={`relative w-full max-w-xs min-h-[500px] rounded-2xl overflow-hidden p-6 flex flex-col items-center gap-5 shadow-lg border select-none transition-transform duration-300 font-['Permanent Marker'] ${
        dark
          ? 'bg-gray-800 text-gray-100 border-gray-600'
          : 'bg-white text-gray-900 border-gray-200'
      }`}
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-blue-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-blue-300"></div>

      {/* Theme toggle */}
      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white dark:bg-gray-700 border flex justify-center items-center shadow-md hover:rotate-12 transition-all duration-300"
        onClick={toggleTheme}
      >
        <i className={`fas ${dark ? 'fa-moon text-blue-300' : 'fa-sun text-yellow-400'}`}></i>
      </button>

      {/* Avatar */}
      <div className="relative z-10 w-[140px] h-[140px] rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-blue-300 to-blue-500 flex justify-center items-center">
        <div
          className="w-[130px] h-[130px] rounded-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-1/294977727_1243258363145235_510610384567564219_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=6hcm8JNt-1UQ7kNvwEuThjs&_nc_oc=AdkCUkFgneaXYQGFUiAVMg329hpm8V7tYevQPzeYBqZBf6MejYvE27ghjjOe--iHkoo&_nc_zt=24&_nc_ht=scontent-waw2-1.xx&_nc_gid=lOMHbtl5AH56Z6EF7Xxpdg&oh=00_AfpskG7K9lYnOVtlZ6MrCCfIiIOOhNjF_2ATurkc-0nxoA&oe=696F656A')",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 text-center">
        {/* Name */}
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl">Maxim Pryshchepa</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full mt-1"></div>
        </div>

        {/* Title */}
        <div className="flex items-center gap-3 mt-2">
          <div className="w-7 h-7 bg-gradient-to-br from-blue-300 to-blue-500 rounded flex justify-center items-center text-white text-sm">
            <i className="fas fa-briefcase"></i>
          </div>
          <span className="italic text-gray-600">Logistiker</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 mt-1">
          <i className="fas fa-map-marker-alt text-blue-300"></i>
          <span className="text-gray-900 dark:text-gray-200">Berlin, Deutschland</span>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3 mt-3 w-full">
          <div className="flex items-center justify-center gap-3">
            <i className="fas fa-envelope text-blue-300 w-6 text-center"></i>
            <a
              href="mailto:mmpryshchepa@gmail.com"
              className="text-gray-900 dark:text-gray-200 hover:text-blue-400 transition"
            >
              mmpryshchepa@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <i className="fas fa-phone-alt text-blue-300 w-6 text-center"></i>
            <a
              href="tel:+491637232249"
              className="text-gray-900 dark:text-gray-200 hover:text-blue-400 transition"
            >
              +49 163 72 32 249
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
