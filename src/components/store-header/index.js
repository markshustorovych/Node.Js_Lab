import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HeaderContainer,
  Logo,
  Title,
  LoginButton,
  RegisterButton,
  RightSection,
  LeftSection,
  CartButton,
} from "./styled";

export default function StoreHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      try {
        const res = await fetch("/api/me");
        if (res.ok) {
          const data = await res.json();
          if (isMounted) setIsLoggedIn(!!data.user);
        } else {
          if (isMounted) setIsLoggedIn(false);
        }
      } catch (err) {
        console.error("Error checking session:", err);
        if (isMounted) setIsLoggedIn(false);
      }
    };

    checkSession();

    const handleRouteChange = () => {
      checkSession();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      isMounted = false;
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const handleLogout = async () => {
    try {
      await fetch("/api/users/logout");
      setIsLoggedIn(false);
      router.push("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <Logo
          src="https://i.pinimg.com/736x/b9/68/ee/b968ee908ef150e3c4b2f82ccaed351f.jpg"
          alt="Logo"
        />
        <Link href="/" passHref>
          <Title>retrodream</Title>
        </Link>
      </LeftSection>

      <RightSection>
        {isLoggedIn ? (
          <LoginButton onClick={handleLogout}>Logout</LoginButton>
        ) : (
          <>
            <Link href="/login" passHref>
              <LoginButton>Login</LoginButton>
            </Link>
            <Link href="/register" passHref>
              <RegisterButton>Register</RegisterButton>
            </Link>
          </>
        )}
        <Link href="/cart" passHref>
          <CartButton>Cart</CartButton>
        </Link>
      </RightSection>
    </HeaderContainer>
  );
}
