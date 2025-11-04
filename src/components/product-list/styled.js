import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  align-items: center;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  align-items: center;
`;

export const PageButton = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #1e88e5; 
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover:not(:disabled) {
    background-color: #1565c0;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #b0bec5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
