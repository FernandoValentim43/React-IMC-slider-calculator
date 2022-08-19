import React from "react";
import { SlideDiv } from "./Slider.styled";
import { useState } from "react";
import { LabelDiv } from "./Slider.styled";

export const Slider = ({ name, min, max, defaultValue, inner}) => {
  const [rangeval, setRangeval] = useState(null);
  return (
    <SlideDiv>
      <div className="labels">
      <LabelDiv for={name}>
       {rangeval}
      </LabelDiv>
      
      <LabelDiv for={name}>
       {inner}
      </LabelDiv>
      </div>

      <input
        id={name}
        className={name}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        step="1"
        onChange={(event) => setRangeval(event.target.value)}
      />
    </SlideDiv>
  );
};
