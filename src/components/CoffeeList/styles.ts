import styled from "styled-components";

export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 3.375rem;
`;

export const ListCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;
