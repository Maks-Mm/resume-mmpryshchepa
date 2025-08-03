import React, { useState, useEffect } from 'react';

export const images = [
  "https://www.delfs-personal.de/fileadmin/delfs/testbilder/test-header/header-logistik.jpg",
  "https://devik.com.ua/storage/page/image/1c0fdf75cb986d5c6ec9dc54c46ce0be5ly0HAK4QSL2cKEY.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4635bcd4-4a1d-4e83-bbe4-9edf40e125d0/dcx1ucy-d18918cc-8b5a-4e74-a0cd-426b87b3fbe5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2MzViY2Q0LTRhMWQtNGU4My1iYmU0LTllZGY0MGUxMjVkMFwvZGN4MXVjeS1kMTg5MThjYy04YjVhLTRlNzQtYTBjZC00MjZiODdiM2ZiZTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VfhcdZx0QVwKHkqGZlDysSrU98aBmkjChg_gLS4BddU"
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // This matches the transition duration
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentImage = images[index];

  return (
    <div className="w-full h-[300px] overflow-hidden relative">
      <img
        src={currentImage}
        alt="Logistics related image"
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setIndex(i);
                setFade(true);
              }, 500);
            }}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;