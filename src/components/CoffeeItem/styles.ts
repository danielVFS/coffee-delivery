import styled from "styled-components";

export const CoffeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
`;

export const ItemInfoContainer = styled.div`
  max-width: 216px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const CoffeeImage = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -40px;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
`;

export const Tag = styled.div`
  height: 21px;
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  text-transform: uppercase;
  font-size: 0.625rem;
  line-height: 1.3;
  font-weight: bold;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 1rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;
