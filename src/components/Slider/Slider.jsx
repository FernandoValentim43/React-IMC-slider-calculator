import React from "react";
import { SlideDiv } from "./Slider.styled";
import { useState } from "react";
import { LabelDiv } from "./Slider.styled";

export const Slider = ({ name, min, max, defaultValue, inner, step }) => {
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(1.7);

  if (name == "weight") {
    return (
      <SlideDiv>
        <div className="labels">
          <LabelDiv for={name} className={"label"}>
            {inner}
          </LabelDiv>

          <LabelDiv for={name} className={"number"}>
            {weight}
          </LabelDiv>
        </div>

        <input
          id={name}
          className={name}
          type="range"
          min={min}
          max={max}
          defaultValue={weight}
          step={step}
          onChange={(event) => setWeight(event.target.value)}
        />
      </SlideDiv>
    );
  } else if (name == "height") {
    return (
      <SlideDiv>
        <div className="labels">
          <LabelDiv for={name} className={"label"}>
            {inner}
          </LabelDiv>

          <LabelDiv for={name} className={"number"}>
            {height}
          </LabelDiv>
        </div>

        <input
          id={name}
          className={name}
          type="range"
          min={min}
          max={max}
          defaultValue={height}
          step={step}
          onChange={(event) => setHeight(event.target.value)}
        />
      </SlideDiv>
    );
  }
};
