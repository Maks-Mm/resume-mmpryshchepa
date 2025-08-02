import React, { useState, useEffect } from 'react';

const images = [
  "https://plus.unsplash.com/premium_photo-1682141615620-e6e458d9ef05?q=80&w=1170",
  "https://plus.unsplash.com/premium_photo-1682141604952-ce5bf3d092bd?w=600",
  "https://plus.unsplash.com/premium_photo-1661963093143-dee9f394b0a8?w=600",
  "https://plus.unsplash.com/premium_photo-1664302558283-93b4752f5e90?q=80&w=1170"
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};


export default Carousel;
