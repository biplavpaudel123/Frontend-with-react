// src/components/Product/ProductCard.jsx

import React from 'react';

const ProductCard = ({ name, description, image }) => {
  return (
    <div className="bg-gray-50 rounded-md shadow hover:shadow-md transition overflow-hidden text-center text-sm">
      <img
        src={image}
        alt={name}
        className="w-full h-36 object-cover"
      />
      <div className="p-4">
        <h3 className="text-indigo-800 font-semibold text-base mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <button className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded text-xs">
          View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
