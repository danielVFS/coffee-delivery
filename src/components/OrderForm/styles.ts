import styled from "styled-components";

export const OrderFormContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const AddressContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
`;

export const AddressInfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125;
`;

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputInfoContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const PaymentTypeContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
`;

export const PaymentInfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
