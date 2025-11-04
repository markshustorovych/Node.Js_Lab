import React from "react";
import StoreHeader from "@/components/store-header";
import {
  Container,
  Content,
  Title,
  CartItem,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemImageWrapper,
  Button,
  TotalAmount,
  RemoveButton,
} from "./styled";
import Image from "next/image";

export default function CartPage({ cartItems, setCartItems, userId, onCheckout }) {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await fetch("/api/cart/removeItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, userId }),
      });

      const data = await response.json();
      if (response.ok) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
        alert("Product removed from cart.");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Failed to remove from cart:", error);
      alert("An error occurred while removing from cart.");
    }
  };

  return (
    <Container>
      <StoreHeader />
      <Content>
        <Title>Your Cart</Title>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>
                    ${item.price} × {item.quantity}
                  </ItemPrice>
                  <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>Remove</RemoveButton>
                </ItemInfo>

                <ItemImageWrapper>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                </ItemImageWrapper>
              </CartItem>
            ))}

            <TotalAmount>Total: ${totalAmount.toFixed(2)}</TotalAmount>
            <Button onClick={onCheckout}>Proceed to Checkout</Button>
          </>
        )}
      </Content>
    </Container>
  );
}
