import { useState } from "react"
import { Card } from "./components/Card/card.styled"
import { Text } from "./components/Card/card.styled"
import { Slider } from "./components/Slider/Slider"
import { Button } from "./components/Button/Button"

function App() {


  return (
    <Card>
      <Text>Calcule seu IMC</Text>

      <Slider name={"weight"} min={20} max={180} defaultValue={65} inner={"Peso"} step={"1"}/>
      <Slider name={"height"} min={1.00} max={2.00} defaultValue={"170"} inner={"Altura"}  step={"0.01"}/>
      <Button/>
    </Card>
  )
}

export default App
