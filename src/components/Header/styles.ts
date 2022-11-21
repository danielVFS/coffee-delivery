import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 104px;
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocationContainer = styled.div`
  width: 143px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme["purple-dark"]};
  background: ${(props) => props.theme["purple-light"]};

  .location-svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
