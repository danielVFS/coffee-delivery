import styled from "styled-components";

export const BUTTON_BACKGROUND_COLOR = {
  yellow: "yellow-light",
  purple: "purple-dark",
} as const;

export const BUTTON_COLOR = {
  yellow: "yellow-dark",
  purple: "white",
} as const;

export const BUTTON_COUNT_BACKGROUND = {
  yellow: "yellow-dark",
  purple: "purple",
} as const;

export const BUTTON_COUNT_COLOR = {
  yellow: "white",
  purple: "white",
} as const;

interface IconButtonButtonContainerProps {
  variant: keyof typeof BUTTON_COLOR;
}

export const IconButtonButtonContainer = styled.button<IconButtonButtonContainerProps>`
  color: ${(props) => props.theme[BUTTON_COLOR[props.variant]]};
  background: ${(props) => props.theme[BUTTON_BACKGROUND_COLOR[props.variant]]};

  font-size: 1.25rem;
  font-weight: 700;

  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  font-weight: 700;

  transition: all 0.3s;

  position: relative;

  &:hover {
    filter: brightness(90%);
  }
`;

interface IconButtonBadgeProps {
  variant: keyof typeof BUTTON_COLOR;
}

export const IconButtonBadge = styled.div<IconButtonBadgeProps>`
  color: ${(props) => props.theme[BUTTON_COUNT_COLOR[props.variant]]};
  background: ${(props) => props.theme[BUTTON_COUNT_BACKGROUND[props.variant]]};

  font-size: 0.875rem;
  font-weight: 700;

  position: absolute;
  right: -10px;
  top: -8px;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
