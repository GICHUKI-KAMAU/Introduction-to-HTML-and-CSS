// ShoeType.tsx
import React from 'react';
import './ShoeType.css';

interface ShoeTypeProps {
  imageUrl: string;
  shoeName: string;
}

const ShoeType: React.FC<ShoeTypeProps> = ({ imageUrl, shoeName }) => {
  return (
    <div className="shoe-type">
      <img src={imageUrl} alt={shoeName} className="shoe-image" />
      <h2 className="shoe-name">{shoeName}</h2>
    </div>
  );
};

export default ShoeType;
