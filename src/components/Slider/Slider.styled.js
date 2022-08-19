import styled from "styled-components";
export const SlideDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  flex-direction: column;

  input[type="range"] {
    width: 200px;
    -webkit-appearance: none;
    cursor: pointer;
    height: 10px;
    border-radius: 2px;
  }

  .labels {
    width: 100%;
    background-color: red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

 
`;

export const LabelDiv = styled.label`
 
  display: flex;
  justify-content: space-around;
  

`;
