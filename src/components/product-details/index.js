import React from "react";
import Image from "next/image";
import StoreHeader from "@/components/store-header";
import { Wrapper, ImageWrapper, Title, Price, Description, BuyButton } from "./styled";

export default function ProductDetails({ product }) {
  const { _id, id, title, price, description, imageUrl } = product;
  const productId = id || _id;

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/cart/addItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Product added to cart!");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("An error occurred while adding to cart.");
    }
  };

  return (
    <>
      <StoreHeader />
      <Wrapper>
        <ImageWrapper>
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            style={{ objectFit: "cover" }}
          />
        </ImageWrapper>
        <Title>{title}</Title>
        <Price>${price.toFixed(2)}</Price>
        <Description>{description}</Description>
        <BuyButton onClick={handleAddToCart}>Buy</BuyButton>
      </Wrapper>
    </>
  );
}
