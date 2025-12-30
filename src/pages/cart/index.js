import React, { useEffect, useState } from "react";
import CartPage from "@/components/cart-page";
import { useRouter } from "next/router";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

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

  return (
    <CartPage cartItems={cartItems} setCartItems={setCartItems} onCheckout={() => router.push("/order")} />
  );
}
