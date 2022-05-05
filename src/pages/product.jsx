import React from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';

function Product() {
  const { productId } = useParams();

  return (
    <ProductCard id={productId} />
  );
}

export default Product;
