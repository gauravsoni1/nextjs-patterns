import React, { use } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../actions/fetchProducts";
import { Product } from "../types/product";

const ProductGrid: React.FC = () => {
  const products = use(fetchProducts());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
