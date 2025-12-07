import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  HeaderContainer,
  LeftSection,
  LogoWrapper,
  Title,
  RightSection,
  LoginButton,
  RegisterButton,
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
      } catch {
        if (isMounted) setIsLoggedIn(false);
      }
    };

    checkSession();
    const handleRouteChange = () => checkSession();

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
      console.error(error);
    }
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <LogoWrapper>
          <Image
            src="https://i.pinimg.com/736x/b9/68/ee/b968ee908ef150e3c4b2f82ccaed351f.jpg"
            alt="Logo"
            width={60}
            height={60}
            style={{ objectFit: "cover" }}
          />
        </LogoWrapper>
        <Link href="/" passHref legacyBehavior>
          <Title>retrodream</Title>
        </Link>
      </LeftSection>

      <RightSection>
        {isLoggedIn ? (
          <LoginButton onClick={handleLogout}>Logout</LoginButton>
        ) : (
          <>
            <Link href="/login" passHref legacyBehavior>
              <LoginButton>Login</LoginButton>
            </Link>
            <Link href="/register" passHref legacyBehavior>
              <RegisterButton>Register</RegisterButton>
            </Link>
          </>
        )}
        <Link href="/cart" passHref legacyBehavior>
          <CartButton>Cart</CartButton>
        </Link>
      </RightSection>
    </HeaderContainer>
  );
}
