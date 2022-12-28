import styled from "styled-components";
import { device } from "../../styles/device";

export const LayoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    padding: 0 1rem;
  }
`;
