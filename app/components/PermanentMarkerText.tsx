// components/PermanentMarkerText.tsx
import React from 'react';

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

export default PermanentMarkerText;