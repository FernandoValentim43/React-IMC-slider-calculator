import styled from "styled-components";
export const SlideDiv = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;

  input[type="range"] {
    width: 200px;
    -webkit-appearance: none;
    height: 10px;
    border-radius: 2px;
  }

  .labels {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .label {
      height: 30px;
      align-items: center;
      font-size: 16px;
    }

    .number {
      font-size: 1.3rem;
      height: 35px;
      color: rgb(247, 183, 24);
    }
  }
`;

export const LabelDiv = styled.label`
  display: flex;
  justify-content: space-around;

  & > input {
    border: none;
    outline: none;
    background-color: transparent;
    padding-left: auto;
    width: 50px;

    font-size: 1.3rem;
    height: 35px;
    color: rgb(247, 183, 24);
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
