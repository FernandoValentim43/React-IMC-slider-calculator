import React from "react"
import { useState } from "react"
import { Card } from "./components/Card/card.styled"
import { Text } from "./components/Card/card.styled"
import { Slider } from "./components/Slider/Slider"
import { Button } from "./components/Button/Button"

export const AuthContext = React.createContext();


function App() {
 

 
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(1.7);
  const [imcAwnser, setimcAwnser] = useState(null)
  

 
  

  return (
    <AuthContext.Provider value={{ imcCalc: [weight, setWeight , height ,  setHeight , imcAwnser, setimcAwnser ] }}>
    <Card>
      <Text>Calcule seu IMC</Text>

      <Slider name={"weight"} min={20} max={120} defaultValue={65} inner={"Peso"} step={"1"}/>
      <Slider name={"height"} min={1.00} max={2.00} defaultValue={"170"} inner={"Altura"}  step={"0.01"}/>
      <Button imc={Number.parseFloat((weight/(height*height))).toFixed(2)}/>

      <Text >{"IMC: " + imcAwnser + " (" + localStorage.getItem("imc") + ")"}</Text>
    </Card>
    </AuthContext.Provider>
  )
}

export default App
