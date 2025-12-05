import styled from "styled-components";

export const Container = styled.div`
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ItemName = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const ItemPrice = styled.span`
  font-size: 1rem;
  color: #666;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f8f9fa;
  border-radius: 12px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-left: 1rem;
`;


export const TotalAmount = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  text-align: right;
  margin-top: 1rem;
`;

export const Button = styled.button`
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
  margin: 2rem auto 0;

  &:hover {
    background: linear-gradient(135deg, #6ecfee, #a3e1fa);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const RemoveButton = styled.button`
  background: none;
  color: #d9534f;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  margin-top: 0.3rem;

  &:hover {
    text-decoration: underline;
  }
`;
