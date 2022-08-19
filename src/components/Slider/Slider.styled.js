import styled from "styled-components";
export const SlideDiv = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;


input[type=range]{
    width: 330px;
    border-radius: 2px;
    height: 23px;
    -webkit-appearance: none;
}

//for fire-fox
input[type=range]::-moz-range-track {
    width: 330px;
}

input[type=range]::-moz-range-thumb {
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgb(247, 183, 24);
    cursor: pointer;
}

//for chrome
input[type=range]::-webkit-slider-runnable-track {
  width: 330px;
}
    

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgb(247, 183, 24);
    cursor: pointer;
}






  .labels {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .label {
      
      align-items: center;
      font-size: 1.5rem;
      margin-top: 25px;
    }

    .number {
      font-size: 2.3rem;
     
      color: rgb(247, 183, 24);
    }
  }
`;

export const LabelDiv = styled.label`
  margin-left: 5px;
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

 
`;
