import { useState } from "react"
import { Card } from "./components/Card/card.styled"
import { Text } from "./components/Card/card.styled"
import { Slider } from "./components/Slider/Slider"


function App() {


  return (
    <Card>
      <Text>Calcule seu IMC</Text>

      <Slider name={"weight"} min={20} max={200} defaultValue={65} inner={"Peso"}/>
      <Slider name={"weight"} min={20} max={200} defaultValue={65} inner={"Altura"}/>
    </Card>
  )
}

export default App
