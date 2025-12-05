import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #84fab0, #8fd3f4);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  flex-wrap: wrap;
  min-height: 80px;
  gap: 10px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px 15px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 480px) {
    justify-content: center;
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #013a4e;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const CenterSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  font-size: 1rem;
  color: #013a4e;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: #024e6b;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const IconImg = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 20px;

  @media (max-width: 480px) {
    justify-content: center;
    width: 100%;
    padding-right: 0;
  }
`;

export const LoginButton = styled.div`
  background: #ffffffcc;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  font-size: 1rem;
  color: #024e6b;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`;

export const RegisterButton = styled(LoginButton)`
  background: #ffffffb3;
  color: #007ea7;

  &:hover {
    background: #ffffff;
    color: #005f7f;
  }
`;

export const CartButton = styled(LoginButton)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffde59cc;
  color: #664100;

  &:hover {
    background: #ffde59;
    color: #4a3200;
  }
`;
