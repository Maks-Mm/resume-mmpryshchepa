import React, { useState, useEffect } from 'react';

export const images: string[] = [
  "https://www.delfs-personal.de/fileadmin/delfs/testbilder/test-header/header-logistik.jpg",
  "https://ware2go.co/wp-content/uploads/2021/07/image-1200x800-1.jpeg",
  "sdm1.jpg",
];

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleImageLoad = (imgIndex: number): void => {
    setLoaded(prev => ({ ...prev, [imgIndex]: true }));
  };

  const currentImage = images[index];

  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative bg-gray-200">
      {/* Preload all images */}
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt=""
          className="hidden"
          onLoad={() => handleImageLoad(i)}
        />
      ))}
      
      {/* Main carousel image */}
      <img
        src={currentImage}
        alt="Logistics related image"
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        } ${loaded[index] ? 'scale-100' : 'scale-105'} transition-transform duration-700`}
        onLoad={() => handleImageLoad(index)}
      />
      
      {/* Loading skeleton */}
      {!loaded[index] && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
          <div className="animate-pulse text-gray-500">Loading...</div>
        </div>
      )}

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
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
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              i === index 
                ? 'bg-white scale-110' 
                : 'bg-white/70 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Optional: Navigation arrows */}
      <button
        onClick={() => {
          setFade(false);
          setTimeout(() => {
            setIndex((prev) => (prev - 1 + images.length) % images.length);
            setFade(true);
          }, 500);
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        onClick={() => {
          setFade(false);
          setTimeout(() => {
            setIndex((prev) => (prev + 1) % images.length);
            setFade(true);
          }, 500);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
        aria-label="Next image"
      >
        ›
      </button>

      {/* Optional: Image counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

export default Carousel;