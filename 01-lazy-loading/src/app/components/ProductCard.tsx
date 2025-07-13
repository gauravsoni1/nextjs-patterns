import React from 'react';
import Image from 'next/image';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image style={{width: 'auto'}} src={product?.image} alt={product?.title} width={100} height={100} />
      <h3 className="text-lg font-semibold mt-2">{product?.title}</h3>
      <p className="text-gray-600 mt-1">{product?.description}</p>
      <p className="text-xl font-bold mt-2">${product?.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;