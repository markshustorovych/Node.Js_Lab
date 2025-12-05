import styled from 'styled-components';

export const Card = styled.div`
  width: 400px;
  height: 500px;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ProductTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #013a4e;
  margin: 0.5rem 0;
  font-family: 'Poppins', sans-serif;
`;

export const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: #036b8d;
  margin-bottom: 1.2rem;
  font-family: 'Poppins', sans-serif;
`;

export const AddButton = styled.button`
  background: linear-gradient(135deg, #7ed9f6, #b1ecff);
  color: #033d60;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, #6ecfee, #a3e1fa);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;
