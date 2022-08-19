import React from "react";
import { ButtonDiv } from "./Button.styled";
import { AuthContext } from "../../App";

export const Button = ({ imc }) => {

  const verifyIMC = () => {
    if (imc < 17) {
      console.log(imc);
    } else if (imc > 17 && imc <= 18.49) {
      console.log(imc);
    } else if (imc >= 18.5 && imc <= 24.99) {
      console.log(imc);
    } else if (imc >= 25 && imc <= 29.99) {
      console.log(imc);
    } else if (imc >= 30 && imc <= 34.99) {
      console.log(imc);
    } else {
      console.log(imc);
    }
  };

  return <ButtonDiv onClick={verifyIMC}>Calcular</ButtonDiv>;
};
