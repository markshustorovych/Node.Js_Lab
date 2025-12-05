import React, { useEffect, useState } from "react";
import OrderPage from "@/components/order-page";

export default function Order() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await fetch("/api/cart/getcart");
        const data = await res.json();
        setCartItems(data.cart || []);
      } catch (error) {
        console.error("Failed to load cart:", error);
      }
    }
    fetchCart();
  }, []);

  return <OrderPage cartItems={cartItems} />;
}
