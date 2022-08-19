import React from "react";
import { ButtonDiv } from "./Button.styled";
import { AuthContext } from "../../App";

export const Button = ({ imc }) => {
  const { imcCalc } = React.useContext(AuthContext); //page authcontext
  
  const verifyIMC = () => {
    if (imc < 17) {
      console.log(imc);
      console.log("Muito abaixo do peso");
      localStorage.setItem("Muito abaixo do peso",  imc);
    } else if (imc > 17 && imc <= 18.49) {
      console.log(imc);
      console.log("Abaixo do peso");
      localStorage.setItem("Abaixo do peso",  imc);
    } else if (imc >= 18.5 && imc <= 24.99) {
      console.log(imc);
      console.log("Peso normal");
      localStorage.setItem("Peso normal",  imc);
    } else if (imc >= 25 && imc <= 29.99) {
      console.log(imc);
      console.log("Acima do peso");
      localStorage.setItem("Acima do peso",  imc);
    } else if (imc >= 30 && imc <= 34.99) {
      console.log(imc);
      localStorage.setItem("Obesidade I",  imc);
      console.log("Obesidade I");
    } else {
      console.log(imc);
      console.log("Obesidade II");
      localStorage.setItem("Obesidade II",  imc);
    }
  };

  return <ButtonDiv onClick={verifyIMC}>Calcular</ButtonDiv>;
};
