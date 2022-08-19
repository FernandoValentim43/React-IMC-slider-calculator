import styled from "styled-components";
import { css } from "styled-components";
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  align-self: center;
  justify-content: center;

  

  background-color: rgba(255, 255, 255, 0.6);

  
  width: 660px;
  height: 500px;
  
  padding-left: 4.25rem;
  padding-right: 4.25rem;

  border-radius: 12px;

  .weight {
    margin-bottom: 25px;
  }
`;

export const Text = styled.h1`
  text-align: center;
  font-size: 25px;
  margin: 2px;
  

  ${(props) =>
    props.className === "null" &&
    css`
      visibility: hidden;
    `};



`;
