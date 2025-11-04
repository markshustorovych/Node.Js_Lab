import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #d4f1ff, #c1f7dc);
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 24px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #374151;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #cdd4e0;
  border-radius: 12px;
  font-size: 1rem;
  background-color: white;
  outline: none;

  &:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #bae6fd;
  color: #1e3a8a;
  padding: 14px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background-color: #7dd3fc;
  }
`;
