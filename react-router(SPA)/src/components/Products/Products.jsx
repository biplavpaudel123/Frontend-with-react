// src/pages/Products.jsx

import React from 'react';
import ProductCard from './ProductCard';

const products = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  description: 'A compact, powerful tool designed for developers.',
  image: 'https://placehold.co/300x200',
}));

const Products = () => {
  return (
    <main className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 text-center mb-10">
          Featured Products
        </h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
