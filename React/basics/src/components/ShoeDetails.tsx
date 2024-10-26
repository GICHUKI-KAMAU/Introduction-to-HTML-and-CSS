
import React from 'react';
import './ShoeDetails.css';

interface ShoeDetailsProps {
  description: string;
  price: number;
  sizes: number[];
  colors: string[]; 
}

const ShoeDetails: React.FC<ShoeDetailsProps> = ({ description, price, sizes, colors }) => {
  return (
    <div className="shoe-details">
      <div className="description-section">
        <h4>Product Description</h4>
        <p className="shoe-description">{description}</p>
      </div>

      <div className="color-options">
        <h4>Colour</h4>
        <div className="colors">
          {colors.map((color, index) => (
            <span key={index} className="color-circle" style={{ backgroundColor: color }}></span>
          ))}
        </div>
      </div>

      <div className="shoe-sizes">
        <h4>Size</h4>
        {sizes.map((size) => (
          <span key={size} className="shoe-size">{size}</span>
        ))}
      </div>

      <div className="buy-section">
        <button className="buy-button">Buy</button>
        <span className="shoe-price">€{price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ShoeDetails;