import styled from "styled-components";

export const BUTTON_COLORS = {
  yellow: "yellow",
  purple: "purple",
} as const;

export const BUTTON_COLORS_DARK = {
  yellow: "yellow-dark",
  purple: "purple-dark",
} as const;

interface ButtonContainerProps {
  variant: keyof typeof BUTTON_COLORS;
  fullWidth?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[BUTTON_COLORS[props.variant]]};

  font-size: 0.875rem;
  line-height: 1.6;

  width: ${(props) => (props.fullWidth ? "100%" : "132px")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  font-weight: 700;

  transition: all 0.3s;

  &:hover {
    background: ${(props) => props.theme[BUTTON_COLORS_DARK[props.variant]]};
  }
`;
