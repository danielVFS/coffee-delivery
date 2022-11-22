import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const IntroContainer = styled.section`
  height: 544px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemsContainer = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface ItemIconProps {
  variant: keyof typeof defaultTheme;
}

export const ItemIcon = styled.div<ItemIconProps>`
  background: ${(props) => props.theme[props.variant]};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.white};
  }
`;
