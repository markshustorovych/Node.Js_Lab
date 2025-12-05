import React from 'react';
import { useRouter } from 'next/router';
import {
  Card,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton
} from './styled';

export default function ProductCard({ id, title, price, imageUrl }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/product/${id}`);
  };

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch('/api/cart/addItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: id, quantity: 1 })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Product added to cart!');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Failed to add to cart:', error);
      alert('An error occurred while adding to cart.');
    }
  };

  return (
    <Card onClick={handleCardClick}>
      <ProductImage src={imageUrl} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>${price.toFixed(2)}</ProductPrice>
      <AddButton onClick={handleAddToCart}>Add to Cart</AddButton>
    </Card>
  );
}
