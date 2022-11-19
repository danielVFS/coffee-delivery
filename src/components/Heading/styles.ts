import styled from "styled-components";

export const HEADING_SIZES = {
  xl: 3,
  large: 2,
  medium: 1.5,
  small: 1.25,
  xs: 1.125,
} as const;

export const HEADING_FONT_WEIGHT = {
  xl: 800,
  large: 800,
  medium: 800,
  small: 700,
  xs: 700,
} as const;

interface HeadingContainerProps {
  variant: keyof typeof HEADING_SIZES;
}

export const HeadingContainer = styled.h3<HeadingContainerProps>`
  font-family: "Baloo 2", sans-serif;
  line-height: 1.3;
  font-size: ${(props) => `${HEADING_SIZES[props.variant]}rem`};
  font-weight: ${(props) => `${HEADING_FONT_WEIGHT[props.variant]}`};
  color: inherit;
`;
