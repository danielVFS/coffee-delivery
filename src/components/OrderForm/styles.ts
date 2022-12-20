import styled from "styled-components";

export const OrderFormContainer = styled.div`
  margin-top: 15px;
  width: 640px;
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

export const PaymentTypeContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
`;
