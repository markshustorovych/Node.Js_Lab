import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #d4f1ff, #c1f7dc);
  display: flex;
  flex-direction: column;
`;

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 16px;
`;

export const FormWrapper = styled.div`
  background: #f8fdff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #1a1a1a;
  font-weight: 600;
  font-size: 24px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 12px 16px;
  margin-bottom: 16px;
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
  padding: 12px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #7dd3fc;
  }
`;

export const ErrorText = styled.div``