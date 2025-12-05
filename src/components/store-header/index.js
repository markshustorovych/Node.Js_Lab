import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HeaderContainer,
  Logo,
  Title,
  LoginButton,
  RegisterButton,
  RightSection,
  LeftSection,
  CartButton,
} from './styled';

export default function StoreHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const checkSession = async () => {
    try {
      const res = await fetch('/api/me');
      const data = await res.json();
      setIsLoggedIn(!!data.user);
    } catch (err) {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkSession();
    router.events.on('routeChangeComplete', checkSession);
    return () => {
      router.events.off('routeChangeComplete', checkSession);
    };
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/users/logout');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <Logo
          src="https://i.pinimg.com/736x/b9/68/ee/b968ee908ef150e3c4b2f82ccaed351f.jpg"
          alt="Logo"
        />
        <Link href="/" >
          <Title>retrodream</Title>
        </Link>
      </LeftSection>

      <RightSection>
        {isLoggedIn ? (
          <LoginButton onClick={handleLogout}>Logout</LoginButton>
        ) : (
          <>
            <Link href="/login" >
              <LoginButton>Login</LoginButton>
            </Link>
            <Link href="/register">
              <RegisterButton>Register</RegisterButton>
            </Link>
          </>
        )}
        <Link href="/cart" >
          <CartButton>Cart</CartButton>
        </Link>
      </RightSection>
    </HeaderContainer>
  );
}
