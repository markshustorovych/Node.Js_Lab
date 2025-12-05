import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #013a4e;
  margin-bottom: 0.5rem;
`;

export const Price = styled.p`
  font-size: 1.4rem;
  color: #036b8d;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const BuyButton = styled.button`
  background: linear-gradient(135deg, #7ed9f6, #b1ecff);
  color: #033d60;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  display: block;
  margin: 0 auto;

  &:hover {
    background: linear-gradient(135deg, #6ecfee, #a3e1fa);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;
