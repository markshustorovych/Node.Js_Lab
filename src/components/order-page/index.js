import React, { useState } from "react";
import { useRouter } from 'next/router';
import StoreHeader from "@/components/store-header";
import {
  Container,
  Content,
  Title,
  Input,
  Label,
  Section,
  Button,
} from "./styled";

export default function OrderPage({ cartItems, userId }) {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
  e.preventDefault();

  const items = cartItems.map(item => ({
    productId: item.id,
    quantity: item.quantity,
  }));

  try {
    const response = await fetch('/api/orders/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        items,
        totalPrice,
        fullName,
        address,
        city,
        postalCode,
        cardNumber,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      await fetch('/api/cart/clear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      alert('Order placed successfully!');
      router.push('/');
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error('Order submission error:', error);
    alert('An error occurred while placing the order.');
  }
};


  return (
    <Container>
      <StoreHeader />
      <Content>
        <Title>Checkout</Title>

        <form onSubmit={handleSubmit}>
          <Section>
            <Label>Full Name</Label>
            <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </Section>

          <Section>
            <Label>Address</Label>
            <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </Section>

          <Section>
            <Label>City</Label>
            <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          </Section>

          <Section>
            <Label>Postal Code</Label>
            <Input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
          </Section>

          <Section>
            <Label>Card Number</Label>
            <Input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
          </Section>

          <Button type="submit">Place Order (${totalPrice.toFixed(2)})</Button>
        </form>
      </Content>
    </Container>
  );
}
