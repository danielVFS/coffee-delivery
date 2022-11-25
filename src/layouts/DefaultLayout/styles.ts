import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`;
