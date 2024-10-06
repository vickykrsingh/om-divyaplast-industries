import React, { useState } from 'react';
import product1 from '../../public/product1.jpg'
import product2 from '../../public/product2.webp'
import product3 from '../../public/product3.jpeg'

const dummyProducts = [
  { id: 1, name: 'Plastic Bottle A', image: product1 },
  { id: 2, name: 'Plastic Bottle B', image: product2 },
  { id: 3, name: 'Plastic Bottle C', image: product3 },
  { id: 4, name: 'Plastic Bottle D', image: product1 },
  { id: 5, name: 'Plastic Bottle E', image: product2 },
  { id: 6, name: 'Plastic Bottle F', image: product3 },
  { id: 7, name: 'Plastic Bottle G', image: product1 },
  { id: 8, name: 'Plastic Bottle H', image: product2 },
];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Pagination logic
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = dummyProducts.slice(firstProductIndex, lastProductIndex);

  return (
    <section className="bg-background p-6">
      <h2 className="text-2xl text-textPrimary mb-6 font-bold">Our Products</h2>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg"
          >
            <img src={product.image} alt={product.name} className="h-32 w-full object-cover rounded-lg" />
            <h3 className="mt-2 text-lg font-semibold text-textPrimary">{product.name}</h3>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="mt-6 flex justify-between">
        <button 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
          className="bg-primary text-white py-2 px-4 rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={lastProductIndex >= dummyProducts.length}
          className="bg-primary text-white py-2 px-4 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Products;
