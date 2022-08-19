import styled from "styled-components";
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  align-self: center;
  justify-content: center;

  max-width: 250px;

  background-color: rgba(255, 255, 255, 0.6);

  padding-left: 8.25rem;
  padding-right: 8.25rem;

  border-radius: 12px;

  .weight {
    margin-bottom: 25px;
  }
`;

export const Text = styled.h1`
  font-weight: 600px;
  text-align: center;
  font-size: 25px;
`;
