import styled from "styled-components";

export const SelectPaymentContainer = styled.button`
  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-button"]};

  font-size: 0.75rem;
  line-height: 1.6;
  font-weight: 400;

  width: 178px;
  height: 52px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;

  transition: all 0.3s;

  svg {
    color: ${(props) => props.theme["purple"]};
    width: 16px;
    height: 16px;
    font-weight: 700;
  }

  &:hover {
    color: ${(props) => props.theme["base-subtitle"]};
    background: ${(props) => props.theme["base-hover"]};
  }

  &:focus {
    color: ${(props) => props.theme["base-text"]};
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme.purple};
  }
`;
