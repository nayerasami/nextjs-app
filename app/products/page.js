import Link from "next/link";
import React from "react";

const Products = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  const MAX_DESCRIPTION_LENGTH = 70;

  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-semibold text-transparent bg-gradient-to-r from-blue-900 to-gray-500 bg-clip-text">
        Our Products
      </h1>
      <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((p) => (
          <div
            key={p.id}
            className="border  border-gray-400  rounded-lg max-w-60 overflow-hidden shadow-md"
          >
            <div className="p-4">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-32 object-cover"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {p.title}
              </h2>
              <p className="text-gray-600 mb-2">${p.price}</p>
              <p className="text-gray-600">
                {p.description.length > MAX_DESCRIPTION_LENGTH
                  ? p.description.slice(0, MAX_DESCRIPTION_LENGTH) + "..."
                  : p.description}
              </p>
              <Link
                href={`/products/${p.id}`}
                className=" left-10 mt-4 inline-block bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
