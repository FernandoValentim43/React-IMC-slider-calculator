import React from "react";
import { ButtonDiv } from "./Button.styled";
import { AuthContext } from "../../App";

export const Button = ({ imc }) => {
  const { imcCalc } = React.useContext(AuthContext); //page authcontext
  const [weight, setWeight , height, setHeight , imcAwnser, setimcAwnser] = imcCalc; //page state

  const verifyIMC = () => {
    if (imc < 17) {
      setimcAwnser(imc)
      console.log("Muito abaixo do peso");
      localStorage.setItem("imc",  "Muito abaixo do peso");
    } else if (imc > 17 && imc <= 18.49) {
      setimcAwnser(imc)
      console.log("Abaixo do peso");
      localStorage.setItem("imc",  "Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.99) {
      setimcAwnser(imc)
      console.log("Peso normal");
      localStorage.setItem("imc",  "Peso normal");
    } else if (imc >= 25 && imc <= 29.99) {
      setimcAwnser(imc)
      console.log("Acima do peso");
      localStorage.setItem("imc",  "Acima do peso");
    } else if (imc >= 30 && imc <= 34.99) {
      setimcAwnser(imc)
      localStorage.setItem("imc",  "Obesidade I");
      console.log("Obesidade I");
    } else  {
      setimcAwnser(imc)
      console.log("Obesidade II");
      localStorage.setItem("imc",  "Obesidade II");
    }
  };

  return <ButtonDiv onClick={verifyIMC}>Calcular</ButtonDiv>;
};
