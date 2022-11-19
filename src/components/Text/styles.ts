import styled from "styled-components";

export const TEXT_SIZES = {
  large: 1.25,
  medium: 1,
  small: 0.875,
} as const;

interface TextContainerProps {
  variant: keyof typeof TEXT_SIZES;
  bold?: boolean;
}

export const TextContainer = styled.p<TextContainerProps>`
  font-family: "Roboto", sans-serif;
  line-height: 1.3;
  font-size: ${(props) => `${TEXT_SIZES[props.variant]}rem`};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: inherit;
`;
