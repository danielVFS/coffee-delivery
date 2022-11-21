import styled from "styled-components";

export const TEXT_SIZES = {
  large: 1.25,
  medium: 1,
  small: 0.875,
} as const;

export const TEXT_COLORS = {
  title: "base-title",
  subtitle: "base-subtitle",
  text: "base-text",
  label: "base-label",
  hover: "base-hover",
  button: "base-button",
  input: "base-input",
  card: "base-card",
} as const;

interface TextContainerProps {
  variant: keyof typeof TEXT_SIZES;
  color: keyof typeof TEXT_COLORS;
  bold?: boolean;
}

export const TextContainer = styled.p<TextContainerProps>`
  font-family: "Roboto", sans-serif;
  line-height: 1.3;
  font-size: ${(props) => `${TEXT_SIZES[props.variant]}rem`};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) => props.theme[TEXT_COLORS[props.color]]};
`;
