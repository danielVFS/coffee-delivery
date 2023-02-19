import styled from "styled-components";

export const CoffeeCheckoutContainer = styled.div`
  margin-top: 15px;
  width: 448px;
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["base-card"]};
  gap: 1.5rem;
  padding: 2.5rem;
`;

export const CoffeeCheckoutItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CoffeeCheckoutItemInfo = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }
`;

export const CoffeeCheckoutItemInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CoffeeCheckoutItemInfoActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CoffeeCheckoutRemoveItemButton = styled.button`
  height: 32px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};

    svg {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;

export const CoffeeCheckoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const CoffeeCheckoutInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WithoutCoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;

  img {
    width: 350px;
    height: 300px;
  }
`;
