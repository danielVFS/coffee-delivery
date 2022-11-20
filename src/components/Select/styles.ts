import styled from "styled-components";

export const SelectContainer = styled.button`
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  width: 72px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
    font-size: 0.875rem;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
