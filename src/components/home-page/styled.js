import styled from 'styled-components';

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #bdeeff, #f3fcff);
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`;

export const ProductList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 4vw;
  width: 100%;
  box-sizing: border-box;
  justify-items: center;

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 1.5rem 2vw;
  }
`;
