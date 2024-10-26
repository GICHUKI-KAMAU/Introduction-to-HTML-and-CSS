// ProductsWrapper.tsx
import React from 'react';
import './ProductsWrapper.css';

interface ProductsWrapperProps {
  children: React.ReactNode;
}

const ProductsWrapper: React.FC<ProductsWrapperProps> = ({ children }) => {
  return <div className="products-wrapper">{children}</div>;
};

export default ProductsWrapper;
