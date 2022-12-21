import styled from "styled-components";

export const InputContainer = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 4px;
  padding: 12px;
  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};
  border: 1px solid ${(props) => props.theme["base-button"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${(props) => props.theme["base-text"]};
`;

export const OptionalContainer = styled.span`
  font-family: "Roboto", sans-serif;
  font-style: italic;
  line-height: 1.3;
  font-size: 0.75rem;
  color: ${(props) => props.theme["base-label"]};
`;
