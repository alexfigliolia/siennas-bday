import React, { memo } from "react";
import { AlexText } from "Components/AlexText";
import { BirthdayText } from "Components/BirthdayText";
import { MessageText } from "Components/MessageText";
import { SiennaText } from "Components/SiennaText";
import { Swipe } from "Components/Swipe";
import { usePageSwitch } from "Hooks/usePageSwitch";
import { useScreen } from "State/Screen";
import type { Propless } from "Tools/Types";
import { Slide } from "./Slide";

export const Slider = memo(function Slider(_: Propless) {
  const height = useScreen(state => state.height);
  usePageSwitch("slider");

  return (
    <div id="slider" style={{ height }}>
      <Slide index={0}>
        <SiennaText />
        <Swipe />
      </Slide>
      <Slide index={1}>
        <BirthdayText />
        <Swipe />
      </Slide>
      <Slide index={2}>
        <MessageText />
        <Swipe />
      </Slide>
      <Slide index={3}>
        <AlexText />
      </Slide>
    </div>
  );
});
