"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";

    //  sorting based on price
    const sortedProducts = [...products].sort((a, b) => {
      if (newOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setProducts(sortedProducts);
    setSortOrder(newOrder);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4 text-center">
      <div className="text-center">Products</div>
      <button class="bg-green-900 hover:bg-green-700 text-white m-4 font-bold py-2 px-4 rounded" onClick={handleSort}>
      {sortOrder === "asc" ? "Sort by Price (Low to High)" : "Sort by Price (High to Low)"}
</button>
      <div className="p-4  grid grid-cols-3 overflow-y-auto border-gray-500 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
          <div className="px-6 py-4">
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {product.rating.rate}
            </span>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Products;
